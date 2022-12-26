const shortid = require('shortid');
const Url = require('../models/shortUrl');

const baseUrl = 'http://localhost:5000';

module.exports = {
  shortenUrl: async (req, res) => {
    const { longUrl } = req.body;
    const urlCode = shortid.generate();
    console.log(req);
    if (longUrl) {
      try {
        let url = await Url.findOne({
          longUrl,
        });
        if (url) {
          res.json(url);
        } else {
          const shortUrl = baseUrl + '/' + urlCode;
          url = new Url({
            longUrl,
            shortUrl,
            urlCode,
            date: new Date(),
          });
          await url.save();
          res.json(url);
        }
      } catch (err) {
        console.log(err);
        res.status(500).json('Server Error');
      }
    } else {
      res.status(500).json('Invalid Url');
    }
  },
  redirectUrl: async (req, res) => {
    try {
      const url = await Url.findOne({
        urlCode: req.params.code,
      });
      console.log(url);
      if (url) {
        return res.redirect(url.longUrl);
      } else {
        return res.status(404).json('No URL Found');
      }
    } catch (err) {
      console.error(err);
      res.status(500).json('Server Error');
    }
  }
};