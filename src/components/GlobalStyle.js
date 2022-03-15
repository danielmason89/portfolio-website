import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
${normalize}
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html{
      @media(max-width:1040px) {
          font-size: 62.5%; 
      }
  }

  body{
      background: #2c2b2b;
      font-family: 'Lobster', sans-serif;
      overflow-x:hidden;
      font-weight: normal;
  }

  button{
      font-weight: bold;
      font-size: 1.1rem;
      cursor: pointer;
      padding: .5rem 1.5rem;
      margin: 1.4rem 0rem;
      border: 2px solid #23d997;
      background: transparent;
      color:white;
      transition: all 0.5s ease;
      font-family: 'Raleway', sans-serif;
      &:hover{
          background-color: #23d997;
          color:black;
      }
      @media(max-width:768px) {
        &:hover{
          background-color: #23d997;
          color:black;
      }
                }
  }
      
h1{
    font-family: 'Raleway', sans-serif;
    font-size: 3.5rem;
    color: white;
    font-weight: lighter;
    @media(max-width:768px) {
        text-align: center;    
}
}

h2{
          font-weight: lighter;
          font-size: 2rem;
      }
h3{
          color:white;
      }
h4{
          font-weight: bold;
          font-size: 0.8rem;          
      }
a{
          font-size: 1.5rem;
          text-decoration: none;
          color: inherit;
          font-weight: bold;
      }
span{
        font-weight: bold;
        color:#23d997;
        font-size:1.5rem;
      }
p{
          padding: .25rem 0rem;
          color: white;
          font-size:1.5rem;
          
      }

`;

export default GlobalStyle;
