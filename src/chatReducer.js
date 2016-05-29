import { CHAT_CONSTANTS } from './constants';

const initialState = {
	session: false,
	users: [],
	messages: []
};

const { evt } = CHAT_CONSTANTS;

export default (state = initialState, action) => {
	let { type } = action;

	switch (type) {

	case evt.INIT:
		let { session, users, messages } = action.data;
		return {
			...state,
			session,
			users,
			messages
		};

	case evt.USERS:
		let userList = action.data;
		return {
			...state,
			users: userList
		};

	case evt.MESSAGE:
		let message = action.data;

		let newMessages = state.messages.slice();
		newMessages.push(message);
		return {
			...state,
			messages: newMessages
		};
	}

	return state;
};
