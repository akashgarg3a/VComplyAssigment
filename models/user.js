const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    id:{
        type:String,
        require:true,
        unique:true
    }
},{timeStamps:true});

const user = mongoose.model('user',userSchema);
module.exports = user;