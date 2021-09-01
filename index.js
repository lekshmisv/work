const express=require('express');
const mainrouter=require('./router/router');

const app=express();

require('./config/db');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/',mainrouter);

app.listen(3000,(error,result)=>{
    if (error) {
        return console.log(error);
    }
    console.log("server started");
});