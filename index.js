const express = require('express');
const app = express();
const connection = require('./config/db');

connection.once('open', () => console.log('DB Connected'));
connection.on('error', () => console.log('Error'));

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started, listening PORT ${PORT}`));