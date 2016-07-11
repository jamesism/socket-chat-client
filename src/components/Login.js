import React, { Component } from 'react';
import style from '../chat.less';
import SimpleInput from './SimpleInput';

export default ({onRegister}) => (
	<main className={style.login}>
		<h1>What is your name?</h1>
		<SimpleInput onSubmit={onRegister} name="nameInput" />
	</main>
);
