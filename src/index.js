import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/styles.css';
import AppRouter from './routers/AppRouter';


ReactDOM.render(<AppRouter/> ,document.getElementById('app'));

registerServiceWorker();
