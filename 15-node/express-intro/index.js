const express = require('express');
const ejs = require('ejs');
const _ = require('underscore');
const axios = require('axios');

const server = express();
server.use(express.static('public'));
server.set('view-engine', ejs); // See docs

const PORT = 1337; // Single variable for ease of modification later.

server.get('/', (req, res) => {
  console.log('GET /');

  const brothers = 'Groucho Harpo Chico Zeppo'.split(' ');
  const randomBrother = _(brothers).sample();

  res.render('home.ejs', {randomBrother: randomBrother}); // "Instance" variables
});

// Something like params for dynamic URLs
server.get('/hello/:name', (req, res) => {
  res.send(`Hello ${ req.params.name }`);
});

server.get('/calculator/:x/:y/:operator', (req, res) => {
  let answer;
  if (req.params.operator === '+') {
    answer = Number(req.params.x) + Number(req.params.y);
  } else if (req.params.operator === '-') {
    answer = Number(req.params.x) - Number(req.params.y);
  }

  res.render('calculator.ejs', {answer: answer});
});

server.get('/info.json', (req, res) => {
  res.json({
    name: 'Groucho',
    instrument: 'guitar',
    vice: 'cigars',
    luckyNumber: _.random(40)
  });
});

// You can use regular expressions for the path. For some reason.
server.get(/[0-9]+/, (req, res) => {
  res.send('There is a number in the URL');
});

server.get('/trivia', (req, res) => {
  axios.get('http://numbersapi.com/random/trivia').then((response) => {
    res.render('trivia.ejs', { trivia: response.data });
  });
});

server.listen(PORT, () => { console.log(`Now serving on http://localhost:${ PORT }/`) });
