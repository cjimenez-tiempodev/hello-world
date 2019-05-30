import React from 'react';

function TopMenu(props){
 return (
   <nav className="top-menu-container">
     <ul>
       {props.options.map( (option, i) => <li key={i}>{option}</li>)}
     </ul>
   </nav>
 );
}

export default TopMenu;
