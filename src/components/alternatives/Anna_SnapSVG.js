import React, {Component} from 'react';
import Snap from 'snapsvg-cjs';
import "./Anna.scss";

class Anna extends Component {
	animateSvg(){
		const mina = window.mina, // i know... that's some ugly issue of that node module
					s = Snap(this.refs.Anna__SVG),
					yellow__path = s.select('#yellow__path'),
					yellow__vectors = [
						'M149.085231,289.321739 C211.050755,297.202353 269.82218,271.04099 269.82218,194.137583 C269.82218,117.234175 187.712537,92.5244767 136.308834,98.9534269 C84.9051308,105.382377 71.0728772,115.172053 60,165 C48.9271228,214.827947 87.1197062,281.441125 149.085231,289.321739 Z',
						'M198.031624,284.063248 C253,284.063248 277,263.031624 277,220 C277,176.968376 278,96 204,96 C130,96 96,139.933761 96,188 C96,236.066239 143.063248,284.063248 198.031624,284.063248 Z',
						'M160.017071,259.234523 C234.034143,248.469047 253,226 247.034143,172.117262 C241.068285,118.234523 224,80 160.017071,85 C96.0341425,90 73,124.003727 73,172.117262 C73,220.230797 86,270 160.017071,259.234523 Z0',
						'M170.017071,266.234523 C243.792414,288.960766 275.005059,225.516673 257.034143,179.117262 C239.063226,132.717851 218.075273,92 170.017071,92 C121.95887,92 83,131.003727 83,179.117262 C83,227.230797 96.2417282,243.508281 170.017071,266.234523 Z',
					],
					red__path = s.select('#red__path'),
					red__vectors = [
						'M201.102012,254.247339 C250.011526,254.247339 289.660521,214.598344 289.660521,165.68883 C289.660521,116.779316 262.214034,76.5145503 201.102012,77.130321 C139.989989,77.7460917 112.543503,116.779316 112.543503,165.68883 C112.543503,214.598344 152.192498,254.247339 201.102012,254.247339 Z',
						'M163,284 C221,295 259,234.293132 259,189.012915 C259,143.732698 209,80 140,97 C71,114 62,154 62,188 C62,222 105,273 163,284 Z',
						'M207.385303,255.84999 C265,266 293.541213,202.929373 289.770606,173.464686 C286,144 275,132 230,114 C185,96 130,142.499853 130,188 C130,233.500147 149.770606,245.699979 207.385303,255.84999 Z',
						'M188,251 C233.287349,251 270,214.293132 270,169.012915 C270,123.732698 262.45977,47.4458577 188,87.0258299 C113.54023,126.605802 106,123.732698 106,169.012915 C106,214.293132 142.712651,251 188,251 Z',
					],
					blue__path = s.select('#blue__path'),
					blue__vectors = [
						'M183.402367,277.794763 C243.804734,289.589526 293,295.063107 293,191.531553 C293,88 195,29 144,88 C93,147 87,137.494818 87,191.531553 C87,245.568288 123,266 183.402367,277.794763 Z',
						'M184.031624,283.063248 C257.819305,305.76715 289.03717,242.385424 271.063248,196.031624 C253.089326,149.677824 232.097863,109 184.031624,109 C135.965385,109 97,147.965385 97,196.031624 C97,244.097863 110.243943,260.359346 184.031624,283.063248 Z',
						'M170.961538,272.117043 C230,290 277,272.452055 277,203 C277,133.547945 207.846154,100.193966 159.423077,100.193966 C111,100.193966 85,132.307741 85,186.155504 C85,240.003268 111.923077,254.234086 170.961538,272.117043 Z',
						'M176.402367,290.794763 C236.813326,265.328994 286,274.227341 286,204.531553 C286,134.835765 209.455621,59.1418688 164.804734,118.268344 C120.153846,177.394818 90,150.494818 90,204.531553 C90,258.568288 115.991408,316.260532 176.402367,290.794763 Z',
					];

		function sequence1(){
			sequencer(yellow__path,yellow__vectors[0],4000, sequence2);
			sequencer(red__path,red__vectors[0],5000, sequence2, 1000);
			sequencer(blue__path,blue__vectors[0],6000, sequence2,2000);
		}
		function sequence2(){
			sequencer(yellow__path,yellow__vectors[1],4000, sequence3);
			sequencer(red__path,red__vectors[1],5000, sequence3,1000);
			sequencer(blue__path,blue__vectors[1],6000, sequence3,2000);
		}
		function sequence3(){
			sequencer(yellow__path,yellow__vectors[2],4000, sequence4);
			sequencer(red__path,red__vectors[2],5000, sequence4,1000);
			sequencer(blue__path,blue__vectors[2],6000, sequence4,2000);
		}
		function sequence4(){
			sequencer(yellow__path,yellow__vectors[3],4000, sequence1);
			sequencer(red__path,red__vectors[3],5000, sequence1,1000);
			sequencer(blue__path,blue__vectors[3],6000, sequence1,2000);
		}

		function sequencer(el, vectors, duration, next, delay=0){
			setTimeout(()=> {
				el.stop().animate({'path':vectors},duration, mina.easeinout, next);
			},delay)
		}

		// fire animation
		sequence1();

	}
	componentDidMount() {
		this.animateSvg()
	}

	render() {
		return (
			<div className={"Anna " + this.props.appearance}>
				<svg ref="Anna__SVG" className="Anna__SVG" width="100%" height="100%" viewBox="0 0 375 375" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
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
