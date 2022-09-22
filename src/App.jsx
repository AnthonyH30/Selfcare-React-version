import React from "react";
import { createGlobalStyle } from "styled-components";
import HomePage from "./Pages/HomePage";


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
`

export default class App extends React.Component{

  render(){
    return(
      <div>
        <GlobalStyle/>
        <HomePage/>
      </div>
    )
  }
}