import {ReactNode, useState, useEffect} from 'react';
//import { useRouter } from 'next/router'
import { PageWrapper } from "../state";
import Head from 'next/head';
import GlobalStyle from './utils/GobalStyle';
import styled from 'styled-components'
import Header from './Header';
import Main from './Main';
//import Footer from './Footer';
import ReferencesWrapper from './modals/References';
import PrescribingInfoWrapper from "./modals/PI";
import Nav from './modals/Nav';
import StartScreen  from './modals/StartScreen'
import {useSwipeable} from "react-swipeable";
import {PageList} from "./modals/Nav/PageList";
import {useAppState} from "../state";
//import { useCookie } from '../hooks';
import SafetyModalWrapper from './modals/SafetyInfo/';
import {Navigate} from "./utils/Navigate";
//import * as Constants from './utils/Constants'

type RLprops = {
    dir: "Right" | "Left" | "Up" | "Down";
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
    position: absolute;
    overflow: hidden;
    background-color: white;
    width: var(--ipad-width);
    max-width: var(--ipad-width);
    height: var(--main-height);
    max-height: var(--main-height);
    top: var(--header-height);
`;



const Layout: React.FC<Props> = ({ children, pageIndex, title = 'Solosec IVA', foreGroundArt , noBgArt=false, bgArt, section=''})=>{
    //const router = useRouter();
    //const [cookie, setCookie] = useCookie({ key: "seq" }) ;
    // const [cookieInitScreen, setCookieInitScreen] = useCookie({ key: Constants.COOKIE_VAL_STARTSREEN.key }) ;
    const [inner, setInner] = useState(<div></div>);
    const cookie = typeof window !== 'undefined' ? window.localStorage.seq : ""
    if (typeof window !== 'undefined') console.log("localStorage", window.localStorage.seq)

    const {currSeq, setInitSafteyInfo} = useAppState();
    setInitSafteyInfo && setInitSafteyInfo(true);
    const handlers = useSwipeable({
        onSwiping: (eventData) => onSwiping(eventData, pageIndex),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
        trackTouch: true,
        delta: 150
    });
    // setCookie2(section);
    // console.log(router.pathname )

    // Code that turns off native swipes in OCE Sales
    // @ts-ignore
    //if (CLMPlayer) CLMPlayer.defineNoSwipeRegion("region",0,0,1366,768);

    // useEffect(() => {
    //     document.addEventListener("keydown", checkKey, false);
    //
    //     return () => {
    //         document.removeEventListener("keydown", checkKey, false);
    //     };
    // }, []);

    // @ts-ignore
    // function checkKey(e:KeyboardEvent) {
    //     // e = e || window.event;
    //     //
    //     // if (e.keyCode === 37) {
    //     //     console.log("left");
    //     //     swipeLink(pageIndex, "Right")
    //     // }
    //     // else if (e.keyCode === 39) {
    //     //     console.log("right")
    //     //     swipeLink(pageIndex, "Left");
    //     // }
    //
    // }

    console.log("**Current", currSeq, cookie);
    const onSwiping = ({dir}: RLprops, pi: number) => {
        if (dir === "Left") swipeLink(pi, "Left");
        if (dir === "Right") swipeLink(pi, "Right");
    }

    function swipeLink(n: number, dir: string) {
        console.log("Cookies", currSeq, n, dir);
        const path = PageList.seq.main;
        if (!cookie || cookie === "") {
            navigate();
        } else {
            if (PageList.seq[cookie].indexOf(path[n]) < 1) {
                //setCookie("");
                if (typeof window !== 'undefined') window.localStorage.seq = "";
                navigate();
            } else {
                const page = path[n];
                const thisPath = PageList.seq[cookie];
                const currentPage = thisPath.indexOf(page);
                // if (dir === "Right") if (currentPage !== 0) router.push("/" + PageList["pages"][thisPath[currentPage-1]]);
                // if (dir === "Left") if (currentPage !== thisPath.length-1) router.push("/" + PageList["pages"][thisPath[currentPage+1]]);
                //if (dir === "Right") if (currentPage !== 0) window.location.href = PageList["pages"][thisPath[currentPage - 1]] + ".html";
                //if (dir === "Left") if (currentPage !== thisPath.length - 1) window.location.href = PageList["pages"][thisPath[currentPage + 1]] + ".html";
                if (dir === "Right") if (currentPage !== 0) Navigate(PageList["pages"][thisPath[currentPage - 1]]);
                if (dir === "Left") if (currentPage !== thisPath.length - 1) Navigate(PageList["pages"][thisPath[currentPage + 1]]);
            }
        }

        function navigate() {
            // if (dir === "Right") if (n !== 0) router.push("/" + PageList["pages"][path[n-1]]);
            // if (dir === "Left") if (n !== path.length-1) router.push("/" + PageList["pages"][path[n+1]]);
            //if (dir === "Right") if (n !== 0) window.location.href = PageList["pages"][path[n - 1]] + ".html";
            //if (dir === "Left") if (n !== path.length - 1) window.location.href = PageList["pages"][path[n + 1]] + ".html"
            if (dir === "Right") if (n !== 0) Navigate(PageList["pages"][path[n - 1]]);
            if (dir === "Left") if (n !== path.length - 1) Navigate(PageList["pages"][pageIndex === 16 ? path[20] : path[n + 1]])
        }
    }

    //const  {ipadWidthPx, ipadHeightPx, ipadMainSectionHeightPx, ipadWidth, ipadHeight, ipadMainSectionHeight } =useDeviceDimensions()

    useEffect(() => {
        setTimeout(() => {
            setInner(
                <PageWrapper>
                    <StartScreen section={section}/>

                    <Nav/>
                    <ReferencesWrapper section={section}/>
                    <PrescribingInfoWrapper/>
                    <Header/>

                    {/* <ShowScreenSize>{ipadWidthPx}  {ipadHeightPx}</ShowScreenSize> */}
                    <PageContainer {...handlers}>


                        <Main
                            gridArea='main'
                            children={children}
                            foreGroundArt={foreGroundArt}
                            key={"#1234"}
                            noBgArt={noBgArt}
                            bgArt={bgArt}
                            pageIndex={pageIndex}
                        />


                    </PageContainer>
                    <SafetyModalWrapper/>
                </PageWrapper>
            ); // count is 0 here
        }, 25);
    }, []);


    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <GlobalStyle/>
            {inner}

		</>
	)};

export default Layout;