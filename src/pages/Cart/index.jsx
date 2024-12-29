import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import CartComp from "../../components/CartComp";
import Footer from "../../components/Footer";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <CartComp />
      <Footer />
    </div>
  );
};

export default Cart;
