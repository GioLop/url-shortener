const Url = require('../services/Url');

const urlService = new Url();

const getMostVisited = async (_req, res) => {
  const urlList = await urlService.getMostVisited();

  res.send(urlList);
};

module.exports = getMostVisited;