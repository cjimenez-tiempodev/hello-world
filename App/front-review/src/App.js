import React, { Component } from 'react';
import {DocumentStructure, TextFormat, Links, ImagesFormat, NewHTML5} from './html/common/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DocumentStructure />
        <TextFormat />
        <Links />
        <ImagesFormat />
        <NewHTML5 />
      </div>
    );
  }
}

export default App;
