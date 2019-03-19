import React, {Component} from 'react';
import html5 from '../constDefinitions';
import codeImage from './assets/webStorageCode.png';
import DisplayDefinition from '../general/displayDef';

class WebStorage extends Component {

  constructor(props){
    super(props);
    this.state = {
        local: 0,
        session: 0,
    };
  }

  componentWillMount(){
    this.setState( {local: localStorage.clickcount || 0});
    this.setState( {session: sessionStorage.clickcount || 0});
  }

  setLocal = () =>{
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
        this.setState({local: localStorage.clickcount});
      } else {
        localStorage.clickcount = 1;
        this.setState({local: localStorage.clickcount});
    }
  }

  clearLocal = () => {
    localStorage.removeItem('clickcount');
    this.setState( {local: localStorage.clickcount || 0});
  }

  setSession = () =>{
    if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
        this.setState( {session: sessionStorage.clickcount});
      } else {
        sessionStorage.clickcount = 1;
        this.setState( {session: sessionStorage.clickcount});
    }
  }

  render(){
    return (
      <div className = "document">
      <h1> HTML5 - Web Storage</h1>
      <hr />

      <div className="example">

        <div className="result center">
          <h5>Click on the button to encrease the counter</h5>
          <section>
            <label htmlFor="local">local storage</label>
            <button onClick={this.setLocal} id="local">Increase One</button><br/>
            <label htmlFor="local">reset counter</label>
            <button onClick={this.clearLocal} id="local">Reset</button><br/>
            <span>{this.state.local}</span>
          </section>
          <section>
            <label htmlFor="local">session storage</label>
            <button onClick={this.setSession} id="session">Increase One</button><br/>
            <span>{this.state.session}</span>
          </section>
        </div>

        <div className="code">
          <img src={codeImage} alt="code"/>
        </div>

      </div>

      <div>
        <table>
          <tbody>
          <DisplayDefinition data={html5.api.web_Storage} />
          </tbody>
        </table>
      </div>

      </div>
    );
  }

}

export default WebStorage;
