import React, { createContext, useEffect, useState } from "react";
import Map from "./component/Map";
import ShowProduct from "./pages/ShowProduct";
import Error from "./pages/Error";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Cart from "./pages/Cart";

export const Cartcontext = createContext();

const App = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [inc, setInc] = useState(0);
  const [dec, setDec] = useState(0);
  let t = 0;

  useEffect(() => {
    cart.forEach((item) => {
      t += item.total;
    });
    setTotal(t);
  });

  function addToCart(val) {
    const bool = cart.some((item) => item.id === val.id);
    if (bool) {
      const i = cart.findIndex((item) => item.id === val.id);
      cart[i].quantity = cart[i].quantity + 1;
      cart[i].total = cart[i].total + val.price;

      cart.forEach((item) => {
        t += item.total;
      });

      setTotal(t);
    } else {
      const obj = {
        ...val,
        quantity: 1,
        total: val.price,
      };

      setCart([...cart, obj]);
    }
  }
  function removeFromCart(val) {
    const filteredData = cart.filter((item) => item.id !== val.id);
    setCart(filteredData);
  }

  function incQuantity(val) {
    const i = cart.findIndex((item) => item.id === val.id);
    cart[i].quantity = cart[i].quantity + 1;
    cart[i].total = cart[i].total + val.price;
    setInc(inc + 1);
  }
  function decQuantity(val) {
    const i = cart.findIndex((item) => item.id === val.id);
    cart[i].quantity = cart[i].quantity - 1;
    cart[i].total = cart[i].total - val.price;
    setDec(dec + 1);
  }

  return (
    <div>
      <Cartcontext.Provider
        value={{
          cart,
          total,
          addToCart,
          removeFromCart,
          incQuantity,
          decQuantity,
        }}
      >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Map />} />
          <Route exact path="/product/:title" element={<ShowProduct />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/cart" element={<Cart />} />

          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </Cartcontext.Provider>
    </div>
  );
};

export default App;
