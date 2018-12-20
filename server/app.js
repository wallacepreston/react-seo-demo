const express = require('express');
const app = express();
const path = require('path')
const morgan = require('morgan');

// MIDDLEWARE
//    logging middleware
app.use(morgan('dev'));

//    Body parsing middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// api router
app.use('/api', require('../api'))

app.use(express.static(path.join(__dirname, '..', 'public')))

// For all GET requests that aren't to an API route, send index.html
app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})

// Handle 404s
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500)
  res.send(err.message || 'Internal server error.');
});

const port = process.env.PORT || 3000; // process.env.PORT is for deploying to Heroku!
app.listen(port, function () {
  console.log(`App is listening on port ${port}`);
});
