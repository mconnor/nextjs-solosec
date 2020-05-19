import Link from 'next/link'
import Layout from '../components/Layout';
import styled from 'styled-components'

const MainDiv = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 500px;
    place-items: center;
    gap: 100px;
    font-size: large;
    &.a {
        border: 2px solid black;
        color: yellow;
    };
`;


export default () => (
		<Layout>
			<MainDiv>
                <a href='01_home.html'>Regular Link to 01_home.html</a>
                <Link href="/01_home">
                    <a className="btn btn-light">Nex.js LInk to 01_home -  runs as single page app</a>
                </Link>
            </MainDiv>
		</Layout>
)