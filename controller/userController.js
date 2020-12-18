let user = require('../models/user');
let notification = require("../models/notifications");
let workflow = require("../models/workFlow");

function sendResponse(req, res) {
    let result = notification.findOne({}, function(err,res) {
        if(err) 
            return err;
        else
            return res;
    })
    let {userName, response} = req.body;
    let status = result.status;
    if(status == 'active') {
        let users = workflow.find({level: result.level, Priority: result.Priority, status: "pending"}, function(err, res) {
            if(err) 
                return err;
            else
                return res.user_name;
        })
        let valid = false;
        for(let x = 0; x < users.length; x++) {
            if(user[x] == userName) {
                valid = true;
                break;
            }
        }
        if(valid) {
            if(response == "Reject") {
                notification.updateOne({},{status: "terminated", last_action: userName}, function(err, res) {
                    if(err)
                        console.log(err);
                    else
                        console.log(updated);
                });
                res.status(200).json({
                    status: "user responded succesfully",
                    message: "workflow teminated"
                })
            } else if(response == "Approve") {
                if(result.levelType == 'any_one' || users.length == 1) {
                    let newLevelUsers =workflow.find({level: result.level + 1},function(err, res) {
                        if(err) return(err);
                        else return res;
                    })
                    if(newLevelUsers.length == 0) {
                        notification.updateOne({},{levelStatus: "Executed", last_action: userName}, function(err, res) {
                            if(err)
                                console.log(err);
                            else
                                console.log(updated);
                        });
                        res.status(200).json({
                            status: "user responded succesfully",
                            message: "workflow Exceuted"
                        })
                    } else {
                        notification.updateOne({},{Priority: 0, level: result.level + 1, last_action: userName, levelType: newLevelUsers[0].Approval}, function(err, res) {
                            if(err)
                                console.log(err);
                            else
                                console.log(updated);
                        });
                        res.status(200).json({
                            status: "user responded succesfully",
                            message: "workflow Active"
                        })
                    }
                } else {
                    if(result.levelType == 'sequential)') {
                        notification.updateOne({},{Priority: parseInt(Priority) + 1, last_action: userName}, function(err, res) {
                            if(err)
                                console.log(err);
                            else
                                console.log(updated);
                        });
                        res.status(200).json({
                            status: "user responded succesfully",
                            message: "workflow Active"
                        })
                    }else {
                        notification.updateOne({},{last_action: userName}, function(err, res) {
                            if(err)
                                console.log(err);
                            else
                                console.log(updated);
                        });
                        res.status(200).json({
                            status: "user responded succesfully",
                            message: "workflow Active"
                        })
                    }
                }
            } else {
                if(users.length == 1) {
                    let newLevelUsers = workflow.find({level: result.level + 1},function(err, res) {
                        if(err) return(err);
                        else return res;
                    })
                    if(newLevelUsers.length == 0) {
                        notification.updateOne({},{levelStatus: "Executed", last_action: userName}, function(err, res) {
                            if(err)
                                console.log(err);
                            else
                                console.log(updated);
                        });
                        res.status(200).json({
                            status: "user responded succesfully",
                            message: "workflow Exceuted"
                        })
                    } else {
                        notification.updateOne({},{Priority: 0, level: result.level + 1, last_action: userName, levelType: newLevelUsers[0].Approval}, function(err, res) {
                            if(err)
                                console.log(err);
                            else
                                console.log(updated);
                        });
                        res.status(200).json({
                            status: "user responded succesfully",
                            message: "workflow Active"
                        })
                    }
                } else {
                    if(result.levelType == 'sequential)') {
                        notification.updateOne({},{Priority: parseInt(Priority) + 1, last_action: userName}, function(err, res) {
                            if(err)
                                console.log(err);
                            else
                                console.log(updated);
                        });
                        res.status(200).json({
                            status: "user responded succesfully",
                            message: "workflow Active"
                        })
                    }else {
                        notification.updateOne({},{last_action: userName}, function(err, res) {
                            if(err)
                                console.log(err);
                            else
                                console.log(updated);
                        });
                        res.status(200).json({
                            status: "user responded succesfully",
                            message: "workflow Active"
                        })
                    }
                }
            }
        } else {
            res.status(404).json({
                status: "error",
                "error": user_invalid
            })
        }
    } else {
        res.status(404).json({
            status: "error",
            "workflow_status": status
        })
    }
}

function getUserId(user_id) {
    return user.findOne({name: user_id}, function(err, res) {
        if(err) {
            return err;
        } else
            return res.id;
    })
}

module.exports.getUserId = getUserId;
module.exports.sendResponse = sendResponse;