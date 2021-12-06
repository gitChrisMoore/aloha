import { Paper, Box, Grid, Typography, Button } from "@mui/material";


export function BalanceContainer() {

    return (
    <Box display= 'flex'
            p={2}
            sx={{ maxWidth: 'md' }} 
            margin='auto'
    >
        <Paper>
            <Grid container
                    spacing={3}
                    sx={{ mt: 1, mb: 1 }}
            >

                <Grid item xs={12}>
                    <Typography variant="h4" align='center'>
                        Balance
                    </Typography>
                    <Typography variant="subtitle2" align='center'>
                        As of, XXXX Date
                    </Typography>
                </Grid>

                <Grid item  xs={12}>
                    <Button
                        fullWidth
                    >
                    Add Funds
                    </Button>
                </Grid>

            </Grid>
            
        </Paper>
    </Box>
    )
}