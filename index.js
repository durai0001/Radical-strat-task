const express = require('express')
// const cors = require('cors')
const app = express()
const port = 4040

// app.use(cors)

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);

app.get('/', (req, res) => {
    res.send('HI')
})

app.post('/sample-post', (req, res) => {
   res.json({
    status: 'success',
    message: 'This is sample post response'
   })
})

app.put('/sample-put', (req, res) => {
    res.json({
     status: 'success',
     message: 'This is sample put response'
    })
})

app.delete('/sample-delete', (req, res) => {
    res.json({
     status: 'success',
     message: 'This is sample delete response'
    })
 })
 
 

app.get('/sample-get', (req, res) => {
    res.json({
      status: 'success',
      message: 'This is sample get response'
    })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})