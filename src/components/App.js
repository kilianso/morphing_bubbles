import React, { Component } from 'react';
import Anna from './Anna';
import AnnaOverlay from "./AnnaOverlay";
import StateButton from "./StateButton";
import Cta from "./Cta";

// import Panel from "./Panel";

import './App.scss';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			appearance: 'center',
			currentStep: 0,
			annaOverlay: false
		}
		this.changeAppearance = this.changeAppearance.bind(this);
		this.changeStep = this.changeStep.bind(this);
		this.changeOverlay = this.changeOverlay.bind(this);
	}

	changeStep(value) {
		alert(value)
		if (this.state.currentStep === 3) {
			this.setState({
				currentStep: 0
			})
		}else{
			this.setState({
				currentStep: this.state.currentStep + 1
			})
		}
	}

	changeAppearance(value) {
		this.setState({
			appearance: value
		})
	}

	changeOverlay(value) {
		if (['passive', 'notify', 'embed'].indexOf(value) >= 0) {
			this.setState({
				annaOverlay: (this.state.annaOverlay === false ? true : false)
			})
		}else{
			this.setState({
				annaOverlay: false
			})
		}
	}

	colorMatrix = [
		{name: 'yellow', feColorMatrix: '0 0 0 0 1   0 0 0 0 0.8   0 0 0 0 0  0 0 0 0.25 0'},
		{name: 'red', feColorMatrix: '0 0 0 0 0.894117647   0 0 0 0 0.0352941176   0 0 0 0 0.392156863  0 0 0 0.25 0'},
		{name: 'blue', feColorMatrix: '0 0 0 0 0.423529412   0 0 0 0 0.796078431   0 0 0 0 0.874509804  0 0 0 0.25 0'},
		{name: 'green', feColorMatrix: '0 0 0 0 0.176470588   0 0 0 0 0.733333333   0 0 0 0 0.560784314  0 0 0 0.25 0'},
	]

	appearance = [
		{name:'splash', disabled: false},
		{name:'center', disabled: false},
		{name:'full', disabled: false},
		{name: 'passive', disabled: false},
		{name:'notify', disabled: true},
		{name: 'embed', disabled: true},
	];

  render() {
    return (
      <div className="App">
				<div className="StateButton__group">
					{this.appearance.map(x=>
						<StateButton key={x.name} appearance={x.name} disabled={x.disabled} changeAppearance={(e) => this.changeAppearance(x.name, e)}></StateButton>
					)}
				</div>
				<Anna changeOverlay={(e) => this.changeOverlay(this.state.appearance, e)} appearance={this.state.appearance} currentStep={`step_${this.state.currentStep}`} feColorMatrix={this.colorMatrix[this.state.currentStep].feColorMatrix}></Anna>
				{/* No conditional output for now. Can't animate fly-in of the button when it's not there already*/}
				<Cta cssClass={`cta primary full__cta ${this.state.appearance === 'full' ? 'is--visible' : ''} ${this.state.currentStep === 0 ? 'step_0' : ''}`} btnText='weiter' changeStep={() => this.changeStep()}></Cta>
				<AnnaOverlay cssClass={this.state.annaOverlay ? 'is--visible' : ''} heading="Anna" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.">
					<Cta cssClass="cta primary annaOverlay__cta" btnText='Primary call to action'></Cta>
					<Cta cssClass="cta teritary annaOverlay__cta" btnText='Teritary call to action'></Cta>
					<Cta cssClass="cta teritary annaOverlay__cta" btnText='Teritary call to action'></Cta>
				</AnnaOverlay>
      </div>

    );
  }
}

export default App;
