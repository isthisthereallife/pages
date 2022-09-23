import React from "react";
import PropTypes from "prop-types";
import CreepProvider from "../components/context/CreepProvider";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/global.css";

Hemsida.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

function Hemsida({ Component, pageProps }) {
  return (
    <>
      <CreepProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </CreepProvider>
    </>
  );
}

export default Hemsida;
