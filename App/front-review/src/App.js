import React, { Component } from 'react';
import {DocumentStructure, TextFormat, Links, ImagesFormat, HTML5Semantic, InputTypes, Graphics, Multimedia, HTML5Geolocation, DnD} from './html/common/index';
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
        <Multimedia />
        <HTML5Geolocation />
        <DnD />
      </div>
    );
  }
}

export default App;
