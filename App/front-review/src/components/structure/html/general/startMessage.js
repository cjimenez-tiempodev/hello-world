import React from 'react';
import htmlImage from '../../../common/assets/HTML5_Logo.png';
import './style/style.css';

function StartMessage(props) {
  return (
    <div className = "initial-container">
      <hr />

      <div className="initial-message">
        <img src={htmlImage} alt="html5"/>
      </div>

    </div>
  );
}

export default StartMessage;
