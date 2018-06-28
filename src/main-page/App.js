import React, { Component } from 'react';
import './main-page.css';
import NavBar from './shared-components/NavBar';
import Footer from './shared-components/Footer';
import Content from './Content';
class App extends Component {
  render() {
    return (
    <div>
      <NavBar/>
      <Content />
      <Footer author="Asiimwe Benard"/>
    </div>

    );
  }
}

export default App;
