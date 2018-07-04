import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import registerServiceWorker from './registerServiceWorker';
import IndecisionApp from './App';
import 'normalize.css/normalize.css';
import './styles/styles.css';

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

registerServiceWorker();
