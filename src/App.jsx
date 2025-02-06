import React, { useState, useEffect } from "react";
import "./App.css";
import { Navbar, AppMidText, AppBox, DescApp, Promote, Footer } from './components'

const App = () => {

  return (
    <div>
      <AppMidText />
      <AppBox />
      <DescApp />
      <Promote />
    </div>
  );
};

export default App;
