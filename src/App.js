import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import ScoreCardConnector from './ ScoreCardConnector'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ScoreCardConnector />
        </div>
      </Provider>
    );
  }
}

export default App;
