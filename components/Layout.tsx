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
import SpaLink from '../components/SpaLink';
import StartScreen  from '../components/modals/Isi/StartScreen'
import {useSwipeable} from "react-swipeable";
import {swipeLink} from "./modals/Nav/PageList";

const onSwiping = ({ dir }, pageIndex: number) => {
    if (dir === "Left") swipeLink(pageIndex, "Left");
    if (dir === "Right") swipeLink(pageIndex, "Right");
}

type Props = {
    children?: ReactNode;
    title?: string;
    foreGroundArt?:string;
    bgArt?: string;
    noBgArt?:boolean;
    qaBool?:boolean;
    section?:string;
    pageIndex:number;
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

const FixedDiv = styled.div`
    position: absolute;
    top: 5px;
    left: 600px;
`;


const Layout: React.FC<Props> = ({ children, pageIndex, title = 'Solosec IVA', foreGroundArt , noBgArt=false, bgArt, section=''})=>{
    const router = useRouter();
    const handlers = useSwipeable({
        onSwiping: (eventData) => onSwiping(eventData, pageIndex),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
        trackTouch: true
    });
    // console.log(router.pathname )

    // Code that turns off native swipes in OCE Sales
    //CLMPlayer.defineNoSwipeRegion("region",0,0,1366,768);
 
    return (
		<>
            <Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,300&display=swap" rel="stylesheet"></link>
			</Head>
            <GlobalStyle/>
            
            <PageWrapper>
                <StartScreen section={section}/>
                
                <Nav />
                <ReferencesWrapper section={section}/>
                <FixedDiv><SpaLink pageName='index' /></FixedDiv>
                
			    <PageContainer {...handlers}>
                    <Header gridArea='header'/>

                    <Main
                        gridArea='main'
                        children={children}
                        foreGroundArt={foreGroundArt}
                        key={router.route}
                        noBgArt={noBgArt}
                        bgArt={bgArt}
                        pageIndex={pageIndex}
                    />

                    <Footer gridArea='footer'/>
                </PageContainer>
            </PageWrapper>
		</>
	)};

export default Layout;