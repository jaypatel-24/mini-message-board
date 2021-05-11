var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', creator: 'Jay Patel', message_array : messages });
});

/* ADD new message */
router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/submit', function(req,res) {
  messages.push({text : req.body.messageText, user : req.body.author, added: new Date()});
  res.redirect('/');
})


module.exports = router;
