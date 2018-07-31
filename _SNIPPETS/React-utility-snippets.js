
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

//  SHOW OR HIDE REACT ELEMENTS: 2 OPTIONS ///////////////////////////
// OPTION 1: Render or Not Render a DOM element  ////////////////////
        var partial;
        if(this.props.gender === "male"){
            partial = <div>Hello Mr. Jones</div>
        } else {
            partial = <div>Hello Mrs. Jones</div>
        }
        return (
            <div>
                {partial}
           </div>
        );
// OPTION 2: Use CSS to toggle visibility of DOM elements  ////////////////////
    var classMale = "";
    var classFemale = "";
        if(this.props.gender === "male"){
            classFemale = "displayNone"; // in the css .displayNone { display: none}
        }  else{
            classMale = "displayNone";
        }
        return (
            <div>
                <div>Greeting</div>
                <div className={classFemale}>Hello Mrs. Jones</div>
                <div className={classMale}>Hello Mr. Jones</div>
            </div>
        );

