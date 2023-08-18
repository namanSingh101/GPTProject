import React from "react";
import { Navbar, Brand, Cta } from "./Components";
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./Container";
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
};

export default App;
