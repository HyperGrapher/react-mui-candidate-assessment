import { Stack } from '@mui/material';
import { FloatIcon } from 'components/assets/icons';
import useMediaQuery from '@mui/material/useMediaQuery';

const LoginHeader: React.FC = () => {

    const isKeyboardOpen = useMediaQuery('(max-height:440px)');

    return (
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
    )
}

export default LoginHeader