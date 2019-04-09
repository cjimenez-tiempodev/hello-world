import React from 'react';
import html5 from './constDefinitions';
import CreateRows from './general/createRows';

function InputTypes(props) {
  return (
    <div className = "document">
      <h1>HTML5 Input Types</h1>
      <hr />

      <h3>Introduction</h3>
      <hr />

      <h3>Result and Code Example</h3>
      <hr />

      <section className="example">
        <table>
        <tbody>
          <CreateRows data={html5.input}/>
        </tbody>
        </table>
      </section>

    </div>
  );
}

export default InputTypes;
