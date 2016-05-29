import { SOCKET_TYPE, CHAT_CONSTANTS } from './constants';

export const createSocketMessage = (evt, data) => ({
	data,
	type: evt
});

const createSocketActionCreator = (event, payloadKey) => param => ({
	event,
	type: SOCKET_TYPE,
	payload: {
		[payloadKey]: param
	}
});

const { cmd } = CHAT_CONSTANTS;
export const send = createSocketActionCreator(cmd.MESSAGE, 'text');
export const register = createSocketActionCreator(cmd.REGISTER, 'name');
