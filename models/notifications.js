const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    last_action:{
        type:String,
        require:true
    },
    level:{
        type:String,
        require:true
    },
    levelType:{
        type:String,
        require:true
    },
    WorkflowState:{
        type:String,
        require:true
    },
    Priority: {
        type: String,
        require: true
    }
},{timeStamps:true});

const notification = mongoose.model('logData',notificationSchema);
module.exports = notification;