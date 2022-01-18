import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --purple: #6C63FF;
        --purple-light: #D7D4FF;

        --white-200: #F9F9F9;
        --gray: #555555;
        --gray-dark: #2A2A2A;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        /* font-size: 62.5%;1rem = 10px */
        @media (max-width: 1080px) {
            font-size: 93.75%;//15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%;//14px
        }
        @media (max-width: 360px) {
            font-size: 81.25%;//13px
        }
    }

    body {
        font-family: 'Merriweather';
        /* background: var(--purple-light); */
        height: 100vh;
    }

`
