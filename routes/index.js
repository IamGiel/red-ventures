var express = require('express');
var router = express.Router();
var dealers = require('../data/dealers')

/* GET home page. */
router.get("/", function(req, res, next) {
 
    var poolPros = []; //were gonna render this array, in our HOOK, as a key in our hbs page
    var saturday =[];
    var chunksPerRow = 3; //just to say, we want each row to contain three cards/container
    var sat = poolPros.data;
    //here we loop through dealers
    for (let i = 0; i < dealers.length; i++) {
     saturday.push(dealers[i].data.weekHours.sat);
    }
    for (var i = 0; i < dealers.length; i += chunksPerRow) {
      // i is incremented by three
      poolPros.push(dealers.slice(i, i + chunksPerRow)); // logic for keeping each row at three chunks
    }
     console.log("=====>>>>>>>", saturday);

    res.render("businesses/index", {
      title: "Dealers", //hook
      business: poolPros, //hook
      closed:saturday[i] === "",
      flash: message
    });
   
});

module.exports = router;
