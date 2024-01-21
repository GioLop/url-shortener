const Url = require('../services/Url');

const urlService = new Url();

const deleteUrl = async (req, res) => {
  const { params } = req;
  const deletedUrl = await urlService.delete(params.id);

  res.send(deletedUrl);
};

module.exports = deleteUrl;