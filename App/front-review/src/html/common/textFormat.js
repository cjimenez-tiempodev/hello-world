import React from 'react';
import html5 from './constDefinitions';
import codeImage from './assets/textFormat.png';

function TextFormat(props) {
  return (
    <div className = "document">
    <h1>Text + formatting</h1>
    <hr />

    <div className="example">

      <div className="result">
        <p>
        <strong>Aenean tempus finibus tristique.</strong>
        Duis lorem urna, <em>tincidunt et posuere nec</em>, <i>euismod pellentesque tortor</i>.
        <blockquote>
        Curabitur pulvinar, elit sit amet interdum sagittis, tellus nibh dictum turpis, a <b>rutrum tellus massa et dolor</b>.
        </blockquote>
        <cite>- Fusce aliquam tortor eget ex pharetra, ac malesuada lorem luctus.</cite>
        <br />
        <pre>Vivamus sit amet tempor nisl, sit amet dapibus nulla.</pre>
        <q>Morbi fermentum eleifend odio</q>,<address>ut pulvinar massa interdum in.</address>
        <ins>Etiam vel augue cursus</ins>, <small>porta ipsum sit amet, tristique erat.</small>
        <code>Ut vitae molestie arcu.</code>
        <del>In hac habitasse platea dictumst.</del>
        </p>
      </div>

      <div className="code">
        <img src={codeImage} />
      </div>

    </div>

    <div>
      <p>
        <span>strong: </span>{html5.strong}<br />
        <span>b: </span>{html5.b}<br />
        <span>em: </span>{html5.em}<br />
        <span>i: </span>{html5.i}<br />
        <span>cite: </span>{html5.cite}<br />
        <span>pre: </span>{html5.pre}<br />
        <span>del: </span>{html5.del}<br />
        <span>ins: </span>{html5.ins}<br />
        <span>blockquote: </span>{html5.blockquote}<br />
        <span>q: </span>{html5.q}<br />
        <span>code: </span>{html5.code}<br />
      </p>
    </div>

    </div>
  );
}

export default TextFormat;
