import React, { Component } from 'react';
import './main-page.css';
import NavBar from './resources/navigation';
import Footer from './resources/footer';
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
