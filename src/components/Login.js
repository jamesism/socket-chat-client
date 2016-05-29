import React, { Component } from 'react';
import style from '../chat.less';
import SimpleInput from './SimpleInput';

export default class Login extends Component {

	render() {
		return (
			<main className={style.login}>
				<h1>What is your name?</h1>
				<SimpleInput onSubmit={this.props.onRegister} name="nameInput" />
			</main>
		);
	}
}
