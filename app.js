// FRAMEWORK FOR BUILDING WEB APPS WITH NODE
const express = require('express');
const app = express();

app.get('/', (req, res) => res.end('hey what is good?'));

app.listen(3000, () => console.log('i am listening on port 3000'));
