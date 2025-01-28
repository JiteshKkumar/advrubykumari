const express=require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app=express();


const url='mongodb://127.0.0.1:27017/userdetails';

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
        res.send("Hey this is main");
})

const myschema=mongoose.Schema({
    name:String,
    email:String,
    phone:Number
});

const Userdata=mongoose.model('users',myschema);

mongoose.connect(url,(err,con)=>{
    if(err){
        console.log("Db is not connected");
        
    }else{
        console.log("Db is connected");
    }
})

app.get('/getUser',(req,res)=>{
    Userdata.find({},(err,data)=>{
        if(err){
            console.log("Data is not fetched");
            
        }else{
            res.json(data);
        }
    })
});

app.post('/AddUser',(req,res)=>{
    const {name,email,phone}=req.body;
    const newData=new Userdata({name,email,phone});
    newData.save((err,con)=>{
        if(err){
            console.log("Data has not been saved");
            
        }else{
            console.log("Data has been saved");
            
        }
    })
})


app.listen(8000,(err)=>{
    if(err){
        console.log("Server is not running");
        
    }else{
        console.log("server is running on port no 8000");
        
    }
})