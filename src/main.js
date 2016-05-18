import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

const rootEl = document.getElementById('app');

const render = () => {
	ReactDOM.render(
		<h1>Hello! what</h1>,
		rootEl
	);
};

render();
