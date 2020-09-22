import React from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { About } from "./pages/About/About";
import { Shop } from "./pages/Shop/Shop";
import { Home } from "./pages/Home/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <main className="main">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/shop" exact>
            <Shop />
          </Route>
          <Route path="/contact_us" exact>
            <ContactUs />
          </Route>
        </Switch>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
