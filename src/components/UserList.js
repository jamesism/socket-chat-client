import React, { Component } from 'react';
import style from '../chat.less';

const defaultList = [{
	name: 'None'
}];

export const User = ({user}) => (
	<li>
		<span>{user.name}</span>
	</li>
);

export default class UserList extends Component {
	render() {
		let { users } = this.props;
		return (
			<ul className={style.userList}>
				{ users.map(u => <User key={u.id} user={u} />) }
			</ul>
		);
	}
};
