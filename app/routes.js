const express = require('express')
const router = express.Router()

//start
router.get("/", (req, res) => {
    res.render("pages/LocationInput")
});

//category finder
router.get("/select-category", (req, res) => {
    res.render("pages/CategorySearch")
})
module.exports = router
