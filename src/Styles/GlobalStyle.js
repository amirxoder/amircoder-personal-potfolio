import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        list-style:none;
        font-family: 'Lato', sans-serif
    }
    body,html{
        scroll-behavior:smooth;
    }

    .nav,.navList{
        background-color:${({ theme }) => theme.background};
        
    }
    .content{
        background-color:${({ theme }) => theme.backgrounder}
    }
  
    h1,h2,h4,h5,p,a,.toggle__btn,.menuIcon,span{
            transition:all .6s;
            color:${({ theme }) => theme.text};
            text-decoration:none;
        }

    
`

export const dark = {
    background: '#202025',
    backgrounder: '#121214',
    text: '#F9F9F9'

}

export const light = {
    backgrounder: '#F9F9F9',
    background: '#f5f4ff',
    text: '#202024'
}