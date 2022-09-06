import { useNavigate } from 'react-router-dom';
import { useState , useEffect} from 'react';

import axios  from 'axios';
import {FaUserCircle} from 'react-icons/fa'
import {RiLockPasswordFill} from 'react-icons/ri'
import {MdOutlineVpnKey} from 'react-icons/md'

//importing  login nav and the login footer
import LoginNav from '../components/LoginNav';
import Footer from '../components/Footer';
import swal from 'sweetalert';


function LoginLandlord(){
  
let navigate= useNavigate();
const toLoginUser=()=>{
  navigate('/LoginUser')
}

//creating navigation
const [email, setEmail]=useState('');
const [password, setPassword]= useState('');


const login= ()=>{
 if(!email || !password){
   swal({
     title:"Failed!",
     text:"Email and Password are required!!",
     icon:"error"
   })
 } else {
   // api req here 
   axios.post('http://localhost:5000/api/login/landlord',
   {
     email:email,
      password:password

   }
   ).then((res)=>{
     
    const status= {
     LandlordId:res.data.landlordId,
     email: res.data.email,
     name:res.data.name,
     login:res.data.login,
     message1:res.data.message1,
     message2:res.data.message2,
     NoEmailError:res.data.NoEmailError
     }
         if(status.login===false){
          swal({
            title:'Failed',
            text:status.message1,
            icon:'error'

          })
           
         }        
         else if (status.NoEmailError){
          swal({
            title:'Failed',
            text:status.NoEmailError,
            icon:'error'

          })
          
         }
         else if(status.login===true){
          //create and store user sessions here
       
            localStorage.setItem('userName',status.name);
            localStorage.setItem('email',status.email);
            localStorage.setItem('landlordId',status.LandlordId);
            localStorage.setItem('login', true);
          swal({
            title:'Welcome',
            text:status.message2,
            icon:'success'

          })
          // if(ReactSession.get(login)==true){
          //   
          // }
          navigate('/LandlordDashboard');
          
          
        }else{
          swal({
            title:'Failed!',
            text:status.NoEmailError,
            icon:'error'

          })
         }
   

   }
   
   
   ).catch((err)=>{
     if(err){
       console.log(err)
     }
   });
   }
 


}


    return(
<div className="my-container">
<LoginNav/>
  
<div className="row form-height " >


 <div className="col s3">
 
 </div>
 
 <div className=" col s4 " >
 
    <form className="center-align form-container">
      
    <div className="row center-align" >
        <p><h5><FaUserCircle/></h5> LandLord  login</p>
        <hr/>
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" required 
          onChange={(e)=>{setEmail(e.target.value)}}
          />
          <label for="email"><FaUserCircle/> Email</label>
        </div>
        
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate" required
          onChange={(e)=>{setPassword(e.target.value)}}
          />
          <label htmlFor="password"><RiLockPasswordFill/>Password</label>
        </div>
        
      </div>
     
      
      <div className=" center-align">
         <button className=" green accent-4 btn waves-effect waves-light blue-grey " type="button" name="" onClick={login} ><MdOutlineVpnKey/> Login    
         </button>
         <a className="  blue-text  my-button my-mouse" onClick={toLoginUser} >Login As User Instead?</a>
      </div>
    </form>
  </div>
        



</div>

<Footer/>


</div>



    );
}
export default LoginLandlord;