// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import React, { Component } from "react";
// import Contacts from "./components/Contacts";
import Header01 from "./components/Header01";
import Login from "./components/Login";
import Footer from "./components/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
import "materialize-css/dist/css/materialize.min.css";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header01 />
        <Login />
        <Footer />
        <div className="container" />
      </div>
    );
  }
}

export default App;
