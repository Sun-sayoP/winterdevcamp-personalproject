const express = require('express');
const urlController = require('../controllers/url_controller');
const router = express.Router();

router.get('/:code', urlController.redirectUrl);

module.exports = router;