import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { send, register } from '../actions';
import ChatWindow from './ChatWindow';
import Login from './Login';

const Chat = ({send, users, session, register, messages}) => {
	if (session) return <ChatWindow users={users} onSend={send} messages={messages} />;
	else return <Login onRegister={register} />;
};

const mapStateToProps = (state, ownProps) => {
	let {users, messages, session } = state;
	return { users, messages, session };
};

export default connect(mapStateToProps, { send, register })(Chat);
