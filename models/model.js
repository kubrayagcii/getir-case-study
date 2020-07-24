const mongoose = require ('mongoose');

const newSchema = new mongoose.Schema({  key: String, createdAt: Date, counts: Array, value:String}, 
                             { collection : 'records' });   
    
module.exports = mongoose.model ('Model', newSchema);
