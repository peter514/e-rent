//module imports
const express= require('express');
const cors = require('cors');
const register = require('./Register-login-routes/Register');
const login = require('./Register-login-routes/Login');
const AddPost = require('./processesRoutes/PropertiesRoutes');
const Booking = require('./processesRoutes/BookingRoutes');
const messageFromuser = require('./processesRoutes/messageFromuser');
const bodyparser = require('body-parser')
const path = require('path')
//init express
const app = express();
// initializing middlewares
app.use(cors({
    origin: '*'
}))

//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//init body parser
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))



app.use( express.static(path.join(__dirname, 'public')));
app.use('/images',express.static('public/images'));
// routes
app.use('/api',register);
app.use('/api', login);
app.use('/api', AddPost);
app.use('/api', Booking);
app.use('/api', messageFromuser);


// congfiguring a port
const PORT = process.env.PORT||5000;

//assigning port to my app
app.listen(PORT, ()=>{
    const Hours= new Date().getHours();
    const mins = new Date().getMinutes();
    console.log(`Server runing on port ${PORT}...`);
    console.log(`Server Time : ${Hours}:${mins}`)
})

