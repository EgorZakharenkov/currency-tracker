import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body, html {
        height: 100%;
        font-family: 'Arial', sans-serif;
        line-height: 1.5;
        background: #030304;
        
    }

    input {
        border: none;
        outline: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul, ol {
        list-style: none;
    }

    button {
        border: none;
        background: none;
        cursor: pointer;
    }
`;

export default GlobalStyle;
