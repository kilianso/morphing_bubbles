import React, {Component} from 'react';
import "./Button.scss";

class Button extends Component {
	render() {
		return (
			<button onClick={this.props.changeAppearance} disabled={this.props.disabled}>{this.props.appearance}</button>
		)
	}
}

export default Button;
