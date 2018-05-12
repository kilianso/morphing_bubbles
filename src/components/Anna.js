import React, {Component} from 'react';
import {TweenMax,TimelineMax,Sine} from 'gsap';
import "./Anna.scss";

class Anna extends Component {
	animateSvg(){
		// eslint-disable-next-line
		const blob1 = createBlob({
		  element: document.querySelector("#yellow__path"),
		  numPoints: 10,
		  centerX: 490,
		  centerY: 490,
		  minRadius: 500,
		  maxRadius: 600,
		  minDuration: 1,
		  maxDuration: 2
		});
		// eslint-disable-next-line
		const blob2 = createBlob({
		  element: document.querySelector("#red__path"),
		  numPoints: 10,
		  centerX: 500,
		  centerY: 500,
		  minRadius: 490,
		  maxRadius: 590,
		  minDuration: 2,
		  maxDuration: 3
		});
		// eslint-disable-next-line
		const blob3 = createBlob({
		  element: document.querySelector("#blue__path"),
		  numPoints: 10,
		  centerX: 510,
		  centerY: 510,
		  minRadius: 500,
		  maxRadius: 600,
		  minDuration: 1.5,
		  maxDuration: 2.5
		});

		function createBlob(options) {

		  let points = [];
		  let path = options.element;
		  let slice = (Math.PI * 2) / options.numPoints;
		  let startAngle = random(Math.PI * 2);

		  let tl = new TimelineMax({
		    onUpdate: update
		  });

		  for (let i = 0; i < options.numPoints; i++) {

		    let angle = startAngle + i * slice;
		    let duration = random(options.minDuration, options.maxDuration);

		    let point = {
		      x: options.centerX + Math.cos(angle) * options.minRadius,
		      y: options.centerY + Math.sin(angle) * options.minRadius
		    };

		    let tween = TweenMax.to(point, duration, {
		      x: options.centerX + Math.cos(angle) * options.maxRadius,
		      y: options.centerY + Math.sin(angle) * options.maxRadius,
		      repeat: -1,
		      yoyo: true,
		      ease: Sine.easeInOut
		    });

		    tl.add(tween, -random(duration));
		    points.push(point);
		  }

		  options.tl = tl;
		  options.points = points;

		  function update() {
		    path.setAttribute("d", cardinal(points, true, 1));
		  }

		  return options;
		}

		// Cardinal spline - a uniform Catmull-Rom spline with a tension option
		function cardinal(data, closed, tension) {

		  if (data.length < 1) return "M0 0";
		  if (tension == null) tension = 1;

		  let size = data.length - (closed ? 0 : 1);
		  let path = "M" + data[0].x + " " + data[0].y + " C";

		  for (let i = 0; i < size; i++) {

		    let p0, p1, p2, p3;

		    if (closed) {
		      p0 = data[(i - 1 + size) % size];
		      p1 = data[i];
		      p2 = data[(i + 1) % size];
		      p3 = data[(i + 2) % size];

		    } else {
		      p0 = i === 0 ? data[0] : data[i - 1];
		      p1 = data[i];
		      p2 = data[i + 1];
		      p3 = i === size - 1 ? p2 : data[i + 2];
		    }

		    let x1 = p1.x + (p2.x - p0.x) / 6 * tension;
		    let y1 = p1.y + (p2.y - p0.y) / 6 * tension;

		    let x2 = p2.x - (p3.x - p1.x) / 6 * tension;
		    let y2 = p2.y - (p3.y - p1.y) / 6 * tension;

		    path += " " + x1 + " " + y1 + " " + x2 + " " + y2 + " " + p2.x + " " + p2.y;
		  }

		  return closed ? path + "z" : path;
		}

		function random(min, max) {
		  if (max == null) { max = min; min = 0; }
		  if (min > max) { let tmp = min; min = max; max = tmp; }
		  return min + (max - min) * Math.random();
		}
	}

	// just testing if TweenMax is performing better than regular CSS class toggles
	// .. it does not

	// scale(){
	// 	TweenMax.to('#Anna__SVG', 1, {
	// 			ease: Sine.easeOut,
	// 			scaleX: 2,
	// 			scaleY: 2,
	// 	});
	// }

	componentDidMount() {
		this.animateSvg()
	}

	render() {
		return (
			<div className={"Anna " + this.props.appearance}>
				{/*<button onClick={this.scale}>scale</button>*/}
				<svg ref="Anna__SVG" className="Anna__SVG" id="Anna__SVG" width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
					<defs>
		        // Yellow bubble
						<g className="yellow__bubble">
			        <path id="yellow__path" />
			        <filter x="-18.9%" y="-10.4%" width="137.8%" height="141.5%" filterUnits="objectBoundingBox" id="yellow__filter">
			          <feOffset dx={0} dy={20} in="SourceAlpha" result="shadowOffsetOuter1" />
			          <feGaussianBlur stdDeviation={10} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
			          <feColorMatrix values="0 0 0 0 1   0 0 0 0 0.8   0 0 0 0 0  0 0 0 0.25 0" type="matrix" in="shadowBlurOuter1" />
			        </filter>
						</g>
		        // Red bubble
						<g className="red__bubble">
			        <path id="red__path" />
			        <filter x="-22.6%" y="-11.3%" width="145.2%" height="145.2%" filterUnits="objectBoundingBox" id="red__filter">
			          <feOffset dx={0} dy={20} in="SourceAlpha" result="shadowOffsetOuter1" />
			          <feGaussianBlur stdDeviation={10} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
			          <feColorMatrix values="0 0 0 0 0.894117647   0 0 0 0 0.0352941176   0 0 0 0 0.392156863  0 0 0 0.25 0" type="matrix" in="shadowBlurOuter1" />
			        </filter>
						</g>
		        // Blue bubble
						<g className="blue__bubble">
			        <path id="blue__path" />
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
