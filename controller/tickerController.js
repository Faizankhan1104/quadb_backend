const Ticker = require('../models/ticker');
const axios = require('axios');

exports.fetchTickers = async (req, res) => {
    try {
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        const allTickets = response.data;

        const ten = Object.values(allTickets)
            .slice(0, 10);

        const tickerdata = ten.map((item) => ({
            name: item.name,
            last: parseFloat(item.last),
            buy: parseFloat(item.buy),
            sell: parseFloat(item.sell),
            volume: parseFloat(item.volume),
            base_unit: item.base_unit,
        }));

        await Ticker.deleteMany({});
        await Ticker.insertMany(tickerdata);

        res.status(200).json({ message: 'Top 10 tickers saved successfully.' });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching or saving data.' });
    }
}

exports.getTicker = async (req, res) => {
    try {
        const ticker = await Ticker.find({});
        res.status(200).json(ticker);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching data from the database.' });
    }
}