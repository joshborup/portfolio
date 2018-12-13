import React, { Component } from 'react';
import routes from './routes'
import logo from './logo.svg';
import HomeContainer from './components/Home/HomeContainer'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
      {routes}
      </div>
    );
  }
}

export default App;
