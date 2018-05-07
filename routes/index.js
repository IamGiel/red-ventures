var express = require('express');
var router = express.Router();
var dealers = require('../data/dealers')

/* GET home page. */
router.get("/", function(req, res, next) {
 
    var poolPros = []; //were gonna render this array, in our HOOK, as a key in our hbs page
    var saturday =[];
    var certifications= [];
    var chunksPerRow = 3; //just to say, we want each row to contain three cards/container
    //here we loop through dealers
    // for (let i = 0; i < dealers.length; i++) {
    //  saturday.push(dealers[i].data.weekHours.sat);
    //  certifications.push(dealers[i].data.certifications[i]);
    // }
    for (var i = 0; i < dealers.length; i += chunksPerRow) {
      // i is incremented by three
      poolPros.push(dealers.slice(i, i + chunksPerRow)); // logic for keeping each row at three chunks
      certifications.push(dealers[i].data.certifications);
    }
     console.log("=====>>>>>>>", dealers.length);

    res.render("businesses/cards", {
      title: "Dealers", //hook
      business: poolPros, //hook
      certificate: certifications,
      number: dealers.length
    });
});

router.get("/commercial/:id", function(req, res, next) {
  var commercial = [];

  var bussinessId = req.params.id; //retrieve id here
  res.redirect("/commercial");
});

module.exports = router;
