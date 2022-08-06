var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// app.put('/user', function (req, res) {
//   res.send('Got a PUT request at /user');
// });

// app.delete('/user', function (req, res) {
//   res.send('Got a DELETE request at /user');
// });
module.exports = router;
