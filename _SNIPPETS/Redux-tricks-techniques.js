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



// When the app starts and any states are not yet populated - for example, BookDetail component needs the user to have clicked on a book in order to fill the state of the reducer's state.selected_book, which is what BookDetail component is subscribing to, here's a way to prevent an error being thrown - in the render method. NOTE: the if statement is in the render method, which means it will check if true and return the first div if true, else it will return the stuff in the return statement below it.

class BookDetail extends Component {
    render(){
        if (!this.props.book) {
           return <div> Select a book to see its contents </div>
        return(
            <div>
                {this.props.book}
            </div>
        );
    }
}
function mapStateToProps(state){
    book: state.selected_book  // this is the state that BookDetail component is subscribing to
};