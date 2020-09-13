import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Equipment from "./components/Pages/Equipment";
import Chemicals from "./components/Pages/Chemicals";
import Products from "./components/Pages/Products";
import Tools from "./components/Pages/Tools";
import Services from "./components/Pages/Services";
import ContactUs from "./components/Pages/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/contact-us" component={ContactUs} />

          <Route path="/products" component={Products} />
          <Route path="/equipment" component={Equipment} />
          <Route path="/chemicals" component={Chemicals} />
          {/* <Route path="/tools" component={ContactUs} />
          <Route path="/" component={Tools} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
