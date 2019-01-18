// Two key articles:
// https://alligator.io/react/new-way-to-handle-events/
// https://reactjs.org/docs/handling-events.html 

// Dealing with binding this.  When a handler is called via onClick in a component - the 'this' will refer to the Class and not the instance of the class. Since the class doesn't have the eventhandler, it throws an error. You have a few options to deal with binding this:

// 1. bind it to this inline:
<Button onClick={this.handleFormOpen.bind(this)} /> 
//  the downside is that React will create a new function everytime the component renders, which can take up compute resources

// 2. Use an arrow function inside the onClick to invoke the handler, which automatically binds 'this' to the class
<Button onClick={(e) => handleFormOpen(e)} />
//  the downside is like above, that React will create a new function everytime the component renders, which can take up compute resources

// 3. bind this in the constructor:
this.handleFormOpen = this.handleFormOpen.bind(this) // this goes in the constructor
<Button onClick={this.handleFormOpen} />


// 4. Turn the handler into  and set it to an arrow function -- This is experimental according to React docs
handleFormOpen = ()=> { execute this code.... }
<Button onClick={this.handleFormOpen} />
// IF YOU NEED TO PASS AN ARGUMENT to handleFormOpen, then you have to add another arrow function that takes the argument before passing it to another arrow function where the event info comes in:
  handleEditEvent = (newEvent) => ()=> {
    this.setState({
      selectedEvent: eventToUpdate,
      isOpen: true
    });
  }
  // later in the render...
<Button onClick={handleEditEvent(newEvent)} />

//I beleive the first arrow is to pass the arguments, the second arrow function implicitly passes the event object
handleFormOpen = (id) => (e) => {
    // "this", "e", "id"
  }
//Below is the documentation from facebook react
// Passing Arguments to Event Handlers
// Inside a loop it is common to want to pass an extra parameter to an event handler. For example, if id is the row ID, either of the following would work:

<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
// The above two lines are equivalent, and use arrow functions and Function.prototype.bind respectively.

// In both cases, the e argument representing the React event will be passed as a second argument after the ID. With an arrow function, we have to pass it explicitly, but with bind any further arguments are automatically forwarded.