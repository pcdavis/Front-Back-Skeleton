const users = require('../models/users');

let id = 1;

module.exports = {
    login: (req,res,next) => {
        const session = req.session;
        const {username, password} = req.body;
        const user = users.find( user => { return user.username === username && user.password===password})
        console.log(user)
        if(user){
            session.user.username = user.username;
            res.status(200).send(user)
        } else {
            res.status(401).send("user not found")            
        }
        },

    register: (req,res,next) => {
        const {session} = req;
        const {username,password} = req.body;
        let newUser = {
            id: id,
            username: username,
            password: password
        }
        id++
        console.log(newUser)
        users.push(newUser)
        session.user.username = username;
        res.status(200).send(session.user)
        },

    signout: (req,res,next) => {
        req.session.destroy();
        console.log(req.session);
        res.status(200).send(req.session);
        },

    getUser: (req,res,next) => {
        const {session} = req;
        console.log("getuser fired")
        console.log(session.user)
        res.status(200).send(session.user);
        }
}