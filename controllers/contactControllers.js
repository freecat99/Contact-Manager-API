const asyncHandler = require("express-async-handler"); 
const Contact = require('../models/contactModels');

//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async(req, res)=>{
    const contact = await Contact;  
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact)
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

    const contact = await Contact.create({
        name, email, phone
    });

    res.status(201).json(contact)
});

//@desc Get a contacts
//@route Get /api/contacts:id
//@access public

const getContact = asyncHandler(async(req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact)
});

//@desc Update a contacts
//@route Update /api/contacts:id
//@access public

const updateContact = asyncHandler(async(req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not present");
    }

    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedContact);
});

//@desc Delete a contacts
//@route Delete /api/contacts:id
//@access public

const deleteContact = asyncHandler(async(req, res)=>{
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.deleteOne();
    res.status(200).json({message: `updated contact for ${req.params.id}`})
});

module.exports = {getContacts, postContact, getContact, updateContact, deleteContact}