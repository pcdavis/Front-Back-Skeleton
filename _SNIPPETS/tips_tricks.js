// If you want to extract the object out of the array that comes back from the server
1. change the .send(response) to .send(response[0]). Now instead of sending an array with a single object, it is sending the object back to the front end

createBroadcast: function(req, res, next) {
    const db = req.app.get('db');
    if(req.user){
        const broadcastObj = req.body.broadcastObj;
        let broadcast_code = broadcastObj.broadcast_code;
        let stack_id = broadcastObj.stack_id;
        const user_id = req.user.user_id;

        db.sq_createBroadcast([user_id,stack_id,broadcast_code])
        .then( response => {
            res.status(200).send( response[0] )
            console.log("createBroadcast worked",response[0])
        }) 
        .catch( err => {res.status(500).send('error with createBroadcast') })
    } 
    else {
        res.status(401).send("not authorized")
    }
},

Now on the front end you can merge additional key into the object as follows. Note the object returned from server has a key called data which contains the object of info we want. Extract that by placing it in a variable and then tacking on the new key value pair
axios.post('/api/newbroadcast', {broadcastObj}).then( (serverResponse)=> {
    let data = serverResponse.data
    data.broadcast_stack = this.state.theStackContent
    this.props.createBroadcast(data)}).catch(error => console.log(error));

    Dealing with Promises
    The argument that gets passed into the .then( )function is the resolved promise. So here is how to structure your call to use the resolved promise
    axios.post('/api/newbroadcast', {broadcastObj}).then( (serverResponse)=> { do something with the serverResponse which is no longer a promise, but is now data }