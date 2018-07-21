// FRAMEWORK FOR BUILDING WEB APPS WITH NODE
const express = require('express');
// LOGGING
const morgan = require('morgan');
// SIMPLIFY DIRECTORY PATHS
const path = require('path');
// READ AND WRITE FROM FILES
const fs = require('fs');
// GENERATE UNIQUE IDS FOR JSON FILE
const uuid = require('uuid/v1');
// PARSE HTML FORMS
const bodyParser = require('body-parser');
// MAKE THE APP
const app = express();

app.set('views', 'views');
app.set('view engine', 'pug');

// LOGGING
app.use(morgan('combined'));
// SERVING STATIC FILES
app.use(express.static(path.join(__dirname, 'styles')));

// app.get('/', (req, res) => {
//   res.render("index");
// });
// INDEX VIEW
// grab the array of blog posts from a file
const blogFile = fs.readFileSync('./seeds/blogs.json', 'utf-8');
const blogArray = JSON.parse(blogFile);

app.get('/', (req, res) =>
  res.render('index', {
    blogs: blogArray
  })
);

// NEW VIEW
app.get('/new', (req, res) => {
  res.render('new');
});

// SHOW VIEW
app.get('/:blogId', (req, res) => {
  const blogId = req.params.blogId;
  let blog;
  for (let i = 0; i < blogArray.length; i++) {
    if (blogArray[i]._id === blogId) {
      blog = blogArray[i];
      break;
    }
  }
  if (blog !== undefined) {
    res.render('show', { blog });
  } else {
    res.status(404).end('Blog Not Found');
  }

});

app.listen(3000, () => console.log('i am listening on port 3000'));
