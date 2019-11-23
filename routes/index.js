const express = require('express');
const router  = express.Router();

const {ReportController}= require('../controller/ReportController.js');

router.get('/', ReportController);

module.exports = router;
