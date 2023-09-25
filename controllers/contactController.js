const asyncHandler = require("express-async-handler")
//@desc Get all Contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({message:"Get all contacts"});
});

//@desc Create new Contacts
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
    const {name,email,phone} = req.body

    if(!name || !email || !phone){
        res.status(400)
        throw new Error ("All fields are mandatory")
    }

    res.status(201).json({message:"Create new contacts"});
});

//@desc Get Contact
//@route GET /api/contacts
//@access public
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Get contact for ${req.params.id}`});
});

//@desc Get Contact
//@route UPDATE /api/contacts
//@access public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Update contact for ${req.params.id}`});
});

//@desc Get Contact
//@route UPDATE /api/contacts
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Delete contact for ${req.params.id}`});
});


module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};