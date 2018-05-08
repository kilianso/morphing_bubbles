import React, { Component } from 'react';
import Button from "./Button";
// import Panel from "./Panel";
import Anna from './Anna';
import './App.scss';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			appearance: 'center'
		}
		this.changeAppearance = this.changeAppearance.bind(this);
	}
	changeAppearance(value) {
		this.setState({
			appearance: value
		})
	}

  render() {
    return (
      <div className="App">
				<div className="Button__group">
					<Button appearance="center" changer={(e) => this.changeAppearance('center', e)}></Button>
					<Button appearance="splash" changer={(e) => this.changeAppearance('splash', e)}></Button>
					<Button appearance="full" changer={(e) => this.changeAppearance('full', e)} disabled="true"></Button>
					<Button appearance="passive" changer={(e) => this.changeAppearance('passive', e)} disabled="true"></Button>
					<Button appearance="notify" changer={(e) => this.changeAppearance('notify', e)} disabled="true"></Button>
				</div>
				<Anna appearance={this.state.appearance}></Anna>
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
