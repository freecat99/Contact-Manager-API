const asyncHandler = require('express-async-handler'); 
const bcrpyt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("username and password necessary")
    }
    
    const user = await User.findOne({email});
    if(!user){
        res.status(404);
        throw new Error("User not found, register instead!");
    }
    if(user && (await bcrpyt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user:{
                username: user.username,
                email: user.email,
                id : user.id
            }
        }, process.env.ACCESS_TOKEN, {expiresIn: '48h'});
        res.status(200).json({ accessToken });
    }
    else{
        res.status(401);
        throw new Error("password invalid!")
    }
});

//@desc See Current User
//@route GET /api/users/current
//@access public

const currentUser = asyncHandler(async(req, res)=>{
    res.json(req.user);
    
});

module.exports = {registerUser, loginUser, currentUser}