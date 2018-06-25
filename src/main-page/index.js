import React, { Component } from 'react';
import logo from './logo.svg';
import './main-page.css';
import NavBar from './navigation';
import Footer from './footer';
import IndexContent from './content';
class App extends Component {
  render() {
    return (
    <div>
      <NavBar/>
      <IndexContent />
      <Footer author="Asiimwe Benard"/>
    </div>

    );
  }
}

export default App;
