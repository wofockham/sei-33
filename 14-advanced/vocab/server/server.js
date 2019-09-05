const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.Vocab = require('./api/models/vocabModel');
const routes = require('./api/routes/vocabRoutes');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);

// WARNING: DO NOT COMMIT YOUR PASSWORD TO GITHUB
mongoose.connect(
  'mongodb+srv://the_blade:<PASSWORD>@cluster0-ivsrl.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${ req.originalUrl } not found` });
});

console.log(`Server start on port http://localhost:${ port }`);
