import { Box, Grid, Typography } from "@mui/material";
import { TransactionsList } from "../Transactions/TransactionsList";
import { CurrentBalance } from "./CurrentBalance"

export function BalanceContainer() {
    
    return (
        <>
            <Box 
                sx={{ maxWidth: 'md' }}
                margin='auto'
            >
                <Grid item  pt={3} pb={1}>
                    <Typography variant="subtitle1" fontWeight="bold" ml={2}>
                        Current Balance
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography variant="h5" align='center'>
                        <CurrentBalance />
                    </Typography>
                </Grid>

                <Grid item  pt={3}>
                    <TransactionsList />
                </Grid>
            </Box>
    </>
    )
}