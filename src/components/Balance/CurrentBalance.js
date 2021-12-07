import { useEffect, useState } from "react";
import { Balances } from "../../providers/Balances"


export function CurrentBalance() {
    const { getCurrentBalanceByUserID } = Balances()
    const [ currentBalance, SetCurrentBalance ] = useState(parseFloat(0))
    
    async function handleBalanceUpdate() {
        const txs = await getCurrentBalanceByUserID();
        if(txs) SetCurrentBalance(txs.current_balance)
        else {
            console.log("No current balance")
            SetCurrentBalance(parseFloat(0))
        }
        
        // console.log(currentBalance);
    };

    useEffect(() => {
        handleBalanceUpdate()
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <>
            {`$${Number(currentBalance).toFixed(2)}`}
        </>
    )
}