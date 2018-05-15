import React, { Component } from 'react';
import './AnnaOverlay.scss';

class AnnaOverlay extends Component {
	render() {
		return (
			<div className={`AnnaOverlay ${this.props.cssClass}`}>
				<div className="AnnaOverlay__inner">
					<div className="AnnaOverlay__content">
						<small className="AnnaOverlay__heading">{this.props.heading}</small>
						<p className="AnnaOverlay__text">{this.props.content}</p>
						{/* Nested Components */}
						<div className="AnnaOverlay__children">{this.props.children}</div>
					</div>
				</div>
				<div className="AnnaOverlay__background"></div>
			</div>
		)
	}
}

export default AnnaOverlay;
