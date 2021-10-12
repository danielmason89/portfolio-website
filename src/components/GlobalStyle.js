import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html{
      @media(max-width:1100px) {
          font-size: 62.5%; 
      }
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
      margin: 1.4rem 0rem;
      border: 2px solid #23d997;
      background: transparent;
      color:white;
      transition: all 0.5s ease;
      font-family: 'Raleway', sans-serif;
      &:hover{
          background-color: #23d997;
          color:white;
      }
      @media(max-width:768px) {
        &:hover{
          background-color: #23d997;
          color:white;
      }
                }
  }
      
h1{
    font-size: 2rem;
    font-weight: lighter;
    line-height: 7rem;
    @media(max-width:768px) {
        text-align: center;    
}
}

h2{
          font-weight: lighter;
          font-size: .95rem;
          line-height: 1.5rem;
      }
h3{
          color:white;
      }
h4{
          font-weight: bold;
          line-height:2rem;
          font-size: 1rem;          
      }
a{
          font-size: 1.1rem;
          text-decoration: none;
          color: inherit;
      }
span{
        font-weight: bold;
        color:#23d997;
      }
p{
          padding: 2rem 0rem;
          color: #ccc;
          font-size:1.1rem;
          line-height: 1%;
      }

`;

export default GlobalStyle;