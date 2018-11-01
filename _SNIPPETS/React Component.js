import React, {Component, Fragment} from 'react'; //Fragment is a wrapper used in React that will not add any extra html markup when it is converted into the page's html. Otherwise, you have to use a div to hold your component's content


class Generic extends Component {
    constructor(props){
        super(props);
        this.state = {
                        counter: 2
                    }//End of state   
      }//End of constructor

    render(){

        const {someProp1, someProp2} = this.props;

        return (
            <Fragment>

                <h1> This is the Generic component with {someProp1} and {someProp2} and the counter says {this.state.counter} </h1>

            </Fragment>
        );
    }
}


export default Generic;