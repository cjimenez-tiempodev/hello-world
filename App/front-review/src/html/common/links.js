import React from 'react';
import html5 from './constDefinitions';
import codeImage from './assets/links.png';

function Links(props) {
  return (
    <div className = "document">
    <h1>Links + formatting</h1>
    <hr />

    <div className="example">

      <div className="result">

        <a href="example">hyperlink </a> {html5.href} <br/>

        <a href="mailto:">mailto</a> {html5.mailto} <br/>

        <a href="tel://###-###">tel</a> {html5.tel} <br/>

        <a href="name">name</a> {html5.name} <br/>

        <a href="#structure">Document structure</a> {html5.tagname} <br/>

      </div>

      <div className="code">
        <img src={codeImage} alt="code"/>
      </div>

    </div>

    </div>
  );
}

export default Links;
