import {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
//import nav  and footer component
import CreateaccountNav from '../components/CreateaccountNav';
import Footer from '../components/Footer';
import {RiAccountCircleFill} from 'react-icons/ri'




function RegisterUser(){
  const navigate= useNavigate();
  //form data capture  
  const [firstName, setFirstName]= useState('');
  const [secondName, setSecondName]= useState('');
  const [email, setEmail]= useState('');
  const [phone, setPhone]= useState('');
  const [password, setPassword]= useState('');
  const [additionalInformation, setAdditionalInformation]= useState('');

  const register=()=>{
    
    if(!firstName ||!secondName ||!email ||!phone ||!password){      
      swal({
        title:"Failed!",
        text:"Enter all field!!",
        icon:"error"
      })
    }else{
       // api req here 
    axios.post('http://localhost:5000/api/registerUser',
    {
       firstName: firstName,
       secondName:secondName,
       email:email,
       phone:phone,
       password:password,
       additionalInformation:additionalInformation

    }
    ).then((res)=>{
      const message="Email Already Exists!!"
      if(message==res.data){
        swal({
          title:"Failed",
          text:res.data,
          icon:"error"
        })
       
        
      }
      else{
         swal({
           title:"Account created!",
           text:res.data,
           icon:"success"
         })
      navigate('/LoginUser')
       
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
 <div className="row form-container " >
 
    <form className="col s12">
    <p className="center-align"><h5><RiAccountCircleFill/> </h5> Create a user account</p>
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
        <div className="col s12">
          Any additional information(Optional):
          <div className="input-field  inline col s12">
          <textarea id="textarea" className="materialize-textarea" 
          onChange={(e)=>{setAdditionalInformation(e.target.value)}}
          ></textarea>
          <label for="textarea">Textarea</label>
        </div>
        </div>
      </div>
      <div className=" center-align">
      <button class="green accent-4 btn waves-effect waves-light blue-grey " type="button" name="" onClick={register}>Submit
    
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
export default RegisterUser;