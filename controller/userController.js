const Users = require('../model/userModel');

exports.getUsers = async (req, res)=>{
    try{
        let [users] = await Users.fatchUsers();
        res.status(200).json(users)
    }catch(e){
        console.log(e)
    }
}
exports.addUser = async (req, res)=>{
    try{
        let [user] = await Users.insertUsers(req.body.name, req.body.cast, req.body.number);
        res.status(201).json(user)
    }catch(e){
        console.log(e)
    }
}
exports.updateUser = async (req, res) =>{
    try{
        let [user] = await Users.updateUser(req.body.id, req.body.name, req.body.cast, req.body.number)
        res.status(201).json(user)
    }catch(e){
        console.log(e)
    }
}
exports.deleteUser = async (req, res) =>{
    try{
        let [user] = await Users.deleteUser(req.body.id)
        res.status(201).json(user)
    }catch(e){
        console.log(e)
    }
}