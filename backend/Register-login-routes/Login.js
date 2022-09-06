// modules imports
const express=require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const con = require('../Configuration');
const routes= express.Router();
const message= require('../messages');
const { userSuccess } = require('../messages');

routes.use(session({
	secret: 'this is my looogn seeret keyyyss',
	resave: true,
	saveUninitialized: true
    
}));

//routes
//loging user route
routes.post('/login/user',(req,res)=>{
    const  email = req.body.email;
	const  password = req.body.password;
    
	// Ensure the input fields exists and are not empty
	if (email && password) {
		
        // Execute SQL query that'll select the account from the database based on the specified email and password
		const sql = 'SELECT * FROM user WHERE  email = ?';
        con.query(sql, [ email], function(error, results) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length ===1 && email == results[0].email) {
				// compare password and Authenticate the user
                
                const passwordIndb = results[0].password;                           
                 bcrypt.compare(password,passwordIndb,(err,isMatch)=>{
                   if(err){
                   return console.log(err)
                   }
                   else if(!isMatch){
                       const failed={
                        login:false,
                        message1:`${message.processError}>>>Incorrect password and/or email!`}
                        res.send(failed);
                    }else{
                       const details = {
                           name:results[0].firstName,
                            email:results[0].email,
                            userId:results[0].userId
                        };        
                        const success ={
                            name:req.session.name= details.name,
                            email:req.session.email = details.email,
                            userId:req.session.userId=details.userId,
                            login:req.session.loggedin = true,
                            message2:`${message.name}>>>Loged in as: ${details.name} Email:${details.email}`,

                        }       

				              res.send(success);
                            }})
               
            


                
			 }
             	else{
                    //non existing email
                    const NoEmail = {
                        NoEmailError:`${message.processError}>>>Incorrect password and/or email${results.length}`
                    }
                res.send(NoEmail)
            }	
		});

	} else {
		res.send('Please enter Email and Password!');
		res.end();
	}
 });

// login landlord route
routes.post('/login/landlord',(req,res)=>{
    const  email = req.body.email;
	const  password = req.body.password;
    
	// Ensure the input fields exists and are not empty
	if (email && password) {
		
        // Execute SQL query that'll select the account from the database based on the specified email and password
		const sql = 'SELECT * FROM landlord WHERE  email = ?';
        con.query(sql, [ email], function(error, results) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length ===1 && email == results[0].email) {
				// compare password and Authenticate the user
                
                const passwordIndb = results[0].password;                           
                 bcrypt.compare(password,passwordIndb,(err,isMatch)=>{
                   if(err){
                   return console.log(err)
                   }
                   else if(!isMatch){
                       const failed={
                        login:false,
                        message1:`${message.processError}>>>Incorrect password and/or email!`}
                        res.send(failed);
                        
                    }else{
                       const details = {
                           landlordId:results[0].landlordId,
                           name:results[0].firstName,
                            email:results[0].email,
                            apartment:results[0].apartmentName
                        };        
                        const success ={
                            name:req.session.name= details.name,
                            landlordId:res.session=details.landlordId,
                            email:req.session.email = details.email,
                            apartment:req.session.apartment= details.apartment,
                            login:req.session.loggedin = true,
                            message2:`${message.name}>>>Loged in as: \n Name: ${details.name}\n Apartment:: ${details.apartment}`,

                        }       
                        
				              res.send(success);
                            }})
               
            


                
			 }
             	else{
                    //non existing email
                    const NoEmail = {
                        NoEmailError:`${message.processError}>>>Incorrect password and/or email${results.length}`
                    }
                res.send(NoEmail)
            }	
		});

	} else {
		res.send('Please enter Email and Password!');
		res.end();
	}
 });
module.exports= routes;