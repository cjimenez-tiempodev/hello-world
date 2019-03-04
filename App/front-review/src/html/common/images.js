import React from 'react';
import html5 from './constDefinitions';
import codeImage from './assets/imageFormat.png';
import htmlImage from './assets/html5.png';

function ImagesFormat(props) {
  return (
    <div className = "document">
    <h1>Images + formatting</h1>
    <hr />

    <div className="example">

      <div className="result">
        <img src={htmlImage}  width="200px" height="200px" alt="html5" vspace="20px"/>
      </div>

      <div className="code">
        <img src={codeImage} alt="code"/>
      </div>

    </div>

    <div>
      <p>
        <h3>Tag - img</h3>
        <h3>Attributes</h3>
        <span> src </span>{html5.src}<br />
        <span> alt </span>{html5.alt}<br />
        <span> height </span>{html5.height}<br />
        <span> width </span>{html5.width}<br />
        <span> align </span>{html5.align}<br />
        <span> border </span>{html5.border}<br />
        <span> vspace </span>{html5.vspace}<br />
        <span> hspace </span>{html5.hspace}<br />
      </p>
    </div>

    </div>
  );
}

export default ImagesFormat;
