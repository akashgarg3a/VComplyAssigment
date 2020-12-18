const express = require("express");
const userRouter = new express.Router();
let { sendResponse } = require("../controller/userController");
const user = require("../models/user");
// user routes
// /:user_id
// read  => GET ONE

userRouter.route('/sendResponse').post(sendResponse);

module.exports = userRouter;