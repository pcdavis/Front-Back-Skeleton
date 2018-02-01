import React from 'react';

//remember - functional components get their data passed in through the props argument. DO NOT USE "THIS.PROPS". No need for 'this'. 

export default function Generic(props){
    return (
        <div>
            <h1> {props.something} </h1>
            </div>
    )
}