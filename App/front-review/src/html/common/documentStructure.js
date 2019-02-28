import React from 'react';
import html5, {lorem} from './constDefinitions';

function DocumentStructure(props) {
  return (
    /*
    <div> ... </div>
    Ageneric container used to denote a page section
    */
    <div>

    <h1>Document Structure</h1>
    <hr />
    <h2>Lorem ipsum</h2>
    <p>
    {lorem.l1}<br />
    {lorem.l2}
    <span>{lorem.l3}</span><br />
    </p>

    <p>
    {lorem.l4}<br />
    {lorem.l5}
    </p>
    <br />
    <hr />

    <span>h1...h6: </span>{html5.h1h6}<br />
    <span>span: </span>{html5.span}<br />
    <span>p: </span>{html5.p}<br />
    <span>br: </span>{html5.br}<br />
    <span>hr: </span>{html5.hr}<br />

    </div>
  );
}

export default DocumentStructure;
