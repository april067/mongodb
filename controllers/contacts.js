const { contactsServices } = require('../services');
const { HttpError } = require('../helpers');
const { Contact } = require('../models');

const getAllContacts = async (_, res) => {
	const contacts = await Contact.find({});

	res.json(contacts);
};

const getContact = async (req, res) => {
	const { id } = req.params;

	const contact = await Contact.findById(id);
	if (!contact) {
		throw HttpError(404, 'Not found');
	}

	res.json(contact);
};

const addContact = async (req, res) => {
	const newContact = await Contact.create(req.body);

	res.status(201).json(newContact);
};

// const updateContact = async (req, res) => {
// 	const { id } = req.params;
// 	const data = req.body;
// 	if (Object.keys(data).length === 0)
// 		res.status(400).json({ message: 'Request body must have at least one field' });

// 	const updatedContact = await contactsServices.updateContactById(id, data);
// 	if (!updatedContact) {
// 		throw HttpError(404, 'Not found');
// 	}

// 	res.json(updatedContact);
// };

// const removeContact = async (req, res) => {
// 	const { id } = req.params;

// 	const contact = await contactsServices.removeContact(id);
// 	if (!contact) {
// 		throw HttpError(404, 'Not found');
// 	}

// 	res.json(contact);
// };

module.exports = {
	getAllContacts,
	getContact,
	addContact,
	// updateContact,
	// removeContact,
};
