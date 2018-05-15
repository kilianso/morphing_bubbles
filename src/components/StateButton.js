import React, {Component} from 'react';
import "./StateButton.scss";

class StateButton extends Component {
	render() {
		return (
			<button onClick={this.props.changeAppearance} disabled={this.props.disabled}>{this.props.appearance}</button>
		)
	}
}

export default StateButton;
