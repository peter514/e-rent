import DashboardNavuser from "../components/DashboardNavuser";
import SideNav  from "../components/SideNav";
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer'
import M from 'materialize-css/dist/js/materialize.min.js'
import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";

//import swal from "sweetalert";

function Booking(){
    useEffect(()=>{
        M.AutoInit();
    })
    const [auth,setAuth]= useState();
   
   
      
    //form states 
    const [userName, setUserName]= useState();
    const [phone, setPhone]= useState();
    const [email, setEmail]= useState();
    const [noOfRooms, setRooms] = useState(1);
    const [dateIn, setDateIn] = useState();
   
    
    //from localstorage
    const userId= localStorage.getItem('userId');
    const postId = localStorage.getItem('postId');
    const propertyName = localStorage.getItem('propertyName');
    const landlordId = localStorage.getItem('landlordId');
    const landlordPhone = localStorage.getItem('landlordPhone');
    const landLordEmail = localStorage.getItem('landlordEmail');
    const vaccant = localStorage.getItem('vaccant')
     const [note, setNote]=useState('');
    
     const booking=()=>{   
         if(!userName ||!phone || !email||!noOfRooms||!dateIn){
             swal({
                 text:'Enter all required Fields',
                 icon:'warning'
             })
            return 0;

         }
       
          if (noOfRooms<1){
            swal({
                title:'Sorry',
                text:'Enter Valid No Of Rooms',
                icon:'warning'
            })
            return 0;
         }

                 
            axios.post('http://localhost:5000/api/book',
            {
              userId:userId,
              postId:postId,
              userName:userName,
              phone:phone, 
              email:email,
              noOfRooms:noOfRooms,
              dateIn:dateIn,
              propertyName:propertyName,
              landlordId:landlordId,
              landlordPhone:landlordPhone,
              landlordEmail:landLordEmail,
              vaccant:vaccant
             
            }
            ).then((res)=>{
              const errorText= res.data.status;
              const errorText2 = res.data.status2;
                if(errorText===false){
                  swal({
                      title:'booking status',
                      text:res.data.message,
                      icon:'error'
                  })
      
                }
                else if(errorText2===false){
                    swal({
                      title:'sorry',
                      text:res.data.message,
                      icon:'info'
                    })
                    return 0;
                }
                
                else{
                   swal({
                      title:'Booked successfully!',
                      text:res.data,
                      icon:'success'
                  })
                  setNote('Check Your email for your booking details and acknowledgement');
                 // remove localstorage details
                 localStorage.removeItem('landlordEmail');
                 localStorage.removeItem('landlordId')
                 localStorage.removeItem('landlordPhone');
                 localStorage.removeItem('propertyName');
                 localStorage.removeItem('postId')
                 localStorage.removeItem('vaccant')
                 //navigate('/userDashboard')

                }
              
                    
            })
         
      

        
        
     }
     useEffect(()=>{
        setAuth(localStorage.getItem('login'))
      },[])
      const navigate = useNavigate();
      if(!auth){
      return(
        <div>
          {navigate('/NotLogedin')}
        </div>
      ) 
      return 0;
      }
return(
     <div className="my-container">
      
        <DashboardNavuser/>
        <div className="row "style={{'marginTop':'10px'}} >
        
            <div className="col s3">
                <SideNav/>
            </div>

        {/* booking component */}
        <div className="col s7" style={{'margin':'5px'}}>
           <div className="form-container" >
               <h5 className="center-align">Booking Form</h5>
               <hr/>
               <div className="row">
                   <p className="center-align">Your detail:</p>
               <div className="row">
                <div className="input-field col s6">
                <input  id="name" type="text" className="validate" required
                onChange={(e)=>{setUserName(e.target.value)}}
                />
                <label for="name">Name</label>
                </div>
                <div className="input-field col s6">
                <input id="phone" type="text" className="validate" required 
                onChange={(e)=>{setPhone(e.target.value)}}
                />
                <label for="last_name">phone</label>
                </div>
               </div>
               <div className="input-field col s9">
               <label >Email </label>
                <input id="email" type="email" className="validate" required
                onChange={(e)=>{setEmail(e.target.value)}}
                />
                
                </div>

               </div>


               <div className="row">
               <p className="center-align">Apartment/ hostel details:</p>
               <div className="row">
                <div className="input-field col s8">
                <p>Property Name </p>
                <input  id="propertyName" type="text" className="validate" value={propertyName} disabled required/>
                
                </div>
                
                
               </div>
               <div className="row">
                

                <div className="input-field col s6">
                <p>Intended Move-In Data</p>                    
                <input type="date" className=""
                onChange={(e)=>{setDateIn(e.target.value)}}
                />      
                
                </div>
                
               </div>

               <div className="row">
                <p style={{'marginLeft':'5px'}}>Contact information:  </p>
                <div className="input-field col s6">
                <p>landlord Phone </p>
                <input  type="text" className="validate" value={landlordPhone} required disabled/>
                
                </div>
                <div className="input-field col s6">
                <p>Landlord Email</p>
                <input id="landLordEmail" type="email" className="validate" value={landLordEmail} required disabled/>
                
                </div>
                
               </div>
                       
               </div>
               <button className="green accent-4 waves-effect waves-light btn my-button" onClick={booking}>book</button>
               {(function() {
                if (!note) {
                    return <p></p>;
                } else {
                    return <p className="green accent-4 note white-text">{note}</p>;
                }
                })()}
           </div>
           
        </div>
      
    </div>
    <Footer/>
    </div>

)
}
export default Booking;