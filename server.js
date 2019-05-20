const parser = require('body-parser');
const express = require('express');
const path = require('path');

const {
  env: { PORT: port = 8000 },
} = process;
const app = express();

require('./server/config/mongoose');

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(express.static(path.join(__dirname, 'dist/public')));
app.use(require('./server/routes'));
app.listen(port, () => console.log(`Express server listening on port ${port}`));

