const express = require("express");
const router = express.Router();

router.get("/contact", (req, res, next)=>{
  res.render("businesses/contact");
})

module.exports = router;

