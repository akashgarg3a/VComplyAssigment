const mongoose = require('mongoose');

const workFlowSchema = new mongoose.Schema({
    user_name:{
        type:String,
        require:true
    },
    level:{
        type:String,
        require:true
    },
    user_id:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    },
    Approval:{
        type:String,
        require:true
    },
    Priority:{
        type:String,
        require:true
    }
},{timeStamps:true});

const workFlow = mongoose.model('workFlow',workFlowSchema);
module.exports = workFlow;