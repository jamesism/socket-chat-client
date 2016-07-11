import React, { Component } from 'react';
import style from '../chat.less';
import UserList from './UserList';
import SimpleInput from './SimpleInput';
import MessageList from './MessageList';

export default ({users, messages, onSend}) => (
	<main className={style.chatWindow}>
		<UserList users={users} />
		<content>
			<MessageList messages={messages} />
			<SimpleInput onSubmit={onSend} name="messageInput" />
		</content>
	</main>
);
