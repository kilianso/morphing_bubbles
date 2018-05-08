import React, {Component} from 'react';
import "./Anna.scss";

class Anna extends Component {
	render() {
		return (
			<div className={"Anna " + this.props.appearance}>
				<svg className="Anna__inner" width="100%" height="100%" viewBox="0 0 375 375" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
					<defs>
		        // Yellow bubble
						<g className="yellow__bubble">
			        <path d="M170.017071,266.234523 C243.792414,288.960766 275.005059,225.516673 257.034143,179.117262 C239.063226,132.717851 218.075273,92 170.017071,92 C121.95887,92 83,131.003727 83,179.117262 C83,227.230797 96.2417282,243.508281 170.017071,266.234523 Z" id="yellow__path" />
			        <filter x="-18.9%" y="-10.4%" width="137.8%" height="141.5%" filterUnits="objectBoundingBox" id="yellow__filter">
			          <feOffset dx={0} dy={20} in="SourceAlpha" result="shadowOffsetOuter1" />
			          <feGaussianBlur stdDeviation={10} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
			          <feColorMatrix values="0 0 0 0 1   0 0 0 0 0.8   0 0 0 0 0  0 0 0 0.25 0" type="matrix" in="shadowBlurOuter1" />
			        </filter>
						</g>
		        // Red bubble
						<g className="red__bubble">
			        <path d="M188,251 C233.287349,251 270,214.293132 270,169.012915 C270,123.732698 262.45977,47.4458577 188,87.0258299 C113.54023,126.605802 106,123.732698 106,169.012915 C106,214.293132 142.712651,251 188,251 Z" id="red__path" />
			        <filter x="-22.6%" y="-11.3%" width="145.2%" height="145.2%" filterUnits="objectBoundingBox" id="red__filter">
			          <feOffset dx={0} dy={20} in="SourceAlpha" result="shadowOffsetOuter1" />
			          <feGaussianBlur stdDeviation={10} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
			          <feColorMatrix values="0 0 0 0 0.894117647   0 0 0 0 0.0352941176   0 0 0 0 0.392156863  0 0 0 0.25 0" type="matrix" in="shadowBlurOuter1" />
			        </filter>
						</g>
		        // Blue bubble
						<g className="blue__bubble">
			        <path d="M176.402367,290.794763 C236.813326,265.328994 286,274.227341 286,204.531553 C286,134.835765 209.455621,59.1418688 164.804734,118.268344 C120.153846,177.394818 90,150.494818 90,204.531553 C90,258.568288 115.991408,316.260532 176.402367,290.794763 Z" id="blue__path" />
			        <filter x="-22.3%" y="-11.2%" width="144.7%" height="144.7%" filterUnits="objectBoundingBox" id="blue__filter">
			          <feOffset dx={0} dy={20} in="SourceAlpha" result="shadowOffsetOuter1" />
			          <feGaussianBlur stdDeviation={10} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
			          <feColorMatrix values="0 0 0 0 0.423529412   0 0 0 0 0.796078431   0 0 0 0 0.874509804  0 0 0 0.25 0" type="matrix" in="shadowBlurOuter1" />
			        </filter>
						</g>
		      </defs>
					<g className="bubbles" fill="none" fillRule="evenodd">
						// NEVER CHANGE ORDER!
						// Yellow Group
						<g className="bubbles__yellow">
							<use fill="#000" filter="url(#yellow__filter)" xlinkHref="#yellow__path" />
							<use fill="#FC0" style={{mixBlendMode: 'multiply'}} xlinkHref="#yellow__path" />
						</g>
						// Red Group
						<g className="bubbles__red">
							<use fill="#000" filter="url(#red__filter)" xlinkHref="#red__path" />
							<use fill="#E40964" style={{mixBlendMode: 'multiply'}} xlinkHref="#red__path" />
						</g>
						// Blue Group
						<g className="bubbles__blue">
							<use fill="#000" style={{mixBlendMode: 'multiply'}} filter="url(#blue__filter)" xlinkHref="#blue__path" />
							<use fill="#6CCBDF" style={{mixBlendMode: 'multiply'}} xlinkHref="#blue__path" />
						</g>
					</g>
				</svg>
			</div>
		)
	}
}

export default Anna;
