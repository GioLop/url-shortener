const express = require('express');
const path = require('path');
const cors = require('cors');
const mainRouter = require('./routes');

const PORT = 3001;

const app = express();
const router = express.Router();

mainRouter(router);

app.use(cors());
app.use(express.json());

app.use('/', router);

app.listen(PORT, (_req, res) => {
  console.log(`Server running on http://localhost:${PORT}`);
});