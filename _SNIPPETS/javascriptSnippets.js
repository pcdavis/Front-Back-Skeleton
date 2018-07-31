


//Great shortcut to use querySelect calls:
var select = function(s){
  return document.querySelector(s)
 }
 var selectAll = function(s){
   return document.querySelectorAll(s)
 }
//Now all you need to do is say var myVar = select('#idName') to get that dom element with id of idName 


// Get a nice 12 hour day of time
const getTime = (date) => {
  return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`
}

//search an array for a matching item's index. In this example I search a cart for any items in the cart array that have the same id, if not, then I search the productsArray to find that product in order to put it in the cart /////
add: ( req, res, next ) => {
  const idToFind = req.query.id;
  let { cart } = req.session.user;

  const index = cartArray.findIndex( cartItem => cartItem.id == idToFind );
  //if index = -1, then findIndex returned nothing matching
  if ( index === -1 ) {
    const itemToAddToCart = productsArray.find( product => product.id == idToFind );

    cart.push( itemToAddToCart ); // add the item to the cart
    req.session.user.total += itemToAddToCart.price; // update the total cost of the cart
  }

  res.status(200).send( req.session.user );
}


//Restrict user posts/puts to server using filter ///
const notAllowed = [ 'poo', 'butt' ];
//controller middleware object below
module.exports = function( req, res, next ) { 
if(req.method === 'POST' || req.method === 'PUT'){ // only run the while loop if it's a post or put, which are the only ways the user could add bad text
//the .find method will run as long as it is true - if no bad words found, it will evaluate to false, and while will skip to next;    
while ( notAllowed.find( word => req.body.text.includes(word) ) ) {
      const badWord = notAllowed.find( word => req.body.text.includes(word) );
      req.body.text = req.body.text.replace( badWord, '*'.repeat( badWord.length ) );
  }//end of code to execute while notAllowed.find is true
}
next();
};

// ARRAYS - add or remove from exising array //
switch(action.type){
case ADD_CHORE:  
    var newChore = action.payload;
    var newChores = [...state.chores, newChore] //state.chores is an array
    return {
        chores: newChores
        }

case REMOVE_CHORE:
    var targetChore = action.payload;
    var newChores = [...state.chores];

    newChores = newChores.splice(indexOf(targetChore), 1);
    return {
        chores: newChores
        }
    }

    
// INPUT FIELD---------//Set the state from the onChange field - eliminate the need for separate handleChange function. Plus it is easier to grab the value of the input field
<input 
value={this.state.term}
onChange={event => this.setState({term: event.target.value})} />;
<h1>{this.state.term}</h1> // use this to see on the page if it is working

//Another way to capture value with on handler:

handleChange(event){
  let name = event.target.name;
  let value = event.target.value;
  this.setState({ [name]: value})
  console.log(name, value)
}

<input value={this.state.name} name="title" type="text" onChange={this.handleChange} />
      <input value={this.state.

//Trick to solve Type is undefined error//
//This  it may be because the computer attempts to render some item that is waiting on an api call or a callback. Use this code to prevent it:
if(!data){
  return <div>Loading...</div>
}

///Disable a button based on state of something//
<button
      disabled={pastValue.length === 0} 
      onClick={ () => undo() }
  > Undo </button>
///

//  SHOW OR HIDE REACT ELEMENTS: OPTIONS ///
// OPTION 1: Render or Not Render a DOM element  ///
      var partial;
      if(this.props.gender === "male"){
          itemsToDisplay = <div>Hello Mr. Jones</div>
      } else {
          itemsToDisplay = <div>Hello Mrs. Jones</div>
      }
      return (
          <div>
              {itemsToDisplay}
         </div>
      );
// OPTION 2: Use CSS to toggle visibility of DOM elements  //
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
// OPTION 2 - alt using state: Use CSS to toggle visibility of DOM elements  //

      if(this.state.isVisible){
          firstDiv = "displayNone"; // in the css .displayNone { display: none}
      }  else{
          secondDiv = "displayNone";
      }
      return (
          <div>
              <div>Greeting</div>
              <div className={firstDiv}>Hello Mrs. Jones</div>
              <div className={secondDiv}>Hello Mr. Jones</div>
          </div>
      );
//In the component's css you control the visibility of the divs
      component.css 
      .displayNone{
          display: none;
      }


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

//CoreUI example for showing / hiding conditional rendering of aside TabPanel content
//In this example, The Tab component has three nav tabs that control what appears below in the tabpanel content area. Everything is controlled by this.state.activeTab.

class Aside extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }
//toggle method changes the value of activeTab to clicked tab
toggle(tab) {
  if (this.state.activeTab !== tab) {
    this.setState({
      activeTab: tab
    });
  }
}

//Here is Nav link to the third tab:
render() {
  return (
    <aside className="aside-menu">
<Nav tabs> 
//not showing the first two to save space in this example
<NavItem>
  <NavLink className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}> //changes this.state.activeTab to '3'
      <i className="icon-settings"></i>
  </NavLink>
</NavItem>
//after the nav section, the tabcontent section is coded with all three TabPanes coded in sequence. I'm not showing the first two for space. Reactstrap takes care of showing / hiding the TabPane contents based on this.state.activeTab.
<TabContent activeTab={this.state.activeTab}>
<TabPane tabId="3" className="p-3">  //If this.state.activeTab === 3, Reactstrap adds class "active" when rendered in html. IMPORTANT - the .active class has display: block, while anything without the class "active" has display: none;
          <h6>Settings</h6>

//removed a lot of the content for space.
          <div className="aside-options">
            <div className="clearfix mt-3">
              <small><b>Option 4</b></small>
              <Label className="switch switch-text switch-pill switch-success switch-sm float-right">
                <Input type="checkbox" className="switch-input" defaultChecked/>
                <span className="switch-label" data-on="On" data-off="Off"></span>
                <span className="switch-handle"></span>
              </Label>
            </div>
          </div>

        </TabPane>
</TabContent>










      //Array.from method----------------------------
      Array.from([1, 2, 3], x => x + x);      
      // [2, 4, 6]

//Random number generator with a max limit  ///////
function randomNumber(max){
  return Math.floor(Math.random() * max ) + 1;
} 

//Generate a random image from 10 images in your assets file onto the page//
function generateHTMl(){
  return `<img src="./assets/picture${randomNumber(10)}.jpg" />`
}

// create an array of arrays out of thin air and populate the arrays with things from other functions.
const arrayOfArraysContainingTwoItems = Array.from({ length:50 }, ()=> 
[randomNumber(4), randomNumber(4)] );

// create random masonary grid using above code//
function generateHTMl([h,v]){
  return `
  <div class="item h${h} v${v}" >
  <img src="./assets/picture${randomNumber(10)}.jpg" />
  <div class="item__overlay">
      <button>View -></button>
  </div>
  </div>
  `
}
// Get the src of an image from a click event //////
function handleClick(e) {
    const src = e.currentTarget.querySelector('img').src;
    overlayImage.src = src;
    overlay.classList.add('open');
  }

  // handle change and submit with state ------------------
  // the key is to use name property in the input field -------------
  class App extends Component {
      constructor(props) {
        super(props);
        this.state = { title: '', description: '', name:'', pw:'', todos: []};
      }
    
      componentWillMount() {
        axios.get('/api/todos').then(response => {
          console.log(response.data)
          this.props.setTodos(response.data);
        })
      }
    
      handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
    
        this.setState({
          [name]: value
        });
      }
    
      handleSubmit() {
        console.log('submitted')
        axios.post('/api/todo', {title: this.state.title, description: this.state.description}).then(resp => {
          console.log(resp);
          this.setState({ todos: resp.data });
        });
      }
      <div className="input-group">
      <label htmlFor="">Name</label>
      <input name="name" type='text' onChange={(e) => this.handleChange(e)} />
    </div>
    <div className="input-group">
      <label htmlFor="">Password</label>
      <input name="pw" type='text' onChange={(e) => this.handleChange(e)} />
    </div>
    <button onClick={() => this.login()}>Login</button>