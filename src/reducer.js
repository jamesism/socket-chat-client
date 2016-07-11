import { CHAT_CONSTANTS } from './constants';

const initialState = {
	session: false,
	users: [],
	messages: []
};

const { evt } = CHAT_CONSTANTS;

const handlers = {
	[evt.INIT](state, {data: {session, users, messages}}) {
		return {
			...state,
			session,
			users,
			messages
		};
	},

	[evt.USERS](state, {data: users}) {
		return {
			...state,
			users
		};
	},

	[evt.MESSAGE](state, {data: message}) {
		return {
			...state,
			messages: [...state.messages, message]
		};
	}
};

export default (state = initialState, action) => {
	if (!handlers[action.type]) return state;
	return handlers[action.type](state, action);
};
