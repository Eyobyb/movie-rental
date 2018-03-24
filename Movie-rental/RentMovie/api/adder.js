



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
console.log(title)
  let rented = req.query.Rented;
console.log(rented)
  let rentDate = req.query.RentDate;
console.log(rentDate)
  let returnDate = req.query.ReturnDate;
console.log(returnDate)
  var MovieList = {
      Title:title,
      Rented:rented,
      RentDate:rentDate,    
      ReturnDate:returnDate,
  }

Movies.AddMovie(MovieList)
 res.json(MovieList);
res.status(200);

});
router.get('/movieList', (req, res) => {
    var value=[{_id:"5aaf17d7556ffe83500f4090",Title:" ironman",RentDate:"tue dec 2017",ReturnDate:"tur dec 2018"},{_id:"5ab011d1ed04bf04862f9588",Title:"ironman2",RentDate:"Wed dec 2017",ReturnDate:"Sat dec 2018"}]
    // Movies.selectByTitle(Title,Result)
    // function Result(value){
    // res.json(value);
    // }
    res.json(value);
})

module.exports = router;
