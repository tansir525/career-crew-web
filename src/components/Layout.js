import React from "react";
import Footer from "./Footer";
import LoginCorner from "./LoginCorner";
import Nav from "./Nav";
import "../styles/styles.css";
import ContextProvider from '../context/CartContext'

const Layout = (props) => {
  return (
    <div>
    <ContextProvider>
      <Nav />
    </ContextProvider>
      {props.children}
      <LoginCorner/>
      <Footer />
    </div>
  );
};

export default Layout;
