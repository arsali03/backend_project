var express = require("express");
var router = express.Router();

const isAuth = true;

router.all("*", (req, res, next) => {
  if (isAuth) {
    next();
  } else {
    res.json({succes:false, error: "Not authorized" });
  }
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({succes:true});
});

module.exports = router;
