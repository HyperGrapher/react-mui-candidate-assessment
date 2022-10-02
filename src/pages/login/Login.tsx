import { TextField, Stack, Button, Container, Typography, InputAdornment, Paper } from '@mui/material';
import { TextFieldError, TextFieldWrapper } from 'components/styled/TextFieldWrapper';
import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import useMediaQuery from '@mui/material/useMediaQuery';
import { FloatIcon } from 'components/assets/icons';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { IcoKey, IcoMail } from 'components/assets/icons';
import { ILoginForm } from 'interfaces/auth.interface';
import { capitalizeFirstLetter } from 'utils/capitalize';
import { authService } from 'services/auth.service';
import { useNavigate } from 'react-router-dom';


const validationSchema = yup.object({
    email: yup.string().email('Please enter a valid email.').required(),
    password: yup.string().required().min(8),
}).required();


const Login: React.FC = () => {

    const isKeyboardOpen = useMediaQuery('(max-height:440px)');
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        resetField,
        formState: { errors, isValid, isSubmitting } } = useForm<ILoginForm>({
            resolver: yupResolver(validationSchema),
            reValidateMode: 'onChange',
            mode: 'all',
        });

    const attemptLogin = async (credentials: ILoginForm) => {
        console.log(credentials);

        const success = await authService.login(credentials)

        if (success) navigate('/', { replace: true });
        else {
            setError(true)
            resetField('password')
        }

    }

    return (
        <Container maxWidth="xs">

            <Helmet>
                <title>Please Login</title>
            </Helmet>

            <Stack height={'100vh'} flexDirection={'column'}>

                <header>
                    {/* 
                        on mobile device if keyboard is open assign 
                        lesser padding and animate transition.
                    */}
                    <Stack
                        justifyContent={'center'}
                        alignItems={'center'}
                        sx={{ transition: 'padding 0.4s ease-in-out' }}
                        paddingY={isKeyboardOpen ? "2rem" : '4rem'}>

                        <div
                            style={{
                                transition: 'all 0.4s ease-in-out',
                                transform: isKeyboardOpen ? "scale(0.8)" : "scale(1)"
                            }}>
                            <FloatIcon />

                        </div>

                    </Stack>
                </header>

                <form style={{ height: '100%' }} onSubmit={handleSubmit(attemptLogin)}>
                    <Stack
                        justifyContent={'space-around'}
                        height={'100%'}
                        flexDirection={'column'}>

                        <Stack
                            flexDirection={'column'}
                            gap="2.25rem"
                            marginBottom={'2.25rem'}>

                            <TextFieldWrapper>
                                <TextField
                                    label='Email'
                                    type='email'
                                    error={!!errors.email}
                                    disabled={isSubmitting}
                                    autoFocus
                                    variant='outlined'
                                    fullWidth
                                    {...register('email', { required: true })}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <IcoMail />
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                {errors.email && <TextFieldError>{capitalizeFirstLetter(errors.email?.message)}</TextFieldError>}


                            </TextFieldWrapper>

                            <TextFieldWrapper>

                                <TextField
                                    label='Password'
                                    type='password'
                                    error={!!errors.password}
                                    disabled={isSubmitting}
                                    autoComplete='current-password'
                                    fullWidth
                                    {...register('password', { required: true, minLength: 6 })}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <IcoKey />
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                {errors.password && <TextFieldError>{capitalizeFirstLetter(errors.password?.message)}</TextFieldError>}

                            </TextFieldWrapper>

                        </Stack>


                        {(error && !isValid) &&
                            <Paper 
                                elevation={0} 
                                sx={{ background: '#fdf5e2', padding: "0.5rem 1rem", marginBottom: '2rem' }}>
                                <Typography     
                                    textAlign={'center'} 
                                    fontSize={'0.85rem'} 
                                    color={'#ff3149'}>
                                    Incorrect username or password.
                                </Typography>
                            </Paper>
                        }

                        <Button
                            disabled={!isValid || isSubmitting}
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