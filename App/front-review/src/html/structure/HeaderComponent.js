import React from 'react';
import TopMenu from '../common/general/TopMenu';

function HeaderComponent(props){
 return (
   <header className="header-menu">
     <TopMenu options={props.options} />
   </header>
 );
}

export default HeaderComponent;
