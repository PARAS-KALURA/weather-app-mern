const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        city: "Delhi",
        temperature: "30C",
        condition: "Sunny"
    })
})

module.exports = router;