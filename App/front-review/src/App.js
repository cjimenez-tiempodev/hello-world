import React, { Component } from 'react';
import {DocumentStructure, TextFormat, Links} from './html/common/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DocumentStructure />
        <TextFormat />
        <Links />
      </div>
    );
  }
}

export default App;
