import SideNav from "../components/SideNav";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardNavuser from '../components/DashboardNavuser';
import DashboardNav from '../components/DashboardNav';
import swal from "sweetalert";
import {FaUser} from 'react-icons/fa';
import {MdOutlineLogout} from 'react-icons/md'
import {RiAccountCircleFill} from 'react-icons/ri'
import axios from 'axios'


function UserProfile(){
  const [firstName, setFirstName]= useState('');
  const [secondName, setSecondName]= useState('');
  const [email, setEmail]= useState('');
  const [phone, setPhone]= useState('');
  const [password, setPassword]= useState('');
  const [apartmentName,setApartmentName]= useState();
const [userId, setUserId] = useState('');
const [landlordId, setLandlordId] = useState('');



const register=()=>{
  if(!firstName ||!secondName ||!email ||!phone ||!password||!apartmentName){
    
    swal({
      title:'Failed',
      text:'Enter all fields!',
      icon:'error'
    }) 
    return 0;
  }else{
     // api req here 
  axios.post('http://localhost:5000/api/registerLandlord',
  {
     firstName: firstName,
     secondName:secondName,
     apartmentName:apartmentName,       
     email:email,
     phone:phone,
     password:password,
    

  }
  ).then((res)=>{
    const message="Email Already Exists!!";
    const status = {       
      resMessage:res.data,
      registered:res.data.registered,
      failedText:res.data.failedText,
      successMessage:res.data
    
    };
    if(message==status.resMessage){
      swal({
        title:'Failed!',
        text:res.data,
        icon:'error'
      })
      
    }
    else if(status.registered==false){
     swal({
       title:'Failed',
       text:status.failedText,
       icon:'error',
     })
   
     
    }else{
    
      swal({
        title:'Account Updated!',
        text:status.successMessage,
        icon:'success'
      })
       
    }

  }
  
  
  ).catch((err)=>{
    if(err){
      console.log(err.response);
      console.log(err.response.data)
    }
  });
  }
 

  
}
 
const navigate= useNavigate();
const Logout= ()=>{
  swal({
    text: 'Logged Out',
        icon:'info',
    })
  localStorage.clear();
  navigate('/loginLandlord')
}
  return(
<div className="row my-container">
<div>
          <div className="">
        <nav>
          <div class="nav-wrapper blue-grey">
            <a href="#" class="brand-logo">E-RENT</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a><FaUser/> </a></li>
              {/* <li><a > <img className="user-image" src={userPicture}/></a></li> */}
              <li><a onClick={Logout}><MdOutlineLogout/> Logout</a></li>
            </ul>
          </div>

         </nav>
        </div>
      </div>

  <div className="col s2" >
    <SideNav/>
  </div>
  <div className="col s8" >
  <div className="row form-container " >
 
 <form className="col s12">
 <p className="center-align"><h5><RiAccountCircleFill/> </h5> Edit your account</p>
 <hr/>
   <div className="row">
     <div className="input-field col s6">
       <input  id="first_name" type="text" className="validate" required
       onChange={(e)=>{setFirstName(e.target.value)}}
       
       />
       <label for="first_name">First Name</label>
     </div>
     <div className="input-field col s6">
       <input id="secondName" type="text" className="validate" required
       onChange={(e)=>{setSecondName(e.target.value)}}
       />
       <label for="secondName">Second Name</label>
     </div>
   </div>
   
   <div class="row">
     <div class="input-field col s12">
       <input id="email" type="email" class="validate" required
       onChange={(e)=>{setEmail(e.target.value)}}
       />
       <label for="email">Email</label>
     </div>
     </div>
     <div className="input-field col s12">
                  <input id="hostel-name" type="text" className="validate" required
                  onChange={(e)=>{setApartmentName(e.target.value)}}
                  />
                  <label for="hostel-name">Apartment/hostel/house name</label>
                </div>
     <div class="row">
     <div class="input-field col s6">
       <input id="phone" type="number" class="validate"
       onChange={(e)=>{setPhone(e.target.value)}}
       />
       <label for="phone">Phone number.</label>
     </div>
     <div className="col s6">

     </div>
   </div>

   <div className="row">
     <div class="input-field col s8">
       <input id="password" type="password" class="validate" required
       onChange={(e)=>{setPassword(e.target.value)}}
       />
       <label for="password">Password</label>
     </div>
     
   </div>
  
   <div className="row">
     
   </div>
   <div className=" center-align">
   <button class="green accent-4 btn waves-effect waves-light blue-grey " type="button" name="" onClick={register}>Submit
 
     </button>
     
   </div>
 </form>
</div>
  </div>
</div>



  );

}
export default UserProfile;