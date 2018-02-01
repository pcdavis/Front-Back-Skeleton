module.exports = function( req, res, next ) {
  const { session } = req;
    console.log(req.session)
    if ( !session.user ) {
      session.user = { username: '', cart: [], total: 0.00 };
    } 
    
    console.log("here's req session after user key created")
    console.log(req.session)
  next();
};