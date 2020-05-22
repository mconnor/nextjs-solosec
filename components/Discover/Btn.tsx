
import { useState } from 'react';

type Props = {
    svglink:string;
    svgClicked: string;
}

const Btn:React.FC<Props> = ({ svglink, svgClicked}) => {
    const [showSVG, setShowSVG] = useState(`/img/svg/${svglink}.svg`);
    return (
        <>
             <img src={showSVG} onClick={() => setShowSVG(`/img/svg/${svgClicked}.svg`)} />
        </>
    )
}

export default Btn
