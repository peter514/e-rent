// modules imports
const express=require('express');
const con = require('../Configuration');
const routes= express.Router();
const message= require('../messages');
const  Randomstring =require('randomstring') ;
const { route } = require('./PropertiesRoutes');




routes.post('/message',(req,res)=>{
 // generate message iD
 const random  = Randomstring.generate({
    length:9,
    charset:'alphanumeric'
});
const messageId = `message-${random}`;

    const messageData={
        messageId:messageId,
        userId:req.body.userId,
        userName:req.body.userName,
        landlordId:req.body.landlordId,
        propertyName:req.body.propertyName,
        message:req.body.message


    }
 
// insert 
        const sql = "INSERT INTO message SET ?"
        //EXECUTE
        con.query(sql,messageData,(err,results)=>{
          if(err){
              console.log(err);
              res.send('Message not sent')
          }else{
              const successMessage={
                  sent:true,
                  message:'Message sent!'
              }
              res.send(successMessage);
          }
        })

})

routes.post('/viewmessages',(req,res)=>{
 const userId = req.body.userId
 const landlordId = req.body.landlordId
 if(userId!=null){
     //sql 
     const sql =" SELECT * FROM message WHERE userId = ? "
     con.query(sql, userId, (err,results)=>{
         if(err){
             console.log('Failed:'+ err)

         }else{
             res.send(results);
         }
     })
     return 0;
 }
 if(landlordId!=null){
      //sql 
      const sql =" SELECT * FROM message WHERE landlordId = ? "
      con.query(sql, landlordId, (err,results)=>{
          if(err){
              console.log('Failed:'+ err)
 
          }else{
              res.send(results);
          }
      })
      return 0;
 }

})

module.exports = routes