import React from 'react';
import html5, {docStructure} from './constDefinitions';
import codeImage from './assets/docStructure.png';

function TextFormat(props) {
  return (
    /*
    <div> ... </div>
    A generic container used to denote a page section
    */
    <div className = "document">
    <h1>Text + formating</h1>
    <hr />

    <div className="example">

      <div className="result">
        <p>
        <strong>Aenean tempus finibus tristique.</strong>
        Duis lorem urna, <em>tincidunt et posuere nec</em>, euismod pellentesque tortor.
        <blockquote>
        Curabitur pulvinar, elit sit amet interdum sagittis, tellus nibh dictum turpis, a rutrum tellus massa et dolor.
        <cite>Fusce aliquam tortor eget ex pharetra, ac malesuada lorem luctus.</cite>
        </blockquote>
        <br />
        <pre>Vivamus sit amet tempor nisl, sit amet dapibus nulla.</pre>
        Morbi fermentum eleifend odio, ut pulvinar massa interdum in.
        Etiam vel augue cursus, porta ipsum sit amet, tristique erat.
        <code>Ut vitae molestie arcu.</code>
        In hac habitasse platea dictumst.
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

export default TextFormat;
