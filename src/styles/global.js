import {createGlobalStyle} from "styled-components";

import fundo from '../asserts/background-wall.png'

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  html,body,#root{
    height:100%;
    background-image: url(${fundo});
    background-size: 100vw 100vh;
    background-repeat: no-repeat;
  }

  body,input,button{
    color:#222;
    font-size:14px;
    font-family:Arial,Helvetica,sans-serif;
  }

  button{
    cursor:pointer;
  }

`