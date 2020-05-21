import { ReactNode } from 'react';
import { useRouter } from 'next/router'

import { PageWrapper } from "../state";
import Head from 'next/head';
import GlobalStyle from './utils/GobalStyle';
import styled from 'styled-components'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ReferencesWrapper from './modals/References';
import Nav from './modals/Nav';


type Props = {
    children: ReactNode;
    title?: string;
    foreGroundArt?:string;
}
const PageContainer = styled.div`
    position: static;
    overflow: hidden;
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


const Layout: React.FC<Props> = ({ children, title = 'Solosec IVA', foreGroundArt })=>{ 
    const router = useRouter();
    console.log(router.pathname )
    return (
		<>
            <Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
            <GlobalStyle/>
            
            <PageWrapper>
                <Nav />
                <ReferencesWrapper/>
                
			    <PageContainer>
                    <Header gridArea='header'/>
                   
                    <Main 
                        gridArea='main' 
                        children={children} 
                        foreGroundArt={foreGroundArt} 
                        key={router.route}/>
                   
                    <Footer gridArea='footer'/>
                </PageContainer>
            </PageWrapper>
		</>
	)};

export default Layout;