// Replace Generic item 

const GENERIC_TYPE = 'GENERIC_TYPE'  //these hard code the action.type so that there are no typos when using them in the component. Also, a variable type will throw an error,while a string typo won't

//Set an initial state
const initalState = {
    propName: ''
}

// export default the main reducer. Set its state to initial state - this is an es6 feature - the ability to use a default if no state is available. IMPORTANT TO INCLUDE default state
export default function(state=initialState, action){
    switch(action.type){
        case GENERIC_TYPE:
        console.log("Generic_Type fired")
        console.log(action.payload)
        return Object.assign({},state,{propName: action.payload})

        default: 
        return state
    }
} // end of reducer

//Action Creators
export function genericAction(genericValue){
    return {
        type: GENERIC_TYPE,
        payload: genericValue
    }
}



///Below is an example reducer //--------------------------
// const ADD_CHORE = 'chores/ADD_CHORE';
// const REMOVE_CHORE = 'chores/REMOVE_CHORE';

// export default function reducer(state,action){
//     switch(action.type){
//         case ADD_CHORE:  
//             var newState = {};
//             var newChore = action.payload;
//             var newChores = [...state.chores, newChore]

//             return {
//                 chores: newChores
//             }
//         case REMOVE_CHORE:
//             var newState = {};
//             var targetChore = action.payload;
//             var newChores = [...state.chores];

//             newChores = newChores.splice(indexOf(targetChore), 1);

//             return {
//                 chores: newChores
//             }
        
//         default:
//             return state
//     }
// }

//Another example- ----------------------------

const UPDATE_NAME = "UPDATE_NAME";

const intialState = {
    name: ''
}

export default function( state = intialState, action ){
    switch(action.type){
        case UPDATE_NAME:
        return Object.assign( { }, state, { name: action.payload} );

        default:
        return state;
    }
}

export function deliver_name( newName ){
    return {
        type: UPDATE_NAME,
        payload: newName
    }
}