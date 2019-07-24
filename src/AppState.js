import React, { Component } from "react";
import TableState from "./TableState";
import Form from "./Form";

class AppState extends Component {
	state = {
		characters: []
	};

	removeCharacter = index => {
		const { characters } = this.state;
		this.setState({
			characters: characters.filter((character, i) => {
				return i !== index;
			})
		});
	};

	handleSubmit = character => {
		this.setState({
			characters: [...this.state.characters, character]
		});
	};

	render() {
		// const { characters } = this.state;
		return (
			<div className="container">
				<TableState
					characterData={this.state.characters}
					removeCharacter={this.removeCharacter}
				/>
				<Form handleSubmit={this.handleSubmit} />
			</div>
		);
	}
}

export default AppState;
