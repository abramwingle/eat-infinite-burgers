var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = { burgers: data };
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    burger.create(["burger_name"], [req.body.name], function (data) {

        res.redirect("/");
    });
});

router.post("/:id", function (req, res) {
    var ate = "id = " + req.params.id;

    console.log("condition", ate);

    burger.update({ devoured: req.body.devoured }, ate, function () {
        res.redirect("/");
    });
});




module.exports = router;