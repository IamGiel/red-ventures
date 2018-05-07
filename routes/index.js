var express = require('express');
var router = express.Router();
var dealers = require('../data/dealers')

/* GET home page. */
router.get("/", function(req, res, next) {
 
    var poolPros = []; //were gonna render this array, in our HOOK, as a key in our hbs page
    var chunksPerRow = 3; //just to say, we want each row to contain three cards/container
    //here we loop through dealers
    for (var i = 0; i < dealers.length; i += chunksPerRow) {
      // i is incremented by three
      poolPros.push(dealers.slice(i, i + chunksPerRow)); // logic for keeping each row at three chunks
    }
    res.render("businesses/index", {
      title: "Dealers", //hook
      business: poolPros, //hook
    });
    console.log("this is businesses >>>",poolPros[2]);
});

module.exports = router;
