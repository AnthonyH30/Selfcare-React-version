import React from 'react';
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Products from "../components/Products/Products";
import Footer from "../components/Footer/Footer";
import Carrinho from '../components/Cart/Carrinho';
import { ShopCartContext } from '../Context/CartContext';

const HomePage = () => {

  return (
    <ShopCartContext>
        <Header />
        <Carrinho />
        <Banner />
        <Products />
        <Footer />
    </ShopCartContext>
  )
}

export default HomePage;