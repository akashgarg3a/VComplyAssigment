const express = require("express");
const workFollowRouter = new express.Router();
let {addLevel } = require("../controller/workFlowController");

// user routes
// /:user_id
// read  => GET ONE

workFollowRouter.route("/addLevel").post(addLevel);
module.exports = workFollowRouter