const mongoose=require('mongoose');
const loginschema=new mongoose.Schema({
    email:{
        required:true,
        trim:true,
        type:String,
    },
    password:{
        required:true,
        trim:true,
        type:String
    },
    name:{
        required:true,
        trim:true,
        type:String
    }
});
const work=mongoose.model('work',loginschema);
module.exports=work;