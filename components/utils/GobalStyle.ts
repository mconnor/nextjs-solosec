import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --ipad-max-width: 100vw;
        --ipad-max-height: 1024px;

        --ipad-min-width: 1194px;
        --ipad-min-height: 834px;

        --ipad-width: var(--ipad-max-width);
        --ipad-height: calc(var(--ipad-max-height) - 50px);

        --header-height:8vw; 
        --footer-height: 4.4vw;
        --main-height:calc(var(--ipad-height) - var(--header-height));
       
        --isi-exit-y:var(--main-height);

        --grayout-bg: rgba(0,0 ,0 ,0.8);


       
       
      

        --main-footer-y: calc(var(--header-height) + var(--main-height));
        
        --royal-blue: #073b87;
        --royal-blue-light: #468dcc;
        --button-selected-color:#003e6a;

        --fourty-two-blue: 0x003e6a;
        --slogan-blue: #002851
        --bg: #fff;
        --primary: white;
        --primary-btn-hover-color: gray;
        --yellow: rgb(128, 124, 116);
        --copy-blue: #003E6A;
        --nav-blue:#034063;


        --isi-blue: rgb(213,233,247);     
        --isi-headline-bg: rbg(273,326,230);
        --gray: #6d6e71;
        --green: rgb(41,147,51);

        --isi-margin: 80px;
     
        
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
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
       margin:0;
       padding:0;
       position:fixed;
    }

    .modalWrapper {
        width:var(--ipad-width);
        height:var(--ipad-height);
        position: absolute;
        z-index: 3;
        left:0;
        overflow:hidden;
        background:white;   
    }

 .btn {
    cursor: pointer;
    &:hover {
        color: gray;
    }
 }
 .item1 {
      grid-area: sidebar-1;
    }

    .item2 {
      grid-area: content;
    }

    .item3 {
      grid-area: sidebar-2;
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

    &.inner-container {
        background: white;
        border-radius: 4px;
        padding: 8px;
    }

    &.down-arrow {
        transform: rotate(90deg);
    }
}
[role='button'] {
    cursor: pointer;

    &:hover {
        color: gray;
    }
}

`;

export default GlobalStyle;
