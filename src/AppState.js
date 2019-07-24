import React, { Component } from "react";
import TableState from "./TableState";

class AppState extends Component {
	state = {
		characters: [
			{
				name: "Charlie",
				job: "Janitor"
			},
			{
				name: "Mac",
				job: "Bouncer"
			},
			{
				name: "Dee",
				job: "Aspring actress"
			},
			{
				name: "Dennis",
				job: "Bartender"
			}
		]
	};

	removeCharacter = index => {
		// const { characters } = this.state;

		this.setState({
			characters: this.state.characters.filter((character, i) => {
				return i !== index;
			})
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
			</div>
		);
	}
}

export default AppState;
