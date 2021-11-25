import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
        --white:#FFF;
        --black:#000;
        --red:#c53030;
        --blue:#403CAA;
        --green:#11995E;
        --grey-100:#333;
        --grey-50:#999;
        --grey-0:#F5F5F5;
    }
    body {
        background-color: var(--white);
        color: var(--black)
    }
`