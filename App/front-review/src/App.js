import React, { Component } from 'react';
import frontEnd from './html/common/constDefinitions';
import HeaderComponent from './html/structure/HeaderComponent';
import getEntries from './html/common/dataStructure/getEntries';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {HtmlComponent, HomeComponent} from './html/structure/index';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      display: 'default',
    };
  }

  render() {
    return (
      <Router>
        <div className = "document">

        <div className="body">

          <HeaderComponent options={getEntries(frontEnd)}/>
          <section className="leftSide" />

          <Route exact path="/" component={HomeComponent} />
          <Route path="/HTML5" component={HtmlComponent} />

          <section className="rightSide" />
          <div className="fit-space" />

          <footer className="footer-main">
            <small>Footer All rights reserved.</small>
          </footer>

        </div>

        </div>
      </Router>
    );
  }
}

export default App;
