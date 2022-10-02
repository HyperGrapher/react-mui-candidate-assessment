import { TextField, InputAdornment } from '@mui/material';
import { TextFieldError, TextFieldWrapper } from 'components/styled/TextFieldWrapper';
import React, { ReactNode } from 'react';
import { capitalizeFirstLetter } from 'utils/capitalize';


interface Props {
    label: string
    type: string
    autoFocus?: boolean
    isError: boolean
    disabled?: boolean
    register?: any
    errorMsg?: string | undefined
    icon: ReactNode
}
const FormField: React.FC<Props> = ({
    label,
    type,
    autoFocus,
    isError,
    disabled,
    register,
    errorMsg,
    icon
}) => {
    return (
        <TextFieldWrapper>
            <TextField
                label={label}
                type={type}
                error={isError}
                disabled={disabled}
                autoFocus={autoFocus}
                variant='outlined'
                fullWidth
                {...register}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            {icon}
                        </InputAdornment>
                    ),
                }}
            />

            {errorMsg &&
                <TextFieldError>
                    {capitalizeFirstLetter(errorMsg)}
                </TextFieldError>
            }


        </TextFieldWrapper>
    )
}

export default FormField