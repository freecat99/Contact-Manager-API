const asyncHandler = require('express-async-handler'); 
const bcrpyt = require('bcrypt');
const User = require('../models/userModels');

//@desc Register New User
//@route POST /api/users/register
//@access public

const registerUser = asyncHandler(async(req, res)=>{
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("Invalid username, email, or password");
    }

    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("email already registered");
    }

    const hashedPass = await bcrpyt.hash(password, 9);
    console.log(username, hashedPass);

    const user = await User.create({
        username, email, password:hashedPass
    })
    console.log(`${user} created`);

    if(user){
        res.status(201).json({_id: user.id, email: user.email});
    }else{
        res.status(400);
        throw new Error("User data not valid");
    }

    res.json({message:"registered the user"});
});

//@desc Login User
//@route POST /api/users/login
//@access public

const loginUser = asyncHandler(async(req, res)=>{
    res.json({message:"logged in user"});
});

//@desc See Current User
//@route GET /api/users/current
//@access public

const currentUser = asyncHandler(async(req, res)=>{
    res.json({message:"current user information"});
});

module.exports = {registerUser, loginUser, currentUser}