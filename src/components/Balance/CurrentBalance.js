import { useEffect, useState } from "react";
import { Balances } from "../../providers/Balances"


export function CurrentBalance() {
    const { getCurrentBalanceByUserID } = Balances()
    const [ currentBalance, SetCurrentBalance ] = useState(0.00)
    
    async function handleBalanceUpdate() {
        const txs = await getCurrentBalanceByUserID();
        SetCurrentBalance(txs)
        // console.log(currentBalance);
    };

    useEffect(() => {
        handleBalanceUpdate()
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <>
            {`$${Number(currentBalance.current_balance).toFixed(2)}`}
        </>
    )
}