//This is an example of a component that ONLY uses an Action Creator from the Redux Reducer to make a call to get an array of swag objects that render maps to a bunch of <Swag /> objects that get displayed. There are NO STATE subscriptions in this example. 
import React, { Component } from "react";
import './Shop.css';
//Import other needed components that get displayed in this component
import Swag from './Swag/Swag';
//Import Redux's connect
import { connect } from "react-redux";
//Import Action Creator Functions from the Reducer. Connect uses this function as an argument and RETURNS IT as a prop that must be extracted below in the render.
import { getSwag } from '../../ducks/zample-reducer';
//Create the Class/Component
class Shop extends Component {
  //Use componentDidMount to immediately make a call to the getSwag action in the reducer for items to display
  componentDidMount() {
    const { getSwag } = this.props; // same as writing const getSwag = this.props.getSwag. This.prop comes from connect
    getSwag();
  }
  
  render() {
    //deconstruct this.props to get any needed state objects
    const { swag } = this.props;
    //map the state object's swag array to create a bunch of <Swag /> components to show on screen 
    const swagComponents = swag.map( swag => (
      <Swag key={ swag.id } title={ swag.title } price={ swag.price } id={ swag.id } />
    ));
//In the return jsx, place the array swagComponents that you created from the map process
    return (

          <div id="Shop__swagParent">
            <div id="Shop__swagChild">
              { swagComponents }
            </div>
          </div>

    )
  }
}
//
export default connect( state => state, { getSwag } )( NameOfComponent );


