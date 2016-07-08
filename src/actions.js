import { SOCKET_TYPE, CHAT_CONSTANTS } from './constants';
const { cmd } = CHAT_CONSTANTS;

export const send = text => ({
	event: cmd.MESSAGE,
	type: SOCKET_TYPE,
	payload: { text }
});

export const register = name => ({
	event: cmd.REGISTER,
	type: SOCKET_TYPE,
	payload: { name }
});

export const createActionFromSocket = (evt, data) => ({
	data,
	type: evt
});
