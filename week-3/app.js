const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(cookieParser());

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// 首頁 route
app.get('/', (req, res) => {
  res.render('index');
})

// getData route
app.get('/getData', (req, res) => {
  const { number } = req.query;
  const template = { number };

  if (number) {
    const expres = /^[0-9]*[1-9][0-9]*$/;
    const regex = new RegExp(expres);
    if (number.match(regex)) {
      errMessage = '';
      let sum = 0;
      for (let i = 1; i <= number ; i++) {
        sum += i;
      }
      template.sum = sum;
      res.json(template);
    } else if (!number.match(regex)) {
      errMessage = 'Sorry, Wrong Parameter.';
      template.errMessage = errMessage;
      res.render('getData', template);
    } 
  } else {
    errMessage = '';
    res.render('getData', template);
  }
})

// myName route
app.get('/myName', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render('myName', { name });
  }
  res.render('myName');
})

// trackName route
app.get('/trackName', (req, res) => {
  const { name } = req.query;
  if (!name) {
    res.redirect('/myName');
  } else if (name) {
    res.cookie('username', name);
    res.redirect('/myName');
  }
})

// app.post('/trackName', (req, res) => {
//   res.cookie('username', req.body.name);
//   res.redirect('/myName');
// })



app.listen(3000);