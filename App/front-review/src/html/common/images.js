import React from 'react';
import html5 from './constDefinitions';
import codeImage from './assets/imageFormat.png';
import htmlImage from './assets/HTML5_Logo.png';
import DisplayDefinition from './general/displayDef';

function ImagesFormat(props) {
  return (
    <div className = "document">
    <h2>Images + formatting</h2>
    <hr />

    <h3>Introduction</h3>
    <hr />

    <h3>Result and Code Example</h3>
    <hr />

    <div className="example">

      <div className="result">
        <img src={htmlImage}  width="200px" height="200px" alt="html5" vspace="20px"/>
      </div>

      <div className="code">
        <img src={codeImage} alt="code"/>
      </div>

    </div>

    <hr/>

    <div className="displayDefinition">
      <table>
      <caption>Attributes</caption>
        <tbody>
        <DisplayDefinition data={html5.images}/>
        </tbody>
      </table>
    </div>

    </div>
  );
}

export default ImagesFormat;
