// import Link from 'next/link'
import styled from 'styled-components'

const MainDiv = styled.div`
    font-style: normal;
    font-weight: lighter;
    font-size: 24px;
    position: relative;
    left: 60px;
    top: 14px;
    color:white;
`;

const Selected = styled.span`
    font-weight: bold;
`;

const Breadcrumb = () => {
    return (
        <MainDiv>
            Home &gt; Toolbox &gt; <Selected>BV Prevalence</Selected>
        </MainDiv>
    )
}

export default Breadcrumb
