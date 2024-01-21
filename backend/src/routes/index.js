const apiRouter = require("./api");
const path = require('path');

const mainRouter = (router) => {
  router.get('/', (req, res) => {
    res.send('This is an api service go to /api');
  });

  router.use('/api', apiRouter);
}

module.exports = mainRouter;