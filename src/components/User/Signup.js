
import { useRef } from 'react';
import { useAuth } from '../../contexts/Auth'

import {TextField,
        Container,
        Typography,
        Button,
        Box} from "@mui/material/";


import { useNavigate } from 'react-router-dom'

export function Signup() {
    const { signUp } = useAuth()
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        const email = emailRef.current.value
        const password = passwordRef.current.value
        
        const { error } = await signUp({ email, password })
        if (error) {
            alert('error in creating account')
        } else {
            console.log('success')
            navigate('/scan')
        }
    };

  return (
    <div>
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
            >
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <Typography variant="h5">
                        Sign Up
                    </Typography>
                    <TextField
                        inputRef={emailRef}
                        margin="normal"
                        required
                        fullWidth
                        label="Email Address"
                        autoFocus
                        id="input-email"
                        autoComplete="email"
                    />
                    <TextField
                        inputRef={passwordRef}
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        id="input-password"
                        autoComplete="current-password"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2 }}
                        >
                        Create Account
                    </Button>

                </Box>


            </Box>
        </Container>
    </div>
  );
}