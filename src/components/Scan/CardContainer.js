import { Paper, Box, Grid, Divider, Typography, Button } from "@mui/material";
import { QRCodeCard } from "./QRCodeCard";

export function CardContainer() {

    return (
    <Box display= 'flex'
            p={3}
            sx={{ maxWidth: 'md' }} 
            margin='auto'
    >
        <Paper>
            <Grid container
                    spacing={3}
                    sx={{ mt: 1, mb: 1 }}
            >
                <Grid item  xs={12}>
                    <QRCodeCard />
                </Grid>

                <Grid item  xs={12}>
                    <Divider />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h4" align='center'>
                        $2,000
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