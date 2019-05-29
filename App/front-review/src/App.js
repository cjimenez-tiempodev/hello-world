import React, { Component } from 'react';
import CreateMenu from './html/common/general/createMenu';
import html from './html/common/constDefinitions';
import RouteContent from './html/common/general/routeContent';
import TopMenu from './html/structure/TopMenu';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      display: 'default',
    }
  }

  handleClick = (e) => {
     this.setState({display: e.target.id});
   }

  render() {
    return (
      <div className = "document">

      <div className="body">
      <header className="header-menu">

        <TopMenu options={['HTML5', 'React', 'CSS3', 'JS']} />

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
