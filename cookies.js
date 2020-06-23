const express = require('express')
var cookieParser = require('cookie-parser')

const app = express()
const port = 3000

app.use(cookieParser())

app.get('/setcookie', (req, res) =>{
    res.cookie("firstName", "Erik")
    res.send("success")
})

app.get('/readcookie', (req, res) =>{
    res.send(req.cookies.firstName)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))