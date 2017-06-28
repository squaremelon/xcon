var express = require('express')
var app = express()

app.get('/', function (q,s) {
  s.send('Hello World!')
})

app.listen(3000)