const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const tickerRoute = require('./routes/tickerRoute');
require('dotenv').config();


const app = express();

connectDB();


app.use(cors());
app.use(express.json());

app.use('/api/v1', tickerRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));

