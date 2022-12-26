const express = require('express');
const app = express();
const connection = require('./config/db');

// 라우터 import 
const redirectRoute = require('./routes/redirect');
const urlRoute = require('./routes/shorturl');

connection.once('open', () => console.log('DB Connected'));
connection.on('error', () => console.log('Error'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 라우터
app.use('/', redirectRoute);
app.use('/api/url', urlRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started, listening PORT ${PORT}`));