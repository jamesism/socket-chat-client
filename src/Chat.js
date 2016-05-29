import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { send, register } from './chatActions';
import ChatWindow from './components/ChatWindow';
import Login from './components/Login';

class Chat extends Component {

	render() {
		let {
			send,
			users,
			session,
			register,
			messages
		} = this.props;

		return session ?
			<ChatWindow
				users={users}
				onSend={send}
				messages={messages} />
			: <Login onRegister={register} /> ;
	}
}

const mapStateToProps = (state, ownProps) => {
	let {users, messages, session } = state;
	return { users, messages, session };
};

export default connect(
	mapStateToProps,
	{ send, register }
)(Chat);
