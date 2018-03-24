



const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Schema = mongoose.Schema;
const bodyParser = require("body-parser")

const Movies = require("../model/movies");
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true }));



router.get("/movie", (req, res) => {
  console.log(req.query)

  let title = req.query.Title;
  console.log(title);
  let year = req.query.Year;
  console.log(year);
  let cost = req.query.Cost;
  console.log(cost);

  var MovieList = {
      Title:title,
      Year:year,
      Cost:cost,
  }

Movies.AddMovie(MovieList)
 res.json(MovieList);
res.status(200);

});
router.get('/movieList', (req, res) => {
    var value = [{_id:"5aaf03de556ffe83500f37a7","Title":"Casablanka","Year":"1941","Cost":40},{_id:"5aaf08c0556ffe83500f39fe",Title:"Casblanka",Year:"1998",Cost:75},{_id:"5aaf0a0f556ffe83500f3aa2",Title:"ironman",Year:"2008","Cost":98},{_id:"5aaf0a7b556ffe83500f3afc",Title:"ironman2",Year:"2010","Cost":98},{_id:"5aaf0c3c556ffe83500f3bba",Title:null,Year:null,Cost:null}]
    // Movies.selectByTitle(Title,Result)
    // function Result(value){
    //     res.json(value);
    // }
    res.json(value)
})

module.exports = router;
