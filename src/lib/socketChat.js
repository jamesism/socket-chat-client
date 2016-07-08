import io from 'socket.io-client';

export const constants = {
	evt: {
		INIT: "init",
		ERROR: "chaterror",
		USERS: "userchange",
		MESSAGE: "message"
	},

	cmd: {
		MESSAGE: "message",
		REGISTER: "register"
	}
};

export default class Chat {
	constructor(url='') {
		let { evt } = constants;
		this.socket = io(url);
		this.listeners = {};

		Object.keys(evt).forEach(t => {
			this.socket.on(evt[t], this.handleEvt.bind(this, evt[t]));
		});
	}

	register(name) {
		if (!name) return;
		this.socket.emit(constants.cmd.REGISTER, { name });
	}

	send(text) {
		if (!text) return;
		this.socket.emit(constants.cmd.MESSAGE, { text });
	}

	emit(evt, data) {
		if (!evt || !data) return;
		this.socket.emit(evt, data);
	}

	on(evt, fn) {
		if (!evt || !fn) throw new Error('Must supply event name and callback.');
		let { listeners } = this;
		listeners[evt] = listeners[evt] ? listeners[evt].push(fn) : [fn];
		return this;
	}

	off (evt, fn) {
		if (!evt || !fn) throw new Error('Must supply event name and callback.');
		let { listeners } = this;
		if (listeners[evt] && listeners[evt].indexOf(fn) !== -1) {
			this.listeners.splice(listeners[evt].indexOf(fn), 1);
		}
		return this;
	}

	handleEvt(evt, data) {
		let fnList = [],
				{ listeners } = this;

		if (listeners['*']) fnList.push(...listeners['*']);
		if (listeners[evt]) fnList.push(...listeners[evt]);
		fnList.forEach(fn => fn(data, evt));
	}
}
