//// Get a nice 12 hour day of time
const getTime = (date) => {
    return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`
}

//////search an array for a matching item's index. In this example I search a cart for any items in the cart array that have the same id, if not, then I search the productsArray to find that product in order to put it in the cart /////
add: ( req, res, next ) => {
    const idToFind = req.queryid;
    let { cart } = req.session.user;

    const index = cartArray.findIndex( cartItem => cartItem.id == idToFind );
    //if index = -1, then findIndex returned nothing matching
    if ( index === -1 ) {
      const itemToAddToCart = productsArray.find( product => product.id == idToFind );

      cart.push( itemToAddToCart ); // add the item to the cart
      req.session.user.total += itemToAddToCart.price; // update the total cost of the cart
    }

    res.status(200).send( req.session.user );
  }
  ////////////////////////////////////////////////////////////////

  //Restrict user posts/puts to server using filter ///////////
const notAllowed = [ 'poo', 'butt' ];
//controller middleware object below
module.exports = function( req, res, next ) { 
if(req.method === 'POST' || req.method === 'PUT'){ // only run the while loop if it's a post or put, which are the only ways the user could add bad text
//the .find method will run as long as it is true - if no bad words found, it will evaluate to false, and while will skip to next;    
while ( notAllowed.find( word => req.body.text.includes(word) ) ) {
        const badWord = notAllowed.find( word => req.body.text.includes(word) );
        req.body.text = req.body.text.replace( badWord, '*'.repeat( badWord.length ) );
    }//end of code to execute while notAllowed.find is true
  }
  next();
};