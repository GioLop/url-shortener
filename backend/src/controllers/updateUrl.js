const Url = require('../services/Url');

const urlService = new Url();

const updateUrl = async (req, res) => {
  const { params, body } = req;
  const fullUrl = await urlService.update(params.id, body);

  res.send(fullUrl);
};

module.exports = updateUrl;