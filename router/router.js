const express=require('express');
const router=new express.Router();
const work=require('../model/work');

router.get('/',(req,res)=>{
res.json({
    message:"hloo"
});
})

router.get('/login',async(req,res)=>{
    const works=await work.find({});
    if (!works) {
        return res.json({message:'User not found'});
    }
    res.json([
        works
    ])
})

router.post('/adddetails',async(req,res)=>{
    const{email,password}=req.body;
    const addDetails=new work({
        email:email,
        password:password
    });
    await addDetails.save((error,result)=>{
        if(error){
            return res.json({message:'request failed',error:error});
        }
        res.json({message:'Request Sucess',result:result});
    })
})


router.post('/registration',async(req,res)=>{
    const{email,password,name}=req.body;
    const Reg=new work({
        email:email,
        password:password,
        name:name
    });
    await Reg.save((error,result)=>{
        if(error){
            return res.json({message:'Registration failed',error:error});
        }
        res.json({message:'Registered Sucessfully',result:result});
    })
})


/* router.get('/viewreg',async(req,res)=>{
    const email=req.query.email
    const password=req.query.password
    const view=await work.findOne({email:email,password:password})
    view.then((result)=>{
        res.json({message:"login Sucessfull",data:result});
    }).catch((err)=>{
        console.log(err);
        res.json({message:'login failed',data:err});
    })
}); */

module.exports=router;