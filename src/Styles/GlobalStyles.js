import { createGlobalStyle } from "styled-components";




const GlobalStyled = createGlobalStyle`
    :root{
        --primary-color: #007bff;
        --secondary-color: #6c757d;
        --background-dark-color: #10121a;
        --border-color: #2e344e;
        --background-light-color: #f1f1f1;
        --white-color: #ffffff;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191d2b;
    }

    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        list-style:none;
        text-decoration: none;
        font-family: 'Nunito', sans-serif;
        font-size:1.2rem;
    }

    body{
        background-color:var(--background-dark-color) ;
        color: var(--font-light-color)
    }
    a{
        color:inherit;
        font-size:inherit
    }
    

`;
export default GlobalStyled;