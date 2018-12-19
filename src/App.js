import React, { Component } from 'react';
import GolfClubHouseConnector from './clubhouse/GolfClubHouseConnector'
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <GolfClubHouseConnector />
        </div>
    )
  }
}

export default App;
