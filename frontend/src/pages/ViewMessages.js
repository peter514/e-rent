import SideNav from "../components/SideNav";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import {FaUser} from 'react-icons/fa';
import {MdOutlineLogout} from 'react-icons/md'
import {RiAccountCircleFill} from 'react-icons/ri'
import axios from 'axios'



function UserProfile(){
    const [sendReply,setReply] = useState();
 const[messages, setMessages]= useState([]);
 const userId= localStorage.getItem('userId');
 const landlordId= localStorage.getItem('landlordId');
 useEffect(()=>{
    let mounted = true
    axios.post('http://localhost:5000/api/viewmessages',{
     userId:userId,
     landlordId:landlordId
    }
        
    ).then((res)=>{
     if(mounted){
      setMessages(res.data)
    
      
     }

    }).catch(err=>{console.log(err)})
    return function cleanup() {
      mounted = false
      console.log('unmounted')
  }
  },[])
 
const navigate= useNavigate();
const Logout= ()=>{
    localStorage.clear();
  swal({
    text: 'Logged Out',
        icon:'info',
    })

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

  <div className="col s3" >
    <SideNav/>
  </div>
  
  <div className="col s8 form-container" >
  {messages.length} messages available
      {
          messages.map((message,messageId)=>{
            const reply= ()=>{
                if(!sendReply){
                    swal({
                        title:'sorry',
                        text:'please Tpye a reply message',
                        icon:'info'
                    })
                    return 0;
                }
                axios.post('http://localhost:5000/api/message',
                {
                    message:sendReply,
                    landlordId:message.landlordId,
                    propertyName:message.propertyName,
                    userId:message.userId,
                    userName:message.userName
                }
                
                ).then((res)=>{
                    const status = {
                        sent:res.data.sent,
                        message:res.data.message
                    };
                    if(status.sent){
                        swal({
                            title:'success',
                            text:'Message sent',
                            icon:'success'
                        })
                        localStorage.removeItem('propertyName')
                        localStorage.removeItem('LandlordId')
                    }else{
                        swal({
                            title:'Error',
                            text:'message not sent',
                            icon:'error'
                        })
                    }
                    
                   
                    
                })
            }

            return(
                <div>
                            
            <div class="row " key={messageId}>
                <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <span class="card-title">User name : {message.userName}</span>
                    <span class="card-title">Property name : {message.propertyName}</span>
                    <p>
                       { message.message}
                    </p>
                    </div>
                    <div class="card-action white-text">
                    
                <div class="row">
                    <form class="col s12">
                    <div class="row">
                        <div class="input-field col s12">
                        <textarea id="textarea1" class="materialize-textarea" 
                        onChange={(e)=>{setReply(e.target.value)}}
                        ></textarea>
                        <label for="textarea1">Reply...</label>
                        </div>
                    </div>
                    </form>
                </div>
        
                   <button className="btn green accent-4 " onClick={reply}>Send</button>
                    </div>
                </div>
                </div>
            </div>
            

                </div>

            )
          })
      }
    
  </div>
</div>



  );

}
export default UserProfile;

