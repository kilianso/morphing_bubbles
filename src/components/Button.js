import React, {Component} from 'react';
import "./Button.scss";

class Button extends Component {
	render() {
		return (
			<button onClick={this.props.changer} disabled={this.props.disabled}>{this.props.appearance}</button>
		)
	}
}

export default Button;
