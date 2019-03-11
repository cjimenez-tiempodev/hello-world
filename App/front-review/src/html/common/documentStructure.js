import React from 'react';
import html5 from './constDefinitions';
import codeImage from './assets/docStructure.png';
import DisplayDefinition from './general/displayDef';

function DocumentStructure(props) {
  return (
    /*
    <div> ... </div>
    A generic container used to denote a page section
    */
    <div className = "document" id="structure">
    <h1>Document Structure</h1>
    <hr />

    <div className="example">

      <div className="result">
        <h3> Lorem ipsum </h3>
        <section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
        Pellentesque volutpat congue velit. <br />
        Ut maximus diam at nunc auctor, id rutrum nisl tincidunt. <br />
        <hr />
        Cras sed erat sed risus fringilla sagittis. <br />
        Maecenas <span>quis arcu turpis.</span> <br />
        In pellentesque eget augue nec lacinia. <br />
        Phasellus vel justo volutpat, sollicitudin purus et, volutpat felis. <br />
        </section>
      </div>

      <div className="code">
        <img src={codeImage} alt="alt"/>
      </div>

    </div>

    <div>
      <table>
      <tbody>
        <DisplayDefinition data={html5.structure}/>
      </tbody>
      </table>
    </div>

    </div>
  );
}

export default DocumentStructure;
