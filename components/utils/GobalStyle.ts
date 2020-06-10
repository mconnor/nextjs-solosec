import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --ipad12-width: 1366px;
        --ipad12-height: 1024px;

        --ipad-mini-width: 1024px;
        --ipad-mini-height: 768px;

        --ipad-width: var(--ipad12-width);
        --ipad-height: var(--ipad12-height);

        --header-height: 100px; 
       
        --main-height:calc(var(--ipad-height) - var(--header-height) - 54px);
        
       
        --isi-exit-y:var(--main-height);

        --grayout-bg: rgba(0,0 ,0 ,0.8);

        --isi-headline-color: #072b49;
       
       
      

        --main-footer-y: calc(var(--header-height) + var(--main-height));
        
        --royal-blue: #073b87;
        --royal-blue-light: #468dcc;


        --primary-blue:#003E6A;
        --button-selected-color:var(--primary-blue);
        --copy-blue: var(--primary-blue);
        --sub-headline-color:var(--primary-blue);



        --isi-subhead-fontsize: calc(var(--ipad-width)/var(ipad-max-width));

        --nav-blue:#034063;



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
        --isi-margin:3%;
     
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

    .z9 {
        z-index:9 !important;
    }
    .z1 {
        z-index:1 !important;
    }

    .modalFullscreen {
        height:var(--ipad-height) !important;
    }
    .modalWrapper {
       
        width:var(--ipad-width);
        height: calc(var(--main-height) + 54px);
        top: var(--header-height);
        position: absolute; 
       
        left:0;
        overflow:hidden;
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

.first {
    background:lightblue;
}

`;

export default GlobalStyle;
