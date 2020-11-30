import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import router from '../src/config/router';

ReactDOM.render(
	// <React.StrictMode>
	// 	{/* <App /> */}
	// 	{router}
	// </React.StrictMode>,
	router(),
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
