import React, {Component} from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import html5 from '../constDefinitions';
import codeImage from './assets/webWorkersCode.png';
import DisplayDefinition from '../general/displayDef';
import WebWorker from './general/workerSetup';
import worker from './general/worker.js';
import './style/style.css';

class WebWorkers extends Component {

  constructor (props) {
		super(props);

		this.state = {
			count: 0,
      counter: 120
		};
	}

  componentDidMount = () => {
		this.worker = new WebWorker(worker);
	}

  fetchUsers = () => {
		const users = [];
		const userDetails = {
			name: 'Jhon Doe',
			email: 'Jhon.doe@mail.com',
			id: 1
		};

		for (let i = 0; i < 10000000; i++) {
			userDetails.id = i++
			userDetails.dateJoined = Date.now()
			users.push(userDetails);
		}
		this.setState({
			count: users.length
		})
	}

  fetchWebWorker = () => {
		this.worker.postMessage('Fetch Users');
		this.worker.addEventListener('message', event => {
			this.setState({
				count: event.data.length
			})
		});
	}

  reloadCounter = () => {
    this.setState({counter: this.state.counter + 1, count: 0});
  }

  render(){
    return (
      <div className = "document">
      <h1>HTML5 - Web Workers</h1>
      <hr />

      <div className="example">

        <div className="result center">

        <section>
        <ReactCountdownClock
                   seconds={this.state.counter}
                   color="#000"
                   alpha={0.9}
                   size={300}
        />

        <button onClick={this.fetchWebWorker}>Fetch Users with Web Worker</button>
        <button onClick={this.fetchUsers}>Fetch Users Directly</button>
        <button onClick={this.reloadCounter}>Reload Counter</button><br/>
        <span>Total User Count: {this.state.count}</span>
      </section>

        </div>

        <div className="code">
          <img src={codeImage} alt="code"/>
        </div>

      </div>

      <div>
        <table>
          <tbody>
          <DisplayDefinition data={html5.api.web_workers} />
          </tbody>
        </table>
      </div>

      </div>
    );
  }

}

export default WebWorkers;
