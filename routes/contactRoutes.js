const express = require('express')
const router = express.Router();
const {getContacts, postContact, getContact, updateContact, deleteContact} = require('../controllers/contactControllers');
const validateToken = require('../middleware/validateTokenHandler');

router.use(validateToken);

router.route('/').get(getContacts);

router.route('/').post(postContact);

router.route('/:id').get(getContact)

router.route('/:id').put(updateContact)

router.route('/:id').delete(deleteContact)

module.exports = router
