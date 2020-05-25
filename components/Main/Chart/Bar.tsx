import styled from 'styled-components';

const BarDiv = styled.div<Props>`
    position: relative;
    width: 128px;
    background: ${props => props.placebo ? 'gray' : 'green'};
    height: ${prop => `${prop.max}px`};
    text-align:center;
`;




const Score = styled.div`
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: white;
`;

type Props = {
    max: number;
    score:number;
    placebo?: boolean;
}

const Bar: React.FC<Props> = ({ max, placebo, score}) => {
    return (
        <BarDiv placebo={placebo} max={max} score={score}>
            <Score>{score}%</Score>
        </BarDiv>
    )
}

export default Bar

// full heigth width: 247;