const express = require('express')
const app = express()
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const connection = require('./config/db');

connection.once('open', () => console.log('DB Connected'));
connection.on('error', () => console.log('Error'));

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find()
    res.render('view', { shortUrls: shortUrls })
})
  
app.post('/shortUrls', async (req, res) => {
    await ShortUrl.create({ full: req.body.fullUrl })
    res.redirect('/')
})
app.post('/delete', async (req, res) => {
    await ShortUrl.findOneAndRemove()
    res.redirect('/')
})
app.get('/:shortUrl', async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
    if (shortUrl == null) return res.sendStatus(404)
    shortUrl.save()
    res.redirect(shortUrl.full)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started, listening PORT ${PORT}`));