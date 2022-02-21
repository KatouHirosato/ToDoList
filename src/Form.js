import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState ={What:'',
			    When:'',};
        this.state=this.initialState;
    }
    
    handleChangeWhat=(event)=>{
        this.setState({What:event.target.value});
    }
    handleChangeWhen=(event)=>{
        this.setState({When:event.target.value});
    }
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.handleSubmitProp(this.state);
        this.setState(this.initialState);
    }

    render() {
        return (
		<form onSubmit={this.onFormSubmit}>
                <label htmlFor="What">What do I have to do?</label>
                <input 
                    type="text" 
                    name="What" 
                    id="What"
                    value={this.state.What} 
                    onChange={this.handleChangeWhat} />
		<label htmlFor="When">Priority(Input any integer.)</label>
                <input 
                    type="number" 
                    name="When"
                    id="When"
                    value={this.state.When} 
                    onChange={this.handleChangeWhen} />
                <button type="submit">Add</button>
            </form>
        );
    }
}export default Form;
