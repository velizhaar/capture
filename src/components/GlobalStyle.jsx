import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: #1b1b1b;
    font-family: 'inter', sans-serif;
}
button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #d92387;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'inter', sans-serif;
    &:hover{
        background: #d92387;
        color: white
    }    
}
h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
        color: #d92387;
    }
    a{
        font-size: 1.1rem;

    }
    span{
        font-weight: bold;
        color: #d92387;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
`;

export default GlobalStyle;
