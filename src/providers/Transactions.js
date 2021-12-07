import { supabase } from '../supabase'
import {v4 as uuid} from 'uuid'


async function makeTx(oldTransaction, status) {
        
    let tx = oldTransaction

    if(status === 'PENDING_APPROVAL') {
        tx.transaction_id = uuid();
        tx.transaction_state = 500;
        tx.status = 'PENDING_APPROVAL'
    } else if (status === 'APPROVED') {
        tx.transaction_state = 1500;
        tx.status = 'APPROVED';
    }

    delete tx.id
    delete tx.inserted_at
    delete tx.effective_date

    return tx

}

async function createTx(tx) {
        
        let { data, error } = await supabase
            .from("transactions")
              .insert(tx)
              .single();
        if (error) {
            console.log("createTx - error - : ", error);
            console.log(error)
        } else if (data) {
            console.log('createTx - success - ', data)
            return data
        }

}

export const Transactions = () => {
    
    const createPendingApproval = async (oldTransaction) => {

        const tx = await makeTx(oldTransaction, 'PENDING_APPROVAL');
        if (tx) {
            const res = await createTx(tx);
            return res
        }
        
    };

    const createApproved = async (oldTransaction) => {

        const txState = await getStateByID(oldTransaction);


        if (txState.transaction_state === 500) { //Make Sure its in prior state
            
            console.log(txState)
            const tx = await makeTx(oldTransaction, 'APPROVED');
            if (tx) {
                const res = await createTx(tx);
                return res
            }
        } else {
            console.log('Transaction state error - ', txState)
            return 
        }
        
    };

    const getStateByID = async (tx) => {

        let {data, error} = await supabase
            .from('transactions')
            .select("*")
            .order("transaction_state", { ascending: false })
            .eq('transaction_id', tx.transaction_id)
            .limit(1)
        if (error) console.log('error - ', error)
        if (data.length > 0) {
            // console.log("found data, ", data)
            return data[0]
        }
    };

    const getByID = async (tx) => {

        let {data, error} = await supabase
            .from('transactions')
            .select("*")
            .order("id", { ascending: false })
            .eq('id', tx.id)
            .limit(1);
        if (error) console.log('error - ', error)
        if (data.length > 0) {
            // console.log("found data, ", data)
            return data[0]
        }
    };

    const getTransactionsByStatus = async (status) => {

        let {data, error} = await supabase
            .from('transactions')
            .select("*")
            .eq('status', status)
            .order("id", { ascending: false })
        if (error) console.log('error - ', error)
        if (data.length > 0) {
            return data
        } else {
            return []
        }
    };

    return {
        createPendingApproval,
        createApproved,
        getTransactionsByStatus,
        getByID
    }

}