import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body{
      background: #2c2b2b;
      font-family: 'Raleway', sans-serif;
      overflow-x:hidden;
  }

  button{
      font-weight: bold;
      font-size: 1.1rem;
      cursor: pointer;
      padding: .5rem 1.5rem;
      margin: .5rem 0rem;
      border: 2px solid #23d997;
      background: transparent;
      color:white;
      transition: all 0.5s ease;
      font-family: 'Raleway', sans-serif;
      &:hover{
          background-color: #23d997;
          color:white;
      }
  }
      
h1{
    font-size: 2rem;
    font-weight: lighter;
    line-height: 3rem;
}
h2{
          font-weight: lighter;
          font-size: .95rem;
          line-height: 1.4rem;
      }
h3{
          color:white;
      }
h4{
          font-weight: bold;
          line-height:2rem;          
      }
a{
          font-size: 1.1rem;
      }
span{
        font-weight: bold;
        color:#23d997;
      }
p{
          padding: 2rem 0rem;
          color: #ccc;
          font-size:1.1rem;
          line-height: 150%;
      }

`;

export default GlobalStyle;