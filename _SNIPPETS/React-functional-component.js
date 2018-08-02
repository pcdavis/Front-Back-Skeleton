import React from 'react';

//remember - functional components get their data passed in through the props argument. DO NOT USE "THIS.PROPS". No need for 'this'. 

export default function Generic(props){
    return (
        <div>
            <h1> {props.something} </h1>
            </div>
    )
}


// you can also use arrow function and deconstructing a 'greeting' and 'firstName' prop from the component's props. Without the destructuring, you would need to use props.greeting and props.firstName in the return statement.

const Hello = ({greeting, firstName}) => <div>{greeting} {firstName} </div>

//another example with children getting rendered (children are the content that appears between opening and closing tags of the rendered component) example: <Button> I am a child </Button>  

const Button = (props) => <button className="btn">{props.children}</button>

export default Button