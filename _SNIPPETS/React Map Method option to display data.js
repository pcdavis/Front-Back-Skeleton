import React, { Component } from "../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react";
import { users } from './fakedata' // look at fakedata.js to see how to pull in fake data on the front end

class App extends Component {
  render() {

    //2 ways to render data into the component - two ways using a function expression to store the array objects in a const. 1 way that invokes a function down in the jsx
    //First way is to do a simple map of an array and store the results in a const
    //Second way is to use func expression that uses a callback instead of using the standard inline .map( function( item )) syntax. Create the callback .map( callback ) outside / down below the export default to keep the code base cleaner

    const displayUsers = users.map( usersMap ) // Create a function expression that stores the array of data that comes back from a callback function
    
    return (
      <div className="App">

      {users[0].name}
      <MyCarousel />

      
        <Card>
          <CardImage
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button href="#">Button</Button>
          </CardBody>
          <div>
            {displayUsers}
            </div>
        </Card>
      </div>
    );
  }
}

export default App;

function usersMap(user,i,array){
  return 
}

function helper(){

}