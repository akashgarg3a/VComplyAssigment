const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/coedial_dev');
const db = mongoose.connection;
db.on('error',console.log.bind(console,"Error in DB"));

db.once('open',()=>{
    console.log('connected DB::Mongoose');
});

module.exports = db;