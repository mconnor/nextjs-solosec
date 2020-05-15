import styled from 'styled-components'

const MainDiv = styled.div`
    background: pink;
`;

const Main = ({ children }) => {
    return (
        <MainDiv>
            {children}
        </MainDiv>
    )
}

export default Main
