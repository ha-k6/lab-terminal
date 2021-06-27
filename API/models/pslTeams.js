var mongoose = require("mongoose");
var pslSchema = mongoose.Schema({
  City: String,
  Date: String,
  TeamA:String,
  TeamB:String,
});
var PSL = mongoose.model("PSL", pslSchema);
module.exports = PSL
