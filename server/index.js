const express = require('express');
const cors = require('cors');
const { Validator } = require('express-json-validator-middleware');

const { methods, schemas } = require('../dist');

const app = express();
const port = 3001;
const { validate } = new Validator();

app.use(express.json());
app.use(cors());

app.post('/render-pdf', validate({ body: schemas.renderPdf }), async (req, res) => {
  res.json(await methods.renderPdf(req.body));
});

app.post('/build-pdf', validate({ body: schemas.buildPdf }), async (req, res) => {
  res.contentType('application/pdf');
  res.send(await methods.buildPdf(req.body));
});

app.listen(port, () => {
  console.log('Server listening at http://localhost:' + port);
});
