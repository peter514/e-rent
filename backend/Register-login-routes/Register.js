// module imports 
const expres = require('express');
const bcrypt = require('bcrypt');
const express=require('express');
const con = require('../Configuration');
const routes= express.Router();
const message= require('../messages');
const randomstring = require('randomstring');

//create user account route

routes.post('/registerUser',(req,res)=>{
    //catpuring data i need 
        const firstName = req.body.firstName;
        const secondName = req.body.secondName;
        const email = req.body.email;
         const phone = req.body.phone;
        const password = req.body.password;
        const additionalInformation = req.body.additionalInformation;
        //generating a random user id by combining frisrname with a random string 
        const random = randomstring.generate({
            length:9,
            charset:'alphanumeric'
        });
        const userId =`${firstName}-${random}`;




        //check whether the email already exist in the database 
        const sql = "SELECT *FROM user WHERE email = ? ";
        con.query(sql,[email],(err, results)=>{
            if(err){
                console.log(err);
            }
            else if(results<=0){
                 // hashing the passwords
         const salt = 5;
         bcrypt.genSalt(salt, (err)=>{
             if(err){
                 throw err;
             }else{
                bcrypt.hash(password,salt,(err,hashedpassword)=>{
                    if(err){
                        console.log(err);
                    }
                    
                    //query to send information to the database
                    const sql = "INSERT INTO user VALUES(?,?,?,?,?,?,?)";
                    
                    // executing the query        
                    con.query(sql,[userId, firstName,secondName,email,phone,hashedpassword,additionalInformation],(err,result)=>{
                    if(err){
                       return res.send(`Erent system>>>${message.error} ${err}`);
                    }
                    const success = `${message.name}>>>Thank you ${firstName}.. ${message.userSuccess}`
                    res.send(success);
                    
                    
                    })
                    })
             }
         });
            }else{
                res.send("Email Already Exists!!");
    
            }
        })
        
       

          
    
        
    });

    // create landlord account route

routes.post('/registerLandlord',(req,res)=>{
    //capturing data to send to database
    const firstName= req.body.firstName;
    const secondName= req.body.secondName;
    const apartmentName= req.body.apartmentName;
    const phone= req.body.phone;
    const email= req.body.email;
    const password= req.body.password;
    // genereating a landlord id 
    const random  = randomstring.generate({
        length:9,
        charset:'alphanumeric'
    })
    const landlordId = `${firstName}-${random}`;

    // check if email exist in database
    const sql = "SELECT * FROM landlord WHERE email =?";
    con.query(sql,[email], (err,results)=>{
        if(err){
            console.log(err);
        }
        else if(results<=0){
            // hashing the passwords
    
    const salt = 5;
    bcrypt.genSalt(salt,(err)=>{
        if (err){
            throw err;
        }else{
            bcrypt.hash(password,salt,(err,hashedpassword)=>{
                if(err){
                    console.log(err);
                }
                
                //query to send information to the database
                const sql = "INSERT INTO landlord VALUES(?,?,?,?,?,?,?)";
                
                // executing the query
                
                con.query(sql,[landlordId,firstName,secondName,apartmentName,phone,email,hashedpassword],(err,result)=>{
                if(err){ 
                    const Failed = {
                        registered:false,
                        failedText:'Failed try again later'
                    }
                    res.send(Failed);
                    console.log(`Erent system>>>${message.error} ${err}`);
                }else{
                 res.send(`${message.name}>>>Thank you ${firstName}... ${message.LandlordSuccess}`);
                }
                
                
                })
                })
        }
    })
            
        }else{
             
            res.send("Email Already Exists!!");
        }

    });
    
   
    
    });
    
module.exports= routes;