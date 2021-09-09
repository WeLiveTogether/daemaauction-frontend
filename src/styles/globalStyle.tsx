import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
// npm i styled-reset
// npm i --save-dev @types/styled-components

const GlobalStyle = createGlobalStyle`
    ${reset};
    html{
        scroll-behavior: smooth;
    }
    body{
        background-color:black;
        padding-top:130px;
        font-family:Arial, Helvetica, sans-serif;
    }
    *{
        -ms-user-select: none; -moz-user-select: -moz-none; -webkit-user-select: none; -khtml-user-select: none; user-select:none;  
        color:white;
    }
    a{
        text-decoration:none;
    }
    button{
        outline:none;
        cursor:pointer;
    }
    input{
        outline:none;
    }
    ul{
        list-style:none;
    }
    input:-webkit-autofill { 
        box-shadow: 0 0 0 30px transparent inset ; 
    } 
`;

export default GlobalStyle;
