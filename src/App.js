import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

//my components
import Pic from "./components/Pic"
import Navbar from "./components/Navbar"
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Pic /> */}
      <Switch>
        <Route path="/" exact> <Home /> </Route>
        <Route path="/about" exact> <About /> </Route>
        <Route path="/contact" exact> <Contact/> </Route>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
