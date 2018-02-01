module.exports ={
    //NOTE: The select_all sql call needs to be modified to select from correct table
    getAll: (req,res,next) => {
        const dbInstance = req.app.get('db');

        dbInstance.select_all()
        .then( products => {
            res.status(200).send( products )
            console.log("getAll worked")
            console.log(products)
        }) 
        .catch( err => {res.status(500).send('error with select_all') })
    }
//,
    // getBinList: (req,res,next) => {
    //     const dbInstance = req.app.get('db');
    //     const {query} = req;
    //     const letter = query.letter.toUpperCase();
    //     console.log('query received from req in getBinList =')
    //     console.log(letter)
    //     dbInstance.get_bin(letter)
    //     .then( bin => {
    //         res.status(200).send( bin )
    //         console.log("get_bin worked")
    //         console.log( bin )
    //     }) // end of then
    //     .catch( err => {res.status(500).send('error with get_bin') })
    // },
    
    // getBin: (req,res,next) => {
    //     const dbInstance = req.app.get('db');
    //     const {param} = req;
    //     const letter = query.letter.toUpperCase();
    //     console.log('query received from req in getBinList =')
    //     console.log(letter)
    //     dbInstance.get_bin(letter)
    //     .then( bin => {
    //         res.status(200).send( bin )
    //         console.log("get_bin worked")
    //         console.log( bin )
    //     }) // end of then
    //     .catch( err => {res.status(500).send('error with get_bin') })
    // },



};//end exports

