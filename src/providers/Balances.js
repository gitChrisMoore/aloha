import { supabase } from '../supabase'


export const Balances = () => {

    const getCurrentBalanceByUserID = async () => {
        let {data, error} = await supabase
            .from('current_balance')
            .select("*")
            .single()
        if (error) console.log('error - ', error)
        if (data) {
            return data
        } else {
            return null
        }

    };

    return {
        getCurrentBalanceByUserID
    }

}