//This component uses both state and action items from the reducer and loads content in componentDidMount with an action from reducer and then mapping the resulting state object to create child Components from the array

import React, { Component } from "react";
import "./ComponentName.css";
import {connect} from 'react-redux'
//Import other needed components that get displayed in this component
import Swag from './somepath/Swag';
import {getSwag, actionCreator1, actionCreator2} from './ducks/zample-router.js'; // import action creators that get used as arguments in connect, which makes them available as props 


class ComponentName extends Component {
//Use componentDidMount to immediately fill the view with swag/items from an axios call to the server|database - the reducer sets the state in the switch with Object.assign({}, state, { swag: payload}) which is an array of swag/item objects that can be mapped in the render and displayed in the return
componentDidMount() {
    const { getSwag } = this.props; 
    getSwag(); //This goes to reducer and makes call to server/database to get swag/items to display
  }

  render() {
    const {getSwag, actionCreator1, actionCreator2, stateItem1, stateItem2, swag} = this.props; //This brings any state and action items needed in from the invocation of connect
    console.log(this.props) // a good way to check if props contain the items you expect
    //map the getSwag items call from componentDidMount
    const swagComponents = swag.map( swag => (
        <Swag key={ swag.id } title={ swag.title } price={ swag.price } id={ swag.id } />
      ));
  //In the return jsx, place the array swagComponents that you created from the map process
    return (
      <div className="wrapper">
        <section className="someClassName">
          <h1 className="someClassName__stateProp">{ stateItem1 }</h1>

            <div id="Shop__swagChild">
              { swagComponents }
            </div>

          <div className="someClassName__actions">
            <button
              className="class_for_action_item"
              onClick={ () => actionCreator1(payload_value) } // invoke the action creator with a payload value
            >
              Some tile for action
            </button>
            <br />
            <button
              className="some_button"
              disabled={ stateItem2 ===true } // Use some test of state to determine if the button is disabled
              onClick={ actionCreator2 }
            >
              Save
            </button>
         </div>
        </section>
      </div> //end wrapper
    );
}//end of render
}//end of component

let actions = {
    actionCreator1: actionCreator1, 
    actionCreator2: actionCreator2
}
function mapStateToProps(state){
  return state // don't have to use the whole state object. You can choose parts
}

let insAndOuts = connect(mapStateToProps, actions); // when connect is invoked, it takes state and actions and makes them available to subscribe or do actions

export default insAndOuts(App);
