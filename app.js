// FRAMEWORK FOR BUILDING WEB APPS WITH NODE
const express = require('express');
// LOGGING
const morgan = require('morgan');
// SIMPLIFY DIRECTORY PATHS
const path = require('path');
// MAKE THE APP
const app = express();

app.set('views', 'views');
app.set('view engine', 'pug');

// LOGGING
app.use(morgan('combined'));
// SERVING STATIC FILES
app.use(express.static(path.join(__dirname, 'styles')));

app.get('/', (req, res) => {
  res.render("index");
});

app.listen(3000, () => console.log('i am listening on port 3000'));
