const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel");

//@desc Get all Contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json({ contacts });
});

//@desc Create new Contacts
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body

    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }

    const contact = await Contact.create({
        name,
        email,
        phone
    })

    res.status(201).json(contact);
});

//@desc Get Contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact now found");
    }
    res.status(200).json(contact);
});

//@desc Update Contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedContact);
});

//@desc Delete Contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    console.log(contact)
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found")
    }

    // Use the `remove` method on the `contact` object to delete it
    await Contact.deleteOne({ _id: req.params.id });

    res.status(200).json({ message: "Contact deleted successfully" });
});


module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };