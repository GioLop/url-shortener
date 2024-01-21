const Url = require('../services/Url');

const urlService = new Url();

const getFullUrl = async(req, res) => {
  const { params } = req;
  const fullUrl = await urlService.get(params.id);

  res.send(fullUrl);
};

module.exports = getFullUrl;