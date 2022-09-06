// modules imports
const express=require('express');
const con = require('../Configuration');
const routes= express.Router();
const message= require('../messages');
const multer = require('multer')
const path = require('path'); 
const  Randomstring =require('randomstring') ;

//routes here => addpost, viewproperties, oneproperty (landlords activities)
//! Use of Multer
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null,'./public/images')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
})

var upload = multer({

    storage: storage
});

//route for post data
routes.post("/addpost", upload.array('image',3), (req, res) => {
      
   
    if (!req.files) {
        console.log("No file upload");
    } else {
        //req body and files
        const imagesarray=[];
        //using map
        req.files.map((file)=>{
            //push into the array the whole image path
            imagesarray.push(`http://localhost:5000/images/${file.filename}`);
          
        }) 
        //generating post id
        const random  = Randomstring.generate({
            length:9,
            charset:'alphanumeric'
        });
        const postId = `post-${random}`;

    
        // capturing user data
        const postdata={
            postId:postId,
            landlordId:req.body.landlordId,
            propertyName:req.body.propertyName,
            category:req.body.category,
            vaccant:req.body.vaccant,
            extraServices:req.body.extraServices,
            price:req.body.price,
            phone:req.body.phone,
            email:req.body.email,
            image1:imagesarray[0],
            image2:imagesarray[1],
            image3:imagesarray[2],
        }
          console.log(imagesarray) 
        //sql
        const sql = "INSERT INTO propertypost set ?";
        //execute
        con.query(sql,postdata,(err,result)=>{

            if(err){
                const error={
                    posted:false,
                    failedError:`${message.name}>>>Failed Post not created!!`
                }
                res.send( error);
                console.log(err);
            }else{
                res.send(`${message.name}>>>Property Added!!`);
                console.log(imagesarray)
            }
        }) 
 }
});

//upload mastermind respect
routes.post('/her',upload.array('image',3),(req,res)=>{
    const imagesarray=[];
    req.files.map((file)=>{
        imagesarray.push(file.filename);

    })
    console.log(imagesarray)
    console.log(req.body)
    res.send("gettin")
})

// viewingg and loading all properties
routes.get('/viewproperties',(req,res)=>{
    //get routes properties in the database
    
    const sql = "SELECT * FROM propertypost";
    con.query(sql,(err, results)=>{
        if(err){
            res.send(`${message.error} Failed ` )
            console.log(err)
        }else{
            res.send(results);
        }
    })
})
// route to load specific post
routes.post('/oneproperty',(req,res)=>{
const landlordId= req.body.landlordId;

const sql = "SELECT * FROM propertypost WHERE landlordId=?";
    con.query(sql,[landlordId],(err, results)=>{
        if(err){
            res.send(`${message.error} Failed ` )
            console.log(err)
        }else{

            JSON.stringify(results)
            res.send(results);
            
        }
    })
 
})

routes.post('/profile',(req,res)=>{
    const userId = req.body.userId;
    const landlordId = req.body.landlordId;
    console.log(userId + landlordId)
})
routes.post('/deleteproperty',(req,res)=>{
    const postId= req.body.postId;
    //sql 
    const sql = "DELETE FROM   propertypost WHERE postId =?";
    //execute
    con.query(sql,postId,(err,results)=>{
        const status={
            failed:"Failed an error occured! try again",
            success:"Successfully delete your propert ypost ",
        }
        if(err){
            console.log(err);

            res.send(status.failed);

        }else{
            
            res.send(status.success);
            
        }
    })
})

module.exports=routes;