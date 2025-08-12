//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req, res)=>{
    res.status(200).json({message : "get all contacts"})
};

//@desc Post a contacts
//@route Post /api/contacts
//@access public

const postContact = (req, res)=>{
    const contact = req.body;
    console.log(contact);
    res.status(201).json({message:"created contact"})
};

//@desc Get a contacts
//@route Get /api/contacts:id
//@access public

const getContact = (req, res)=>{
    res.status(200).json({message: `got contact for ${req.params.id}`})
};

//@desc Update a contacts
//@route Update /api/contacts:id
//@access public

const updateContact = (req, res)=>{
    console.log(req);
    res.status(200).json({message: `updated contact for ${req.params.id}`})
};

//@desc Delete a contacts
//@route Delete /api/contacts:id
//@access public

const deleteContact = (req, res)=>{
    res.status(200).json({message: `updated contact for ${req.params.id}`})
};

module.exports = {getContacts, postContact, getContact, updateContact, deleteContact}