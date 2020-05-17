import { ReactNode } from 'react';
import { PageWrapper } from "../state";
import Head from 'next/head';
import GlobalStyle from './utils/GobalStyle';
import styled from 'styled-components'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Reference from './References';

type Props = {
    children: ReactNode;
    title?: string;
}
const PageContainer = styled.div`
    background-color: white;
    width: var(--ipad-max-width);
    display: grid;
    grid-template-columns: 6% 1fr 6%;
    grid-template-rows: var(--header-height) var(--main-height) var(--footer-height);
    grid-template-areas:
        "header header header"
        "main main main"
        ". footer .";
    justify-items: stretch;
`;


const Layout: React.FC<Props> = ({ children, title = 'Solosec IVA' })=> (
		<>
            <Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
            <GlobalStyle/>
            <PageWrapper>
			    <PageContainer>
                    <Reference/>
                    <Header gridArea='header'/>
                    <Main gridArea='main' children={children} />
                    <Footer gridArea='footer'/>
                </PageContainer>
            </PageWrapper>
		</>
	);

export default Layout;