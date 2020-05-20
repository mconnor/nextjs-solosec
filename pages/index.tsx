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
  
    a {
        border: 2px solid black;
        color: yellow;
        background: gray;
        padding: 20px;
        white-space: pre-wrap;
        font-size: x-large;
        line-height: 50px;
        &:hover {
            color: white;
     }
    };
   
`;

const MULTI  = 'Multi-page-app Link\n01_home.html'
const SINGLE  = 'Single-page-app Link\n01_home.html'
export default () => (
		<Layout>
			<MainDiv>
                <a href='01_home.html'>{MULTI}</a>
                <Link href="/01_home">
                    <a className="btn btn-light">{SINGLE}</a>
                </Link>
            </MainDiv>
		</Layout>
)