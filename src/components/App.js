import React, { Component } from 'react';
import Button from "./Button";
import Cta from "./Cta";
// import Panel from "./Panel";
import Anna from './Anna';
import './App.scss';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			appearance: 'center',
			currentStep: 0
		}
		this.changeAppearance = this.changeAppearance.bind(this);
		this.changeStep = this.changeStep.bind(this);
	}

	changeStep(value) {
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
				<div className="Button__group">
					{this.appearance.map(x=>
						<Button key={x.name} appearance={x.name} disabled={x.disabled} changeAppearance={(e) => this.changeAppearance(x.name, e)}></Button>
					)}
				</div>
				<Cta ref='primaryCta' cssClass={`primaryCta ${this.state.appearance === 'full' ? 'show' : ''}`} btnText='weiter' changeStep={(e) => this.changeStep()}></Cta>
				<Anna appearance={this.state.appearance} currentStep={`step_${this.state.currentStep}`} feColorMatrix={this.colorMatrix[this.state.currentStep].feColorMatrix}></Anna>
        {
				// 	<div className="App-header">
        //   <h2 className="App-heading">Welcome to React!!!</h2>
        //   <Button label="Klick mich!"></Button>
        // </div>
				//  Important note, this is not HTML.
				// 	So the attributes you set here are used as props to render the component.
				// 	That means "title" is not like a title-attribute in HMTL and can be placed/rendered out into another element.
				//
				// <button onClick={this.changeName}>Verändere den Namen</button>
				// <h2> Hallo {this.state.name}</h2>
				// <p>{this.state.name.length}</p>
				// <button onClick={this.changeCounter}>Count up</button>
				// <p>Aktueller counter: {this.state.counter}</p>
				// <Panel heading="first titel" content="this is the first content"></Panel>
				// <Panel heading="second titel">
				// 	<Button label="Ich bin ein props.children"></Button>
				// </Panel>
				}
      </div>

    );
  }
}

export default App;
