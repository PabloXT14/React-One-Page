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

    }

    body {
        font-family: 'Merriweather';
        /* background: var(--purple-light); */
        height: 100vh;
    }

`
