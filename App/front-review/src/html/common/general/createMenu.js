import React from 'react';

function CreateMenu(props) {

  function createList(){
    let result = [];
    for (let element in props.data) {
      if (element !== 'api') {
        result.push(
            <li key={element}><button id={element} className="button" onClick={props.handleClick}>{`${element}`}</button></li>
          );
      }
    }
    return result;
  }

  return (
     createList()
  );
}

export default CreateMenu;
