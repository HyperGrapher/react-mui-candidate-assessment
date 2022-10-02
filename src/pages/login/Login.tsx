import { Stack, Button, Container } from '@mui/material';
import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { IcoKey, IcoMail } from 'components/assets/icons';
import { ILoginForm } from 'interfaces/auth.interface';
import { authService } from 'services/auth.service';
import { useNavigate } from 'react-router-dom';
import FadingLoader from 'components/loader/FadingLoader';
import ErrorMessage from 'components/error-message/ErrorMessage';
import LoginHeader from 'components/login-header/LoginHeader';
import CustomFormField from 'components/form-field/FormField';


const validationSchema = yup.object({
    email: yup.string().email('Please enter a valid email.').required(),
    password: yup.string().required().min(8),
}).required();


const Login: React.FC = () => {

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

                <LoginHeader />

                <form style={{ height: '100%' }} onSubmit={handleSubmit(attemptLogin)}>

                    <Stack
                        justifyContent={'space-around'}
                        height={'100%'}
                        flexDirection={'column'}>

                        <Stack
                            flexDirection={'column'}
                            gap={'2.25rem'}
                            marginBottom={'2.25rem'}>

                            <CustomFormField
                                label='Email'
                                type="email"
                                autoFocus={true}
                                isError={!!errors.email}
                                disabled={isSubmitting}
                                register={register('email', { required: true })}
                                errorMsg={errors?.email?.message}
                                icon={<IcoMail />}
                            />

                            <CustomFormField
                                label='Password'
                                type="password"
                                autoFocus={false}
                                isError={!!errors.password}
                                disabled={isSubmitting}
                                register={register('password', { required: true })}
                                errorMsg={errors?.password?.message}
                                icon={<IcoKey />}
                            />


                        </Stack>

                        <ErrorMessage
                            state={error && !isValid}
                            message="Incorrect username or password." />

                        <Button
                            disabled={!isValid || isSubmitting}
                            sx={{
                                marginTop: 'auto',
                                marginBottom: '4rem',
                                minHeight: '3rem'
                            }}
                            type="submit"
                            variant="contained"
                            fullWidth>
                            Login
                        </Button>

                    </Stack>

                </form>

            </Stack>

            {/* Full page fade in overlay with css loader animation */}
            <FadingLoader show={isSubmitting} />

        </Container>
    )
}

export default Login