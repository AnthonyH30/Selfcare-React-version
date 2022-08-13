import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import Products from "./components/Products.jsx";
import Footer from "./components/Footer.jsx";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }

  body{
    width: 100vw;
  }
`

export default class App extends React.Component{

  render(){
    return(
      <div>
        <GlobalStyle/>
        <Header/>
        <Banner/>
        <Products/>
        <Footer/>
      </div>
    )
  }
}