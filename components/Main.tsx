import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components'

const MainDiv = styled(motion.div)<Props>`
    grid-area: ${props => props.gridArea};
    text-align: center;
    background-image: ${props =>  props.backgroundArt ? `url(/img/bg/${props.backgroundArt}), url(/img/bg/blueBg.png)` : 'url(/img/bg/blueBg.png)'};
    background-repeat: no-repeat, no-repeat;
`;

interface Props {
    gridArea: string;
    backgroundArt?: string;
    children?: ReactNode
}

const Main: React.FC<Props> = ({ children, gridArea, backgroundArt}) => {
    return (
        <AnimatePresence exitBeforeEnter>
                <MainDiv gridArea={gridArea} backgroundArt={backgroundArt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
                        {children}
                
                </MainDiv>
        </AnimatePresence>
    )
}

export default Main
