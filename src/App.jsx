import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Feature from "./components/Feature";
import Story from "./components/Story";
import Products from "./components/Products";
import NewArrivals from "./components/NewArrivals";
import NewLetters from "./components/NewLetters";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import { CustomState } from "./components/StateContext";
const App = () => {
  const {dark,setDark} = CustomState();

  return (
    <div className={dark? " bg-black text-white": " bg-white text-black"}>

      <Navbar />
      <Cart/>
      <Home />
      <Feature />
      <Story />
      <Products />
      <Testimonials />
      <NewArrivals />

      <NewLetters />
      <Footer />
    </div>
  );
};

export default App;
