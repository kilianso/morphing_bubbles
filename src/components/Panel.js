import React, { Component } from 'react';
import './Panel.scss';

class Panel extends Component {
	render() {
		return (
			<div className="Panel">
				<h3 className="Panel-heading">{this.props.heading}</h3>
				<p className="Panel-content">{this.props.content}</p>

				{/* With this.props.children you can place nested Components */}
				<div className="Panel-children">{this.props.children}</div>
			</div>
		)
	}
}

export default Panel;
