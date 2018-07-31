//  Reducer - Add or remove an item from the state of an array----------------------------
export default function reducer(state,action){
    switch(action.type){
        case ADD_CHORE:  
            var newChore = action.payload;
            var newChores = [...state.chores, newChore]
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