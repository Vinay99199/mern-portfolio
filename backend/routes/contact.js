const express = require('express');
const { sendEmail } = require('../controllers/contactController');

const router = express.Router();

router.post('/', sendEmail);

module.exports = router;