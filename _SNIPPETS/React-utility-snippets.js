
//Toggle states with onClick------------------
constructor(props) {
    super(props);
    this.state = { fadeIn: true };
    this.toggle = this.toggle.bind(this);
}

<Button color="primary" onClick={this.toggle}>Toggle State of something</Button>

toggle() {
    this.setState({
        fadeIn: !this.state.fadeIn
    });
}


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

//  SHOW OR HIDE REACT ELEMENTS:  ///////////////////////////
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

// OPTION 3: Use ternary inside the { js } to determine whether or not to show children
import React, { Component } from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react'
import './ExpandableBox.css'

export default class ExpandableBox extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            expanded: false 
        }
    }

    handleClickedBox() {
        this.setState({ expanded: !this.state.expanded }) //Trick to change always toggle the state between true/false -- !this.state.prop
    }

    render() {

        let styles = this.state.expanded ? 
            { backgroundColor: this.props.expandedBackgroundColor } : 
            { backgroundColor: this.props.notExpandedBackgroundColor }

        return(
            <div style={ styles } className={ this.state.expanded ? 'expanded' : 'notExpanded' }>
                <div style={ styles } className='boxTitle' onClick={ () => this.handleClickedBox() }>{ this.props.boxTitle }</div>
                { this.state.expanded ? this.props.children : null }
            </div>
        )
    }
} 

//here's the css for expandable box: 
.boxTitle {
    font-size: 1.4em;
}

.notExpanded {
    background-color: #666666;
    border-top: 1px solid black;
    cursor: pointer;
    padding: 3px;
    height: auto;
}

.expanded {
    box-sizing: border-box;
    background-color: gray;
    border-top: 1px solid black;
    cursor: pointer;
    padding: 3px;
    height: auto;
}

//Another way to conditional render
var displayClass1 = ''
var displayClass2 = ''
var displayClass3 = ''

if(this.state.activeTab === '1'){
    displayClass1 = 'active'
    displayClass2 = 'inactive'
    displayClass3 = 'inactive'
} if(this.state.activeTab === '2'){
    displayClass1 = 'inactive'
    displayClass2 = 'active'
    displayClass3 = 'inactive'
} if(this.state.activeTab === '3'){
    displayClass1 = 'inactive'
    displayClass2 = 'inactive'
    displayClass3 = 'active'
}

render(){
    return (
        <TabContentComponent className={displayClass1}>
        <TabContentComponent className={displayClass2}>
        <TabContentComponent className={displayClass3}>
    );
}

Component.css
.active{
    display: block;
}
.inactive{
    display: none;
}