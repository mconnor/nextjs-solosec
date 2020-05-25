import styled from 'styled-components';
import QnA from './QnA'

const MainDiv = styled.div`
    
    margin-left: 93px;
    margin-right: 93px;
margin-top: 90px;

    display: grid;
    grid-template-columns: 1fr;
    gap: 70px;
`;



type Props = {
    qaArray: string[][];
}

const QA: React.FC<Props> = ({ qaArray }) => {
    return (
        <MainDiv>
            {
                qaArray.map((arrayItem: string[], i: number) => {
                    return (
                        <QnA
                            q={arrayItem[0]}
                            a={arrayItem[1]}
                            key={i} />
                    )
                })
            }
        </MainDiv>
    )
}

export default QA
