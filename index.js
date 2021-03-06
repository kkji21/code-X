const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')




app.use(express.static(path.join(__dirname, "static")))
app.use('/', require(path.join(__dirname,'routers/blog.js')))

app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`)
})