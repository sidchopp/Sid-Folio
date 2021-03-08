import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

//my components

import Navbar from "./components/Navbar"
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact> <Home /> </Route>
        <Route path="/about" exact> <About /></Route>
        <Route path="/contact" exact><Contact /> </Route>

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

