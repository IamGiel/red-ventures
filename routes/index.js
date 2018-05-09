const express = require("express");
const router = express.Router();
const dealers = require("../data/dealers");


/* GET home page. */
router.get("/", (req, res, next) => {
  const poolPros = []; //were gonna render this array, in our HOOK, as a key in our hbs page
  const saturday = [];
  const certifications = [];
  const chunksPerRow = 3; //just to say, we want each row to contain three cards/container
  for (let i = 0; i < dealers.length; i += chunksPerRow) {
    // i is incremented by three
    poolPros.push(dealers.slice(i, i + chunksPerRow)); // logic for keeping each row at three chunks
    certifications.push(dealers[i].data.certifications);
  }
  console.log("=====>>>>>>>", dealers.length);

  res.render("businesses/all", {
    // title: "Dealers", //hook test
    business: poolPros, //hook
    certificate: certifications,
    number: dealers.length
  });
});

/* GET home page. */
router.get("/all", (req, res, next) => {
  const poolPros = []; //were gonna render this array, in our HOOK, as a key in our hbs page
  const saturday = [];
  const certifications = [];
  const chunksPerRow = 3; //just to say, we want each row to contain three cards/container
  for (let i = 0; i < dealers.length; i += chunksPerRow) {
    // i is incremented by three
    poolPros.push(dealers.slice(i, i + chunksPerRow)); // logic for keeping each row at three chunks
    certifications.push(dealers[i].data.certifications);
  }
  console.log("=====>>>>>>>", dealers.length);

  res.render("businesses/all", {
    // title: "Dealers", //hook test
    business: poolPros, //hook
    certificate: certifications,
    number: dealers.length
  });
});

// render all business with service certification
router.get("/service", (req, res, next) => {

  let installationPro = [];
  for (let i = 0; i < dealers.length; i++) {
    //if in certifications array
    //one of the string values match 'Installation Pro'
    //render this business card
    const installPro = dealers[i].data.certifications;
    const wordsToMatch = installPro.join(" ");
    if (wordsToMatch.indexOf("Service", 0) >= 0) {
      installationPro.push(dealers[i]);
    } else {
      console.log("INDEX: ", wordsToMatch.indexOf("Rental"));
    }
  }
  console.log("BUSINESSES IN THIS LIST: ", installationPro);
  console.log("LENGTH: ", installationPro.length)

  res.render("businesses/service", {
    title: "Dealers", //hook test
    installPro: installationPro,
    number: installationPro.length
  });
});

// render all business with commercial certification
router.get("/commercial", (req, res, next) => {
  let installationPro = [];
  for (let i = 0; i < dealers.length; i++) {
    //if in certifications array
    //one of the string values match 'Installation Pro'
    //render this business card
    const installPro = dealers[i].data.certifications;
    const wordsToMatch = installPro.join(" ");
    if (wordsToMatch.indexOf("Commercial", 0) >= 0) {
      installationPro.push(dealers[i]);
    } else {
      console.log("INDEX: ", wordsToMatch.indexOf("Commercial"));
    }
  }
  console.log("BUSINESSES IN THIS LIST: ", installationPro[0].data.name);
  console.log("LENGTH: ", installationPro.length);

  res.render("businesses/commercial", {
    title: "Dealers", //hook test
    installPro: installationPro,
    number: installationPro.length
  });
});

// render all business with residential certification
router.get("/residential", (req, res, next) => {
  let installationPro = [];
  for (let i = 0; i < dealers.length; i++) {
    //if in certifications array
    //one of the string values match 'Installation Pro'
    //render this business card
    const installPro = dealers[i].data.certifications;
    const wordsToMatch = installPro.join(" ");
    if (wordsToMatch.indexOf("Residential", 0) >= 0) {
      installationPro.push(dealers[i]);
    } else {
      console.log("INDEX: ", wordsToMatch.indexOf("Residential"));
    }
  }
  console.log("BUSINESSES IN THIS LIST: ", installationPro[0].data.name);
  console.log("LENGTH: ", installationPro.length);

  res.render("businesses/residential", {
    title: "Dealers", //hook test
    installPro: installationPro,
    number: installationPro.length
  });
});
// render all business with installation certification
router.get("/installation", (req, res, next) => {
  let installationPro = [];
  for (let i = 0; i < dealers.length; i++) {
    //if in certifications array
    //one of the string values match 'Installation Pro'
    //render this business card
    const installPro = dealers[i].data.certifications;
    const wordsToMatch = installPro.join(" ");
    if (wordsToMatch.indexOf("Installation", 0) >= 0) {
      installationPro.push(dealers[i]);
    } else {
      console.log("INDEX: ", wordsToMatch.indexOf("Installation"));
    }
  }
  console.log("BUSINESSES IN THIS LIST: ", installationPro[0].data.name);
  console.log("LENGTH: ", installationPro.length);

  res.render("businesses/installation", {
    title: "Dealers", //hook test
    installPro: installationPro,
    number: installationPro.length
  });
});

module.exports = router;
