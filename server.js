let express = require('express')
let path = require('path')
let app = express()

app.use(express.static(path.join(__dirname, 'dist')))

//app.get('/', function(req, res) {
//  res.send('This is my first server!');
//})

app.listen(process.env.PORT || 5000, function() {
  console.log('serving from port 5000')
})
