import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import { theme } from "./vars.js";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: "Open Sans", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #FCFCFC;
        color: ${theme.color.text};
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
        aspect-ratio: 4 / 3;
    }

    .container {
        width: ${theme.breakpoint.sm};
        height: 100%;
        padding: 0 10px;
        margin: 0 auto;
        @media (min-width: ${theme.breakpoint.md}) {
            width: ${theme.breakpoint.md};
            padding: 0 44px;
        }
        @media (min-width: ${theme.breakpoint.xl}) {
            width: ${theme.breakpoint.xl};
            padding: 0 56px;
        }
    }
    
    .activeFilter{
        border: ${theme.border.oranage};
    }
    
    .tab-list{
        border: none;
        border-bottom: ${theme.border.grey2};
        display: flex;
        gap: 40px;
    }

    .tab-item{
        font-weight: 600;
        font-size: 20px;
        border-bottom: red;
        padding-bottom: 24px;
        
        &:focus{
            border-bottom: 5px solid ${theme.color.button};
        }
    }
    
    .active-tab{
        border-bottom: 5px solid ${theme.color.button};
    }

    .tab-panel{
        border: none;
        border-bottom: red;
    }

    .MuiAutocomplete-inputRoot{
        background-color: ${theme.color.inputs};
    }

    .css-i4bv87-MuiSvgIcon-root{
        display: none;
    }

    .form{
        background-color: aqua;
    }

    a {
        text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }

    ul,
    ol {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

`;
