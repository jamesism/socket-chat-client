import React, { Component } from 'react';
import style from '../chat.less';

export default ({users}) => (
	<ul className={style.userList}>
		{ users.map(u => <li key={u.id}>{u.name}</li>)}
	</ul>
);
