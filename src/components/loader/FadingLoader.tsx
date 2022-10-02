import Loader from 'components/loader/Loader';
import { AnimatePresence } from 'framer-motion';
import AnimatedPageContainer from 'components/animated-page/AnimatedPage';
import AnimatedOverlay from 'components/animated-overlay/AnimatedOverlay';

interface Props {
    state: boolean
}
/* Full page css loader with fade in / fade out backdrop */
const FadingLoader: React.FC<Props> = ({ state }) => (
    <AnimatePresence initial={false} mode="wait">
        {state &&
            <AnimatedOverlay state={true}>
                <Loader />
            </AnimatedOverlay>}
    </AnimatePresence >
)


export default FadingLoader