import React, {Component} from 'react';
import html5 from '../constDefinitions';
import codeImage from '../assets/geolocationCode.png';
import dragImage from './assets/dragImage.png';
import DisplayDefinition from '../general/displayDef';
import './style/style.css';

class DnD extends Component {

  allowDrop = (ev)=>{
    ev.preventDefault();
  }

  drag = (ev)=> {
    ev.dataTransfer.setData("image", ev.target.id);
  }

  drop = (ev)=> {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("image");
    ev.target.appendChild(document.getElementById(data));
  }

  render(){
    return (
      <div className = "document">
      <h1>HTML5 - Drag and Drop</h1>
      <hr />

      <div className="example">

        <div className="result center">
          <section>
          <span>Drop de image inside box</span>
          <div id="div1" onDrop={this.drop} onDragOver={this.allowDrop} className="dropContainer"></div>

          <img id="drag1" alt="dragImage" src={dragImage} draggable="true" onDragStart={this.drag} width="400" height="75" />
          </section>
        </div>

        <div className="code">
          <img src={codeImage} alt="code"/>
        </div>

      </div>

      <div>
        <table>
          <tbody>
          <DisplayDefinition data={html5.api.dragndrop} />
          </tbody>
        </table>
      </div>

      </div>
    );
  }

}

export default DnD;
