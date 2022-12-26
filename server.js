const express = require('express')
const app = express()
const mongoose = require('mongoose')
const ShortUrl = require('./models/urlmodel')

mongoose.connect("mongodb+srv://sayoP:dnjfcjr41@cluster0.ibhq7m2.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')
app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find()
    res.render('view', { shortUrls: shortUrls })
  })
  
app.post('/shortUrls', async (req, res) => {
    await ShortUrl.create({ full: req.body.fullUrl })
  
    res.redirect('/')
  })

app.listen(process.env.PORT || 5000);