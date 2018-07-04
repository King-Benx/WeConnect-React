import React, { Component } from 'react';
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './main-page.css';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';
import Content from './Content';
class App extends Component {
  render() {
    return (
    <div>
      <NavBar/>
      <Content />
      <Footer author="Asiimwe Benard"/>
      <NotificationContainer/>
    </div>

    );
  }
}

export default App;
