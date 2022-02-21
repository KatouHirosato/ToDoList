import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={characters:[]}
    }

    removeCharacter = (index) => {
        const { characters } = this.state;    
        this.setState({
	    characters:characters.filter(function(character, i){return i !== index;})
	});
    }

    handleSubmitMethod=(character)=>{
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        return (
		<div className="container">
		 <Form handleSubmitProp={this.handleSubmitMethod} />
                 <Table characterData={this.state.characters}
                        removeCharacter={this.removeCharacter}
	         />
		</div>
        );
    }
}
export default App;
