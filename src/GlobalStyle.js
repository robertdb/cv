import { createGlobalStyle } from "styled-components";
import media from "./media";

export default createGlobalStyle`

    html {
        font-size: 62.5%;
        ${media.sm`
            font-size: 57.5%;
        `}
    }
    body {
        font-family: 'Trebuchet MS', sans-serif;
        box-sizing: border-box;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.4;
        background-color: #fff;
      }
    button,
    a:link,
    a:visited {
        outline: none;
        -webkit-tap-highlight-color: transparent;
    }
    #root {
        overflow: hidden;
    }
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: 300;
        text-align: left;
        margin-bottom: 2rem;
        text-aling: center;
        color: #727272
    }
    p {
        margin-bottom: 1.6rem;
    }
   
`;