const express = require('express')
const router = express.Router()

//start
router.get("/", (req, res) => {
    res.render("pages/LocationInput")
});

//category selection
router.get("/select-category", (req, res) => {
    res.render("pages/CategorySelection")
})

//functionality selection
router.get("/select-functionality", (req, res) => {
    res.render("pages/FunctionalitySelection")
})

module.exports = router
