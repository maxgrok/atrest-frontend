import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SecondPage from './Pages/SecondPage';
import ShowPage from './Pages/ShowPage';
import CreateNewListing from './Pages/CreateNewListing';

ReactDOM.render(<Router>
		<React.Fragment>
		<Route exact path="/" component={Home} />
		<Route exact path='/search' component={SecondPage} />
		<Route exact path='/show' component={ShowPage} />
		<Route exact path='/create' component={CreateNewListing} />
		</React.Fragment>
	</Router>, document.getElementById('root'));

registerServiceWorker();
