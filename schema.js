const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schoolsSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    region:{
        type:String,
        required:true
    },
    tution:{
        type:Number,
        required:true
    }
},
{ collection : 'internationalschools' }

)

const Schools = mongoose.model('internationalschools',schoolsSchema);
module.exports=Schools;