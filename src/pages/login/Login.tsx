import { TextField, Stack, Button, Container, Typography, InputAdornment } from '@mui/material';
import { TextFieldError, TextFieldWrapper } from 'components/styled/TextFieldWrapper';
import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FloatIcon } from 'components/assets/icons';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { IcoKey, IcoMail } from 'components/assets/icons';
import { ILoginForm } from 'interfaces/auth.interface';
import { capitalizeFirstLetter } from 'utils/capitalize';


const validationSchema = yup.object({
    email: yup.string().email('Please enter a valid email.').required(),
    password: yup.string().required().min(8),
}).required();


const Login: React.FC = () => {

    const isKeyboardOpen = useMediaQuery('(max-height:440px)');
    const isDesktop = useMediaQuery('(min-width:1024px)');
    const [error, setError] = useState(false)

    const { register, handleSubmit, formState: { errors, isValid, isSubmitting, isSubmitSuccessful } } = useForm<ILoginForm>({
        resolver: yupResolver(validationSchema),
        reValidateMode: 'onChange',
        mode: 'all',
    });

    const attemptLogin = async (credentials: ILoginForm) => {
        console.log(credentials);

        // mock server login wait
        await new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                return resolve()
            }, 3000);
        })

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

                                {errors.email &&
                                    <TextFieldError>
                                        {capitalizeFirstLetter(errors.email?.message)}
                                    </TextFieldError>
                                }
                            </TextFieldWrapper>

                            <TextFieldWrapper>

                                <TextField
                                    label='Password'
                                    type='password'
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

                                {errors.password &&
                                    <TextFieldError>
                                        {capitalizeFirstLetter(errors.password?.message)}
                                    </TextFieldError>
                                }
                            </TextFieldWrapper>

                            {error &&
                                <Typography color={'#ff3149'}>
                                    You have entered an invalid username or password
                                </Typography>
                            }

                            {isDesktop &&
                                <Typography
                                    mt={'5rem'}
                                    textAlign={'center'}
                                    color={'#0085dd'}>
                                    Note: UI is designed for mobile devices for the assessment.
                                </Typography>
                            }

                        </Stack>


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