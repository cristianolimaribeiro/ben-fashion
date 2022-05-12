import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
        :root{
        --background: #FCFCFC;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Tenor Sans', sans-serif;
        overflow-x: hidden;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }
        @media (max-width: 720px){
            font-size: 87.5%; //14px
        }
    }
    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
`

