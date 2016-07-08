import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import Chat from './components/Chat';
import reducer from './reducer';
import middleware from './middleware';

// DOM Entrypoint
const rootEl = document.getElementById('app');

// Create store
const store = createStore(reducer, undefined, compose(
	applyMiddleware(middleware),
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
	<Provider store={store}>
		<Chat />
	</Provider>,
	rootEl
);
