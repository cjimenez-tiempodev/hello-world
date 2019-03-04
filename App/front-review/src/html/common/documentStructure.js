import React from 'react';
import html5 from './constDefinitions';
import codeImage from './assets/docStructure.png';

function DocumentStructure(props) {
  return (
    /*
    <div> ... </div>
    A generic container used to denote a page section
    */
    <div className = "document">
    <h1>Document Structure</h1>
    <hr />

    <div className="example">

      <div className="result">
        <h3> Lorem ipsum </h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
        Pellentesque volutpat congue velit. <br />
        Ut maximus diam at nunc auctor, id rutrum nisl tincidunt. <br />
        <hr />
        Cras sed erat sed risus fringilla sagittis. <br />
        Maecenas <span>quis arcu turpis.</span> <br />
        In pellentesque eget augue nec lacinia. <br />
        Phasellus vel justo volutpat, sollicitudin purus et, volutpat felis. <br />
        </p>
      </div>

      <div className="code">
        <img src={codeImage} />
      </div>

    </div>

    <div>
      <p>
        <span>h1...h6: </span>{html5.h1h6}<br />
        <span>span: </span>{html5.span}<br />
        <span>p: </span>{html5.p}<br />
        <span>br: </span>{html5.br}<br />
        <span>hr: </span>{html5.hr}<br />
      </p>
    </div>

    </div>
  );
}

export default DocumentStructure;
