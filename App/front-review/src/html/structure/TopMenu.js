import React from 'react';
import TopMenuOptions from './TopMenuOptions';

function TopMenu(props){
 return (
   <nav className="top-menu-container">
     <ul>
       <TopMenuOptions options={props.options}/>
     </ul>
   </nav>
 );
}

export default TopMenu;
