import React, { Component } from 'react';
import style from '../chat.less';

export default class SimpleInput extends Component {

	componentWillMount() {
		this.setValue();
	}

	componentDidMount(e) {
		this.refs.input.focus();
	}

	setValue(val) {
		this.setState({
			value: val || ''
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		e.stopPropagation();
		if (!this.state.value) return;
		this.props.onSubmit(this.state.value);
		this.setValue('');
	}

	handleChange(e) {
		this.setValue(e.target.value);
	}

	render() {
		return (
			<form
				name={this.props.name}
				className={style.simpleInput}
				onSubmit={this.handleSubmit.bind(this)}>
				<input
					ref="input"
					value={this.state.value}
					onChange={this.handleChange.bind(this)} />
				<button type="submit">{this.props.buttonText || 'Submit'}</button>
			</form>
		);
	}
}
