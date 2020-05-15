import { ReactNode } from 'react';
import styled from 'styled-components'

const MainDiv = styled.div`
    background: pink;
`;

type Props = {
    children: ReactNode;
    title?: string;
}

const Main: React.FC<Props> = ({ children }) => {
    return (
        <MainDiv>
            {children}
        </MainDiv>
    )
}

export default Main
