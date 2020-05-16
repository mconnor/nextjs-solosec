
import styled from 'styled-components'

const MainDiv = styled.div<Props>`
    grid-area: ${props => props.gridArea};
    color: black;
    font-size: .6rem;
    background: rgb(213,233,247);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 8px 10px;
    overflow: hidden;
`;
const InnerDiv = styled.div`
    background: white;
    border-radius: 4px;
    padding: 8px;
`;
const Headline = styled.h1`
    background: var(--isi-headline-bg);
    color: gray;
`;

const SubHeadline = styled.h2`
    background: var(--isi-headline-bg);
    color: gray;
`;


interface Props {
    gridArea: string;
}

const Footer: React.FC<Props> = ({ gridArea }) => {
    return (
        <MainDiv gridArea={gridArea}>
            <Headline>IMPORTANT SAFETY INFORMATION</Headline>
            <InnerDiv>
                <SubHeadline>Dosage and Administration</SubHeadline>
                <p>SOLOSEC® (secnidazole) 2g oral granules is a 5-nitroimidazole antimicrobial
                agent indicated for the treatment of
                bacterial vaginosis in adult women.
                </p>
            </InnerDiv>
        </MainDiv>
    )
}

export default Footer
