import React, {Component, Fragment} from 'react'; //Fragment is a wrapper used in React that will not add any extra html markup when it is converted into the page's html. Otherwise, you have to use a div to hold your component's content


class Generic extends Component {

    render(){

        const styles = {
            color: "gray",
            backgroundColor: "rebeccapurple"
        } //use this styles object in the jsx below or add inline styles with DOUBLE curly braces for a style object inside of js curly braces
     

        return (
            <div>
              <form style={styles}  > //add styles by passing in a styles object defined above
                <label htmlFor='name'>Name</label>
                <input id="name" type='text' />
                <button style={{border:'2px solid white'}} >Submit</button> 
                </form>
            </div>
        );
    }
}


export default Generic;