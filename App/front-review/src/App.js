import React, { Component } from 'react';
import CreateMenu from './html/common/general/createMenu';
import html from './html/common/constDefinitions';
import RouteContent from './html/common/general/routeContent';
import htmlImage from './html/common/assets/HTML5_Logo.png';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      display: 'default',
    }
  }

  handleClick = (e) => {
     console.log(e.target.id);
     this.setState({display: e.target.id});
   }

  render() {
    return (
      <div className = "document">

      <div className="body">
      <header className="header-menu">
        <nav>
          <ul>
            <li>HTML5 Review</li>
          </ul>
        </nav>

        <div className="icon">
          <img src={htmlImage}  width="50px" height="50px" alt="html5"/>
        </div>

      </header>

      <section className="leftSide" />

      <section>
        <article>
          <RouteContent display={this.state.display}/>
        </article>
      </section>

      <aside className="menu-container">
        <h2>HTML5</h2>
        <ul>
          <CreateMenu
            data={html}
            handleClick={this.handleClick}
          />
          <CreateMenu
            data={html.api}
            handleClick={this.handleClick}
          />
        </ul>
      </aside>

      <section className="rightSide" />

      <div className="fit-space" />

      <footer className="footer-main">
        <small>Footer All rights reserved.</small>
      </footer>
      </div>

      </div>
    );
  }
}

export default App;
