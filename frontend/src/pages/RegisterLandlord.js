import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min.js';
import swal from 'sweetalert';
import {RiAccountCircleFill} from 'react-icons/ri'

//components imports
import CreateaccountNav from "../components/CreateaccountNav";
import Footer from "../components/Footer";

function RegisterLandlord(){
  useEffect(()=>{
    M.AutoInit();

  },[])
  const navigate = useNavigate();
  // form data capture
  const [firstName, setFirstName]= useState('');
  const [secondName, setSecondName]= useState('');
  const [apartmentName, setApartmentName]= useState('');
  const [phone, setPhone]= useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  
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
          title:'Account created!',
          text:status.successMessage,
          icon:'success'
        })
         navigate('/LoginLandlord')
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
    return(
        <div className="my-container">
        <CreateaccountNav/>
        
        <div className="row form-height" >  
        <div className="col s3" >
        
        
        </div>      
        <div className="col s6">
          
        <div className="row form-container center" >
        <p className='center-align'><h5><RiAccountCircleFill/> </h5> Create accent</p>
        <hr/>
            <form className="col s8">
              <div className="row">
                <div className="input-field col s6">
                  <input  id="first_name" type="text" className="validate" required
                  onChange={(e)=>{setFirstName(e.target.value)}}
                  />
                  <label for="first_name">First Name(Owner/landlord)</label>
                </div>
                <div className="input-field col s6">
                  <input id="last_name" type="text" className="validate" required
                  onChange={(e)=>{setSecondName(e.target.value)}}
                  />
                  <label for="last_name">Last Name(Owner/landlord)</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="hostel-name" type="text" className="validate" required
                  onChange={(e)=>{setApartmentName(e.target.value)}}
                  />
                  <label for="hostel-name">Apartment/hostel/house name</label>
                </div>
                </div>
                
                <div className="input-field col s6">
                  <input id="number" type="number" className="validate"
                  onChange={(e)=>{setPhone(e.target.value)}}
                  />
                  <label for="number">Phone number.</label>
                </div>
              <div className="row">
                <div class="input-field col s12">
                  <input id="email" type="email" className="validate" required
                  onChange={(e)=>{setEmail(e.target.value)}}
                  />
                  <label for="email">Email</label>
                </div>
                </div>
                
        
              <div className="row">
                <div className="input-field col s6">
                  <input id="password" type="password" className="validate" required
                  onChange={(e)=>{setPassword(e.target.value)}}
                  />
                  <label for="password">Password</label>
                </div>
               
              </div>
             
              <div className=" center-align">
              <button className="green accent-4 btn waves-effect waves-light blue-grey " type="button" onClick={register} >Submit
            
                </button>
              </div>
            </form>
          </div>
                
        </div>
        
       
        </div>
        
        
        
        <Footer/>
        
        </div>
        
    );
    
    }
    export default RegisterLandlord;