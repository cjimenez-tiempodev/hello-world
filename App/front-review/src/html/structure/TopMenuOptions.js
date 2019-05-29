import React from 'react';

function TopMenuOptions(props){
 return props.options.map( (option, i) => <li key={i}>{option}</li>);
}

export default TopMenuOptions;
