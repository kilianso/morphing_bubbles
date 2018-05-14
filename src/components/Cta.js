import React, {Component} from 'react';
import "./Cta.scss";

class Cta extends Component {
	render() {
		return (
			<button className={this.props.cssClass} onClick={this.props.changeStep}>{this.props.btnText}</button>
		)
	}
}

export default Cta;
