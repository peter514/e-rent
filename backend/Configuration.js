const mysql = require('mysql');


const con = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        database:'erent',
        password:'12345'
    }
);

//creating connection 
const connection = con.connect((err)=>{
    if(err){
        console.log(`Can not connect to the database ${err}`);
    }else{
        console.log('Database connected...');
    }
   

})


module.exports = con,connection;