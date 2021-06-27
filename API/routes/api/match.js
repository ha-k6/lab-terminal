const express = require("express");
let router = express.Router();
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const Match = require("../../models/match")
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let matches = await Match.find().skip(skipRecords).limit(perPage);
  return res.send(matches);
});
//get single products
router.get("/:id", async (req, res) => {
  try {
    let match = await Match.findById(req.params.id);
    if (!match)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(match); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",  async (req, res) => {
  let match = await Match.findById(req.params.id);
  match.TeamA = req.body.TeamA;
  match.TeamB = req.body.TeamB;
  await match.save();
  return res.send(match);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let match = await Match.findByIdAndDelete(req.params.id);
  return res.send(match);
});
//Insert a record
router.post("/", async (req, res) => {
  let match = new Match();
  match.TeamA = req.body.TeamA;
  match.TeamB = req.body.TeamB;
  await match.save();
  return res.send(match);
});
module.exports = router;