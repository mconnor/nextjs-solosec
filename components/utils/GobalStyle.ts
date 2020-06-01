import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --ipad12-width: 1366px;
        --ipad12-height: 1024px;

        --ipad-mini-width: 1024px;
        --ipad-mini-height: 768px;

        --ipad-width: var(--ipad12-width);
        --ipad-height: calc(var(--ipad12-height) - 50px);

        --header-height: 100px; 
        --footer-height: 55px;
        --main-height:calc(var(--ipad-height) - var(--header-height));
       
        --isi-exit-y:var(--main-height);

        --grayout-bg: rgba(0,0 ,0 ,0.8);


       
       
      

        --main-footer-y: calc(var(--header-height) + var(--main-height));
        
        --royal-blue: #073b87;
        --royal-blue-light: #468dcc;


        --primary-blue:#003E6A;
        --button-selected-color:var(--primary-blue);
        --copy-blue: var(--primary-blue);
        --sub-headline-color:var(--primary-blue);





        --nav-blue:#034063

--triangle-blue;

        --fourty-two-blue: 0x003e6a;
        --slogan-blue: #002851
        --bg: #fff;
        --primary: white;
        --primary-btn-hover-color: gray;
        --yellow: rgb(128, 124, 116);
;


        --isi-blue: rgb(213,233,247);     
        --isi-headline-bg: rbg(273,326,230);
        --gray: #62645b;
        --green: rgb(41,147,51);
        /* 05aa4e */
        --isi-margin: 80px;
     
        --button-border-radius:6px;
        --copy-color-secondary: var(--gray);
        --border-radius-4: 4px;

        --safety-info-margin: 80px;

        --pi-modal-blue:#094975;
    }


    /* * {
        box-sizing: border-box;
    } */
    
    html {
        
        font-size: 16px;
        box-sizing: border-box;
    }

/* web reset suggestions https://www.webfx.com/blog/web-design/css-tip-1-resetting-your-styles-with-css-reset/ */


* {
	vertical-align: baseline;
	font-weight: inherit;
	font-family: inherit;
	font-style: inherit;
	font-size: 100%;
	border: 0 none;
	outline: 0;
	padding: 0;
	margin: 0;
	}
    *, *:before, *:after {
        box-sizing: inherit;
    }

    p, li { margin:5px 0 10px 0; }
    h2 { margin:10px 0 20px 0; }

    p {
        &.bold {
        font-weight:bold;
}
    }
   
    sup{
        font-size: 1rem;
        vertical-align: super;
    }
a {
    text-decoration: none;
}

    body {
        font-family: 'Lato', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
       position:fixed;
    }

/* end css resets */


    .modalWrapper {
        width:var(--ipad-width);
        height:var(--ipad-height);
        position: absolute;
        z-index: 3;
        left:0;
        overflow:hidden;
        background:white;   
    }

.isi-link {
    a {
      color: var(--royal-blue-light);
      text-decoration: none;
    }
    color: var(--royal-blue-light);
}


.primary-color {
   color: var(--sub-headline-color);
      
}


.button-green {
    background: var(--green);
    border-radius: var(--button-border-radius);
    width: 212px;
    height: 44px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: white;
    border:0; 
    cursor: pointer;  
    white-space: nowrap;
    

}

.sub-headline {


    
    /* font-style: normal;
font-weight: bold;
font-size: 18px; */


    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 16px;
    /* identical to box height, or 80% */
    letter-spacing: 0.04em;
}

.modal-screen-p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
/* or 122% */
    letter-spacing: 0.06em;
    color: #62645b;
}

.primary-copy-color {
    color:var(--copy-color-secondary)
}



.fillMain {
    background-size:var(--ipad-width);
    background-repeat:no-repeat; 
}

.page-container {
    background-color: white;
    width: var(--ipad-width);
    display: grid;
    grid-template-columns: 6% 1fr 6%;
    grid-template-rows: var(--header-height) var(--main-height) var(--footer-height);
    grid-template-areas:
        "header header header"
        "main main main"
        ". footer .";
    justify-items: stretch;
}
.head-row {
    grid-area: header;
    background-color: $head-bg;
    padding-left: $main-margin;
    padding-right: $main-margin;
    background-image: url('../img/header-sansNav.png');
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-template-rows: $header-height;

    &.nav {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        display: grid;
        align-items: center;
        grid-template-columns: 64px repeat(3, 142px) 1fr;
        color: $primary;

        &.btn {
            display: grid;
            align-items: center;
            height: 66px;
            place-items: center center;
            border-right: 2px solid white;
            text-align: center;
        }

        &.btn:nth-last-child(1) {
            border: 0;
        }

        &.hamburgerClass {
            border: 0;
        }


    }
}
.main-row {
    grid-area: main;
    text-align: center;

    h1 {
        display: inline-block;
        font-size: 36px;
    }

    span {
        color: $yellow;
        font-size: 36px;
        margin-left: 10px;
    }

    .nav {
        font-family: Lato;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
    }
}
.footer-row {
    grid-area: footer;
    color: black;
    font-size: .6rem;
    background: rgb(213,233,247);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 8px 10px;
    overflow: hidden;

    h1 {
        background: var(--isi-headline-bg);
        color: gray;

    }

    /* &.inner-container {
        background: white;
        border-radius: 4px;
        padding: 8px;
    }

    &.down-arrow {
        transform: rotate(90deg);
    } */
}

`;

export default GlobalStyle;
