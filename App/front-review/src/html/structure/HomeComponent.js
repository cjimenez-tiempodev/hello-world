import React, {Component} from 'react';
import frontLogos from '../common/assets/html5-js-css3-logo.png';
import reactLogo from '../common/assets/react-logo.png';

class HomeComponent extends Component {

  render(){
    return(
      <React.Fragment>
      <section>
        <article className="initial-message">
          <img src={reactLogo} alt="reactLogo"/>
          <img src={frontLogos} alt="front-end"/>
        </article>
      </section>

      <aside className="menu-container" />
      </React.Fragment>
    );
  }
}

export default HomeComponent;
