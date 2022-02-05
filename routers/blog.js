const express = require('express')
const path = require('path')
const router = express.Router()


// Home Page ---------->
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../templates/homePage.html"));
  })

// Posts Page ---------->
router.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, "../templates/blogPage.html"));
  })



module.exports = router