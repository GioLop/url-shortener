const Url = require('../services/Url');

const urlService = new Url();

const setShortUrl = async (req, res) => {
  const { body } = req;
  const url = await urlService.set(body.url);

  res.send(url);
};

module.exports = setShortUrl;