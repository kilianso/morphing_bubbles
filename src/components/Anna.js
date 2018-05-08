import React, {Component} from 'react';
import "./Anna.scss";

class Anna extends Component {
	render() {
		return (
			<div className={"Anna " + this.props.appearance}>
				<svg className="Anna__inner" width="100%" height="100%" viewBox="0 0 243 261" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
					<defs>
						// Yellow bubble
						<path d="M87.0170713 190.234523c73.7753427 22.726243 104.9879877-40.71785 87.0170717-87.117261C156.063226 56.7178506 135.075273 16 87.0170713 16 38.9588698 16 0 55.0037266 0 103.117262c0 48.113535 13.2417282 64.391019 87.0170713 87.117261z" id="yellow__path" />
						<filter x="-22.3%" y="-11.2%" width="144.7%" height="144.7%" filterUnits="objectBoundingBox" id="yellow__filter">
							<feOffset dy={20} in="SourceAlpha" result="shadowOffsetOuter1" />
							<feGaussianBlur stdDeviation={10} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
							<feColorMatrix values="0 0 0 0 1 0 0 0 0 0.8 0 0 0 0 0 0 0 0 0.25 0" in="shadowBlurOuter1" />
						</filter>
						// Red bubble
						<path d="M105 175c45.287349 0 82-36.706868 82-81.9870851 0-45.2802167-7.54023-121.5670572-82-81.987085-74.4597701 39.5799721-82 36.7068683-82 81.987085C23 138.293132 59.7126505 175 105 175z" id="red__path" />
						<filter x="-24.4%" y="-11.4%" width="148.8%" height="145.7%" filterUnits="objectBoundingBox" id="red__filter">
							<feOffset dy={20} in="SourceAlpha" result="shadowOffsetOuter1" />
							<feGaussianBlur stdDeviation={10} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
							<feColorMatrix values="0 0 0 0 0.894117647 0 0 0 0 0.0352941176 0 0 0 0 0.392156863 0 0 0 0.25 0" in="shadowBlurOuter1" />
						</filter>
						// Blue bubble
						<path d="M93.4023669 214.794763C153.813326 189.328994 203 198.227341 203 128.531553c0-69.6957878-76.544379-145.3896842-121.1952663-86.2632094C37.1538462 101.394818 7 74.4948182 7 128.531553c0 54.036735 25.991408 111.728979 86.4023669 86.26321z" id="blue__path" />
						<filter x="-20.4%" width="140.8%" height="140%" filterUnits="objectBoundingBox" id="blue__filter">
							<feOffset dy={20} in="SourceAlpha" result="shadowOffsetOuter1" />
							<feGaussianBlur stdDeviation={10} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
							<feColorMatrix values="0 0 0 0 0.423529412 0 0 0 0 0.796078431 0 0 0 0 0.874509804 0 0 0 0.25 0" in="shadowBlurOuter1" />
						</filter>
					</defs>
					<g className="bubbles" fill="none" fillRule="evenodd">
						// NEVER CHANGE ORDER!
						// Yellow Group
						<g className="bubbles__yellow" transform="translate(20)">
							<use fill="#000" filter="url(#yellow__filter)" xlinkHref="#yellow__path" />
							<use fill="#FC0" style={{mixBlendMode: 'multiply'}} xlinkHref="#yellow__path" />
						</g>
						// Red Group
						<g className="bubbles__red" transform="translate(20)">
							<use fill="#000" filter="url(#red__filter)" xlinkHref="#red__path" />
							<use fill="#E40964" style={{mixBlendMode: 'multiply'}} xlinkHref="#red__path" />
						</g>
						// Blue Group
						<g className="bubbles__blue" transform="translate(20)">
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
