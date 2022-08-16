import React, { Component } from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <>
        <Navbar links={["Features", "Enterprice", "Support", "Pricing"]} />
        <Header />
        <Footer />
      </>
    );
  }
}

export default App;
