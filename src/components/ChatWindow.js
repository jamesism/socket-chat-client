import React, { Component } from 'react';
import style from '../chat.less';
import UserList from './UserList';
import SimpleInput from './SimpleInput';
import MessageList from './MessageList';

export default class ChatWindow extends Component {
	render() {
		let { users, messages, onSend } = this.props;
		return (
			<main className={style.chatWindow}>
				<UserList users={users} />
				<content>
					<MessageList messages={messages} />
					<SimpleInput onSubmit={onSend} name="messageInput" />
				</content>
			</main>
		);
	}
};
