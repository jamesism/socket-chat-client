import React, { Component } from 'react';
import style from '../chat.less';

const Message = ({msg}) => (
	<li className={style.message}>
		<label className="author">{msg.author}: </label>
		<span className="text">{msg.text}</span>
	</li>
);

export default class MessageList extends Component {

	componentDidUpdate() {
		this.setScroll();
	}

	componentDidMount() {
		this.setScroll();
	}

	setScroll() {
		this.refs.scroller.scrollTop = this.refs.scroller.scrollHeight;
	}

	render() {
		let {messages} = this.props;
		return (
			<div ref="scroller" className={style.scrollWrap}>
				<ul className={style.messageList}>
					{ messages.map(m => <Message key={m.id} msg={m} />) }
				</ul>
			</div>
		);
	}
};
