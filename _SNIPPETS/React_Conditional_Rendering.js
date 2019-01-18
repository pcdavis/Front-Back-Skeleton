
// Use && to check if some value is true before rendering what comes after the &&
<List horizontal>
          {event.attendees && event.attendees.map( (eachAttendee) => (
              <EventListAttendee key = {eachAttendee.id} attendee = {eachAttendee} />
          ))}
</List>


//Use if / else logic in the render method to determine what gets returned
//An if/else block is the easiest way to solve the problem, but not a good implementation.It works great for simple use cases
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {text: '', inputText: '', mode:'view'};
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSave = this.handleSave.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
    }
    
    handleChange(e) {
      this.setState({ inputText: e.target.value });
    }
    
    handleSave() {
      this.setState({text: this.state.inputText, mode: 'view'});
    }
  
    handleEdit() {
      this.setState({mode: 'edit'});
    }
  }
//Put all the elements and logic in the render() method, which will return one of the appropriate views using if/else logic
  render () {
    if(this.state.mode === 'view') {
      return (
        <div>
          <p>Text: {this.state.text}</p>
          <button onClick={this.handleEdit}>
            Edit
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <p>Text: {this.state.text}</p>
            <input
              onChange={this.handleChange}
              value={this.state.inputText}
            />
          <button onClick={this.handleSave}>
            Save
          </button>
        </div>
      );
    }
}

//---------------------Option 2: ---------------------------------
//xtracting all the conditional logic to two render methods, one to render the input box and another one to render the button:
class App extends React.Component {
    // …
    
    renderInputField() {
      if(this.state.mode === 'view') {
        return <div></div>;
      } else {
        return (
            <p>
              <input
                onChange={this.handleChange}
                value={this.state.inputText}
              />
            </p>
        );
      }
    }
    
    renderButton() {
      if(this.state.mode === 'view') {
        return (
            <button onClick={this.handleEdit}>
              Edit
            </button>
        );
      } else {
        return (
            <button onClick={this.handleSave}>
              Save
            </button>
        );
      }
    }
  
    render () {
      return (
        <div>
          <p>Text: {this.state.text}</p>
          {this.renderInputField()} //Notice that the method renderInputField returns an empty div element when the app is in view mode.


          {this.renderButton()}
        </div>
      );
    }
  }

  //-------------------------Option 3 -----------------------------------------
  //If you want to hide a component, you can make its render method return null, there’s no need to render an empty (and different) element as a placeholder.
//One important thing to keep in mind when returning null is that even though the component doesn’t show up, its lifecycle methods are still fired.
// One advantage of returning null instead of an empty element is that you’ll improve a little bit the performance of your app because React won’t have to unmount the component to replace it.

renderInputField() {
    if(this.state.mode === 'view') {
      return null;
    } else {
      return (
          <p>
            <input
              onChange={this.handleChange}
              value={this.state.inputText}
            />
          </p>
      );
    }
  }

  //---------------------Option 4 Element variables --------------------------------
//   use a variable to store the JSX elements and only initialize it when the condition is true:
renderInputField() {
    let input;
    
    if(this.state.mode !== 'view') {
      input = 
        <p>
          <input
            onChange={this.handleChange}
            value={this.state.inputText} />
        </p>;
    }
      
      return input;
  }
  
  renderButton() {
    let button;
    
    if(this.state.mode === 'view') {
      button =
          <button onClick={this.handleEdit}>
            Edit
          </button>;
    } else {
      button =
          <button onClick={this.handleSave}>
            Save
          </button>;
    }
    
    return button;
  }

  //------------------------------------option 5 Ternary -------------------------------------


  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {text: '', inputText: '', mode:'view'};
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSave = this.handleSave.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
    }
    
    handleChange(e) {
      this.setState({ inputText: e.target.value });
    }
    
    handleSave() {
      this.setState({text: this.state.inputText, mode: 'view'});
    }
  
    handleEdit() {
      this.setState({mode: 'edit'});
    }
    
    render () {
      const view = this.state.mode === 'view';
      
      return (
        <div>
          <p>Text: {this.state.text}</p>
          {/* use the ternary operator to return `null` if the `view` mode is set, or the input field otherwise: */}
          {
            view
            ? null
            : (
              <p>
                <input
                  onChange={this.handleChange}
                  value={this.state.inputText} />
              </p>
            )
          }
          {/* Using a ternary operator, you can declare one component to render either a save or edit button by changing its handler and label correspondingly: */}
          <button
            onClick={
              view 
                ? this.handleEdit 
                : this.handleSave
            }
          >
            {view ? 'Edit' : 'Save'}
          </button>
        </div>
      );
    }
  }

  //The ternary operator has a special case where it can be simplified. When you want to render either something or nothing, you can use the && operator. && doesn’t evaluate the right-hand side expression if just by evaluating the left-hand expression can decide the final result. if the first expression evaluates to false (false && …), it’s not necessary to evaluate the next expression because the result will always be false.

//   If showHeader evaluates to true, the <Header/>component will be returned by the expression. If showHeader evaluates to false, the <Header/>component will be ignored and an empty div will be returned.
  return (
    <div>
        { showHeader && <Header /> }
    </div>
);

//That allows us to use this for the text edit example:
!view && (
    <p>
      <input
        onChange={this.handleChange}
        value={this.state.inputText} />
    </p>
  )
  
  //--------------------------------------Option 6 -------------------------------------
//Create a functional component that uses props for everything it needs
  const SaveComponent = (props) => {
    return (
      <div>
        <p>
          <input
            onChange={props.handleChange}
            value={props.text}
          />
        </p>
        <button onClick={props.handleSave}>
          Save
        </button>
      </div>
    );
  };
//Create another functional component
const EditComponent = (props) => {
    return (
      <button onClick={props.handleEdit}>
        Edit
      </button>
    );
  };
//Add the two functional components to the main component in the render method
render () {
    const view = this.state.mode === 'view';
    
    return (
      <div>
        <p>Text: {this.state.text}</p>
        
        {
          view
            ? <EditComponent handleEdit={this.handleEdit}  />
            : (
              <SaveComponent 
               handleChange={this.handleChange}
               handleSave={this.handleSave}
               text={this.state.inputText}
             />
            )
        } 
      </div>
    );
}

//------------------------------------Option 7 If Components -----------------------------
// Create an If component to do the logic and render

const If = (props) => {
    const condition = props.condition || false;
    const positive = props.then || null;
    const negative = props.else || null;
    
    return condition ? positive : negative;
  };
  
  // …
  
  render () {
      const view = this.state.mode === 'view';
      const editComponent = <EditComponent handleEdit={this.handleEdit}  />;
      const saveComponent = <SaveComponent 
                 handleChange={this.handleChange}
                 handleSave={this.handleSave}
                 text={this.state.inputText}
               />;
      
      return (
        <div>
          <p>Text: {this.state.text}</p>
          <If
            condition={ view }
            then={ editComponent }
            else={ saveComponent }
          />
        </div>
      );
  }


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

//--------------using a ternary to determine which class gets applied to the component ---------------
import './practice_button_css.css'
const practice_button = (props) => {
    return (
    <div>
        <button className={props.primary ? "btn btn-primary" : "btn"} >
            {props.children}
        </button>
    </div>
    )
}
export default practice_button
//Here is the css file:
.btn {
    background-color: blue;
    color: white;
    font-size: 20px;
}

.btn-primary {
    background-color: red;
}

//--------------------------------------------------