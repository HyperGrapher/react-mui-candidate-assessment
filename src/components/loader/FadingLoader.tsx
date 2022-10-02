import Loader from 'components/loader/Loader';
import { AnimatePresence } from 'framer-motion';
import AnimatedPageContainer from 'components/animated-page/AnimatedPage';
import AnimatedOverlay from 'components/animated-overlay/AnimatedOverlay';

interface Props {
    show: boolean
}
/* Full page css loader with fade in / fade out backdrop */
const FadingLoader: React.FC<Props> = ({ show }) => (

    <AnimatePresence initial={false} mode="wait">
        {show &&
            <AnimatedOverlay>
                <Loader scale={1.15} />
            </AnimatedOverlay>}
    </AnimatePresence >

)


export default FadingLoader