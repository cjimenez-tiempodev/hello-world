import React from 'react';
import {
  DocumentStructure,
  TextFormat,
  Links,
  ImagesFormat,

  InputTypes,
  Graphics,
  Multimedia,
  HTML5Geolocation,
  DnD,
  WebStorage,
  WebWorkers
} from '../index';

function RouteContent(props) {

  function createList(){
    switch (props.display) {
      case 'structure':
        return <DocumentStructure />;
      break;
      case 'text':
        return <TextFormat />;
      break;
      default:
        return 'Not found';
    }
  }

  return (
     createList()
  );
}

export default RouteContent;
