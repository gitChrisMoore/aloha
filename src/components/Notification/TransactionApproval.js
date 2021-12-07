import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

import { useRemoteEvents } from '../../contexts/RemoteEventProvider';
import { Transactions } from '../../providers/Transactions'

export const TransactionApproval = () => {
    const [open, setOpen] = useState(false);
    const [tx, setTx] = useState({});
    const {message} = useRemoteEvents();
    const {createApproved, getByID} = Transactions();
    const navigate = useNavigate()

    async function handleMessage(message) {
        
        const reqTx = message.new.payload.detail
        const res = await getByID(reqTx)
        
        if (message && res) {
            // console.log('tx ', tx)
            setTx(res)
            setOpen(true)
        };

    };

    
    async function handleClickApprove() {
        const res = await createApproved(tx);
        if (res) {
            setTx(null)
        }
        setOpen(false);
        navigate('/dashboard')
    };
    
    const handleClickDecline = () => {
        setTx(null)
        setOpen(false);
    };

    const handleClose = () => {
        setTx(null)
        setOpen(false);
    };

    useEffect(() => {
        // console.log('Transaction Appproval Container')
        // console.log('Fired ', message)
        if (message) handleMessage(message)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [message]);

    return (
        <div>
            
            <Dialog
                open={open}
                fullWidth
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Accept payment?"}
                </DialogTitle>
                <DialogContent>
                    <Typography component="p" variant="h4">
                    ${tx?.amount}
                    {/* Amount */}
                    </Typography>
                    
                    <Typography color="text.secondary" sx={{ flex: 1 }}>
                    for the current order
                    </Typography>
                </DialogContent>
                <DialogActions>
                <Button 
                    onClick={handleClickDecline}
                    fullWidth
                    >
                    Decline
                </Button>
                <Button 
                    onClick={handleClickApprove}
                    autoFocus
                    fullWidth
                    variant="contained"
                    > 
                    Pay 
                </Button>
                </DialogActions>
            </Dialog>
        </div>
      );

};