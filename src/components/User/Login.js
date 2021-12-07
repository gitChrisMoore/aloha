import { useRef } from 'react';
import { useAuth } from '../../contexts/Auth'
import {TextField,
        Container,
        Typography,
        Button,
        Grid,
        Box} from "@mui/material/";
import {Link,
        useNavigate } from 'react-router-dom'

export function Login() {
    const { signIn } = useAuth()
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log('email, ', email)
        console.log('password, ', password)
        const { error } = await signIn({ email, password })
        if (error) {
            alert('error signing in')
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
                        Log in
                    </Typography>
                    <TextField
                        inputRef={emailRef}
                        margin="normal"
                        required
                        fullWidth
                        label="Email Address"
                        autoFocus
                        id="input-email"
                        autoComplete="username"
                    />
                    <TextField
                        inputRef={passwordRef}
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="input-password"
                        autoComplete="password"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2 }}
                        >
                        Sign In
                    </Button>

                    <Grid container>
                        <Grid item xs>
                            <Link to="/signup">Forgot Password</Link>
                        </Grid>
                        <Grid item>
                            <Link to="/signup">Sign Up</Link>
                        </Grid>
                    </Grid>
                </Box>


            </Box>
        </Container>
    </div>
  );
}