const express = require('express')
var cookieParser = require('cookie-parser')

const app = express()
const port = 3000

app.use(cookieParser())

app.get('/login', (req, res) =>{
    res.cookie("loginName", "Erik")
    res.send("success")
})

app.get('/hello', (req, res) =>{
    res.send(`Welcome ${req.cookies.loginName}!`)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))