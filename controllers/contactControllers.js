const asyncHandler = require("express-async-handler"); 

//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async(req, res)=>{
    res.status(200).json({message : "get all contacts"})
});

//@desc Post a contacts
//@route Post /api/contacts
//@access public

const postContact = asyncHandler(async(req, res)=>{
    const {name, email, phone} = req.body;
    console.log(name, email, phone)

    if(!name || !email || !phone){
        res.status(400);
        throw new Error("all details mandatory")
    }

    res.status(201).json({message:"created contact"})
});

//@desc Get a contacts
//@route Get /api/contacts:id
//@access public

const getContact = asyncHandler(async(req, res)=>{
    res.status(200).json({message: `got contact for ${req.params.id}`})
});

//@desc Update a contacts
//@route Update /api/contacts:id
//@access public

const updateContact = asyncHandler(async(req, res)=>{
    console.log(req);
    res.status(200).json({message: `updated contact for ${req.params.id}`})
});

//@desc Delete a contacts
//@route Delete /api/contacts:id
//@access public

const deleteContact = asyncHandler(async(req, res)=>{
    res.status(200).json({message: `updated contact for ${req.params.id}`})
});

module.exports = {getContacts, postContact, getContact, updateContact, deleteContact}