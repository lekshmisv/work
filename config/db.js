const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/work',(error,result)=>{
    if (error) {
        return console.log(error);
    }
    console.log('db connected');
})