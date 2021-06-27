const express = require("express");
let router = express.Router();
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const PSL = require("../../models/pslTeams");
const { response } = require("express");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let pslTeamss = await PSL.find().skip(skipRecords).limit(perPage);
  return res.send(pslTeamss);
});
//get single products
router.get("/:id", async (req, res) => {
  try {
    let pslTeams = await PSL.findById(req.params.id);
    if (!pslTeams)
      return res.status(400).send("Team With given ID is not present"); //when id is not present id db
    return res.send(pslTeams); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",  async (req, res) => {
  let pslTeams = await PSL.findById(req.params.id);
  pslTeams.City = req.body.City;
  pslTeams.Date = req.body.Date;
  pslTeams.TeamA = req.body.TeamA;
  pslTeams.TeamB = req.body.TeamB;
  await pslTeams.save();
  return res.send(pslTeams);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let pslTeams = await PSL.findByIdAndDelete(req.params.id);
  return res.send(pslTeams);
});
//Insert a record
router.post("/", async (req, res) => {
  let pslTeams = new PSL();
  pslTeams.City = req.body.City;
  pslTeams.Date = req.body.Date;
  pslTeams.TeamA = req.body.TeamA;
  pslTeams.TeamB = req.body.TeamB;
  await pslTeams.save();
  return res.send(pslTeams);
});
module.exports = router;