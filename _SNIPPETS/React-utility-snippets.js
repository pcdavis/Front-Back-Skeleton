
//INPUT FIELD/////Set the state from the onChange field - eliminate the need for separate handleChange function. Plus it is easier to grab the value of the input field///////////
<input 
value={this.state.term}
onChange={event => this.setState({term: event.target.value})} />;
<h1>{this.state.term}</h1> // use this to see on the page if it is working

//Trick to solve Type is undefined error////////////////////
////This  it may be because the computer attempts to render some item that is waiting on an api call or a callback. Use this code to prevent it:
if(!data){
    return <div>Loading...</div>
}

/////Disable a button based on state of something//////////
<button
        disabled={pastValue.length === 0} 
        onClick={ () => undo() }
    > Undo </button>
/////////////////

