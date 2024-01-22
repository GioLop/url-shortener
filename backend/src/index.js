const express = require('express');
const path = require('path');
const cors = require('cors');
const mainRouter = require('./routes');

const PORT = 3000;

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

mainRouter(router);
app.use(router);

app.listen(PORT, (_req, res) => {
  console.log(`Server running on http://localhost:${PORT}`);
});