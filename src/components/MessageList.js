import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import style from '../chat.less';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const Message = ({msg}) => (
	<li className={style.message}>
		<label className="author">{msg.author}: </label>
		<span className="text">{msg.text}</span>
	</li>
);

export default class MessageList extends Component {

	componentDidUpdate() {
		this.checkScroll();
	}

	componentDidMount() {
		this.checkScroll();
	}

	checkScroll() {
		let node = findDOMNode(this);
		node.scrollTop = node.scrollHeight;
	}

	render() {
		let {messages} = this.props;
		return (
			<div className={style.scrollWrap}>
				<ul className={style.messageList}>
					{ messages.map(m => <Message key={m.id} msg={m} />) }
				</ul>
			</div>
		);
	}
};
