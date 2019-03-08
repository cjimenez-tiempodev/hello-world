import React from 'react';
import html5 from './constDefinitions';
import CreateRows from './general/createRows';

function InputTypes(props) {
  return (
    <div className = "document">
      <h1>HTML5 Input Types</h1>
      <hr />

      <section className="example">
        <table>
          <CreateRows data={html5.input}/>
        </table>
      </section>

    </div>
  );
}

export default InputTypes;
