import React, { Component } from 'react';
import CreateMenu from './html/common/general/createMenu';
import html from './html/common/constDefinitions';
import RouteContent from './html/common/general/routeContent';
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
      </header>

      <section className="leftSide" />

      <section>
        <article>
          <RouteContent display={this.state.display}/>
        </article>
      </section>

      <aside>
        <h2>Menu</h2>
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

      <footer>
        <small>Footer All rights reserved.</small>
      </footer>
      </div>

      </div>
    );
  }
}

export default App;
