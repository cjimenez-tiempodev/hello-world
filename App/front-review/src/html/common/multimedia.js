import React from 'react';
import html5 from './constDefinitions';
import codeImage from './assets/videoCode.png';
import DisplayDefinition from './general/displayDef';

function Multimedia(props) {
  return (
    <div className = "document">
    <h1>Multimedia - Audio & Video</h1>
    <hr />

    <h3>Introduction</h3>
    <hr />

    <h3>Result and Code Example</h3>
    <hr />

    <div className="example">

      <div className="result center">
        <section>
        <audio controls>
          <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        </section>
      </div>

      <div className="code">
        <img src={codeImage} alt="code"/>
      </div>

    </div>

    <div className="example">

      <div className="result">
        <section>
        <video controls={true}>
          <source src="https://www.quirksmode.org/html5/videos/big_buck_bunny.mp4" type="video/mp4" />
        </video>
        </section>
      </div>

      <div className="code">
        <img src={codeImage} alt="code"/>
      </div>

    </div>

    <hr/>

    <div className="displayDefinition">
      <table>
        <tbody>
        <DisplayDefinition data={html5.multimedia} />
        </tbody>
      </table>
    </div>

    </div>
  );
}

export default Multimedia;
