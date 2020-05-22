import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components'

const MainDiv = styled(motion.div)<Props>`
    grid-area: ${props => props.gridArea};
    background-image: ${props =>  
        props.foreGroundArt  && props.noBgArt ? `url(/img/bg/${props.foreGroundArt}), url(/img/bg/bg_simple.png)` :
        props.foreGroundArt  ? `url(/img/bg/${props.foreGroundArt}), url(/img/bg/blueBg.png)` :
        'url(/img/bg/blueBg.png)'};
    background-repeat: no-repeat, no-repeat;
`;

interface Props {
    gridArea: string;
    foreGroundArt?: string;
    noBgArt:boolean;
    children?: ReactNode
}

const Main: React.FC<Props> = ({ children, gridArea, foreGroundArt, noBgArt}) => {
    return (
        <AnimatePresence exitBeforeEnter>
                <MainDiv gridArea={gridArea} 
                    foreGroundArt={foreGroundArt} noBgArt={noBgArt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
                        {children}
                </MainDiv>
        </AnimatePresence>
    )
}

export default Main
