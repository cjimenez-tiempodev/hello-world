import React from 'react';
import html5 from './constDefinitions';
import codeImage from './assets/textFormat.png';
import DisplayDefinition from './general/displayDef';

function TextFormat(props) {
  return (
    <div className = "document">
    <h1>Text + formatting</h1>
    <hr />

    <div className="example">

      <div className="result">
        <section>
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
        </section>
      </div>

      <div className="code">
        <img src={codeImage} alt="code"/>
      </div>

    </div>

    <div>
      <table>
        <tbody>
        <DisplayDefinition data={html5.text} />
        </tbody>
      </table>
    </div>

    </div>
  );
}

export default TextFormat;
