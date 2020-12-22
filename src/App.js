import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

class App extends Component {
  state = {
    showLogin: false,
  };

  handleShowLogin = () => {
    this.setState({ showLogin: true });
  };
  handleHideLogin = () => {
    this.setState({ showLogin: false });
  };

  render() {
    const { showLogin } = this.state;
    return (
      <div className="App">
        <Router>
          <Navbar openLogin={this.handleShowLogin} />
          <Route path="/" exact render={(routerProps) => <Home {...routerProps} />} />
          <Route path="/cart" exact component={Cart} />
          <Login showLogin={showLogin} closeLogin={this.handleHideLogin} />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
