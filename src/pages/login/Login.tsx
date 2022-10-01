import { TextField, Stack, Button, Container, Typography } from '@mui/material';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FloatIcon } from 'components/assets/icons';


const Login = () => {

    const isKeyboardOpen = useMediaQuery('(max-height:440px)');
    const [disabled, setDisabled] = useState(true)
    const [error, setError] = useState(false)

    const attemptLogin = () => {

    }

    return (
        <Container>

            <Stack height={'100vh'} flexDirection={'column'}>

                <header>
                    <Stack
                        justifyContent={'center'}
                        alignItems={'center'}
                        // on mobile if keyboard is open assign 
                        // lesser padding and animate transitions
                        // Also works on landscape mode.
                        sx={{ transition: 'padding 0.4s ease-in-out' }}
                        paddingY={isKeyboardOpen ? "2rem" : '4rem'}
                        >

                        <div
                            style={{
                                transition: 'all 0.4s ease-in-out',
                                transform: isKeyboardOpen ? "scale(0.8)" : "scale(1)"
                            }}>
                            <FloatIcon />

                        </div>

                    </Stack>
                </header>

                <form style={{ height: '100%' }} onSubmit={attemptLogin}>
                    <Stack
                        justifyContent={'space-around'}
                        height={'100%'}
                        flexDirection={'column'}>

                        <Stack flexDirection={'column'} gap="2rem" marginBottom={'2rem'} >
                            <TextField
                                id="email"
                                name='email'
                                label='Email'
                                variant="filled"
                                required />

                            <TextField
                                id="password"
                                name='password'
                                label='Password'
                                type="password"
                                variant="filled"
                                required />

                            {error &&
                                <Typography color={'#ff3149'}>
                                    You have entered an invalid username or password
                                </Typography>
                            }

                        </Stack>


                        <Button
                            disabled={disabled}
                            sx={{ marginTop: 'auto', marginBottom: '4rem', minHeight: '3rem' }}
                            type="submit"
                            variant="contained"
                            fullWidth>
                            Login
                        </Button>
                    </Stack>

                </form>



            </Stack>

        </Container>
    )
}

export default Login