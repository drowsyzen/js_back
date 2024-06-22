const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/amin', (req,res) => { 
    res.send('Hello Amin!')
})

app.get('/htm', (req,res) => { 
    res.send('<h1> this is H1 </h1> <br> <p> this is para</p>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// console.log('Hellow world this is 1111111111')