import React, { Component } from "react";
import TableState from "./TableState";
import Form from "./Form";

class AppState extends Component {
	render() {
		// const { characters } = this.state;
		return (
			<div className="container">
				<TableState
					characterData={this.state.characters}
					removeCharacter={this.removeCharacter}
				/>
				<Form />
			</div>
		);
	}
}

export default AppState;
