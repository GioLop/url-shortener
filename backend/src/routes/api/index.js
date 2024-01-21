const express = require('express');

const setShortUrl = require('../../controllers/setShortUrl');
const getFullUrl = require('../../controllers/getFullUrl');
const updateUrl = require('../../controllers/updateUrl');
const deleteUrl = require('../../controllers/deleteUrl');
const getMostVisited = require('../../controllers/getMostVisited');

const apiRouter = express.Router();

apiRouter.post('/', setShortUrl);
apiRouter.get('/', getMostVisited);
apiRouter.get('/:id', getFullUrl);
apiRouter.put('/:id', updateUrl);
apiRouter.delete('/:id', deleteUrl);

module.exports = apiRouter;