import React, { Component } from 'react';
import {DocumentStructure, TextFormat, Links, ImagesFormat, HTML5Semantic, InputTypes, Graphics} from './html/common/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DocumentStructure />
        <TextFormat />
        <Links />
        <ImagesFormat />
        <HTML5Semantic />
        <InputTypes />
        <Graphics />
      </div>
    );
  }
}

export default App;
