import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import style from '../chat.less';

export default class SimpleInput extends Component {

	componentWillMount() {
		this.setState({
			value: ''
		});
	}

	componentDidMount(e) {
		let el = findDOMNode(this);
		el.querySelector('input').focus();
	}

	handleSubmit(e) {
		console.log("handle submit?");
		e.preventDefault();
		e.stopPropagation();
		if (!this.state.value) return;
		this.props.onSubmit(this.state.value);
		this.setState({
			value: ''
		});
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}

	render() {
		return (
			<form
				name={this.props.name}
				className={style.simpleInput}
				onSubmit={this.handleSubmit.bind(this)}>
				<input
					value={this.state.value}
					onChange={this.handleChange.bind(this)} />
				<button type="submit">{this.props.buttonText || 'Submit'}</button>
			</form>
		);
	}
}
