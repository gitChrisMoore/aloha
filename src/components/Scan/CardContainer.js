import { Paper, Box, Grid, Divider, Typography, Button } from "@mui/material";
import { QRCodeCard } from "./QRCodeCard";

import { Balances } from "../../providers/Balances"
import { AddFundsFormDialog } from "./AddFundsFormDialog"
import { useEffect, useState } from "react";

export function CardContainer() {
    const { getCurrentBalanceByUserID } = Balances()
    const [ currentBalance, SetCurrentBalance ] = useState()
    const [ open, setOpen ] = useState(false)
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    async function handleBalanceUpdate() {
        const txs = await getCurrentBalanceByUserID();
        SetCurrentBalance(txs)
        // console.log(currentBalance);
    };

    useEffect(() => {
        handleBalanceUpdate()
        // setOpen(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
    <Box p={3}
        sx={{ maxWidth: 'md' }} 
        margin='auto'
    >
        <Paper>
            <Grid container
                    spacing={3}
                    sx={{ mt: 1, mb: 1}}
                    alignItems="center"
                    
            >
                <Grid item  xs={12}>
                    <QRCodeCard />
                </Grid>

                <Grid item  xs={12}>
                    <Divider />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h4" align='center'>
                        {`$${Number(currentBalance?.current_balance).toFixed(2)}`}
                    </Typography>
                </Grid>

                <Grid item xs={12} margin='auto'>
                    <Button
                        fullWidth
                        onClick={handleClickOpen}
                    >
                    Add Funds
                    </Button>
                </Grid>

            </Grid>
            
        </Paper>
        <AddFundsFormDialog 
            open={open}
            setOpen={setOpen}
            />
    </Box>
    )
}