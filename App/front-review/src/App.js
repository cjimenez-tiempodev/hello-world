import React, { Component } from 'react';
import {DocumentStructure, TextFormat} from './html/common/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DocumentStructure />
        <TextFormat />
      </div>
    );
  }
}

export default App;
