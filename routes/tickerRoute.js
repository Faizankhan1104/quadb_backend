const express = require('express');
const { fetchTickers, getTicker } = require('../controller/tickerController');

const router = express.Router();

router.get('/fetch-ticker', fetchTickers);
router.get('/get-ticker', getTicker);

module.exports = router;