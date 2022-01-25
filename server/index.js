const express = require('express');
const cors = require('cors');
const { Validator, ValidationError } = require('express-json-validator-middleware');

const { methods, schemas } = require('../dist');

const app = express();
const port = 3001;
const { validate } = new Validator();

app.use(express.json({ limit: '100mb' }));
app.use(cors());

// you don't need to use JSON here (e.g. multipart/form-data instead), as you can give the uploaded PDF to renderPdf also as a Buffer
app.post('/render-pdf', validate({ body: schemas.renderPdf }), async (req, res) => {
  res.json(await methods.renderPdf(req.body));
});

app.post('/build-pdf', validate({ body: schemas.buildPdf }), async (req, res) => {
  res.contentType('application/pdf');
  res.send(await methods.buildPdf(req.body));
});

app.use((error, request, response, next) => {
  if (error instanceof ValidationError) {
    console.log(error.validationErrors);
    response.status(422).send(error.validationErrors);
    next();
  } else {
    next(error);
  }
});

app.listen(port, () => {
  console.log('Server listening at http://localhost:' + port);
});
