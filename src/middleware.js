import Chat from './lib/socketChat';
import { createActionFromSocket } from './actions';
import { SOCKET_TYPE, CHAT_URL, STORAGE_KEY } from './constants';

const chat = new Chat(CHAT_URL);

let storeRef = null;

chat.on('*', (data, evt) => {
	if (!storeRef) return;
	storeRef.dispatch(createActionFromSocket(evt, data));
});

const socketMiddleware = store => {
	storeRef = store;
	return next => action => {
		if (action.type === SOCKET_TYPE) {
			let { event, payload = {} } = action;
			if (!event) return next(action);
			chat.emit(event, payload);
		}
		return next(action);
	};
};

export default socketMiddleware;
