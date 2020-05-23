
import { useState } from 'react';
import styled from 'styled-components';

type Props = {
    svglink:string;
    svgClicked: string;
}

const Img = styled.img`
    width: 460px;
height: 201px;
`;


const Btn:React.FC<Props> = ({ svglink, svgClicked}) => {
    const [showSVG, setShowSVG] = useState(`/img/svg/${svglink}.svg`);
    return (
        <>
             <Img src={showSVG} onClick={() => setShowSVG(`/img/svg/${svgClicked}.svg`)} />
        </>
    )
}

export default Btn
