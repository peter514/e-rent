import axios from "axios";
import { useState,useEffect } from "react";
import swal from "sweetalert";
import DashboardNavuser from "../components/DashboardNavuser";
import Footer from "../components/Footer";
import SideNav from "../components/SideNav";
import {MdMessage} from 'react-icons/md'
import { useNavigate } from "react-router-dom";

function SendMessage(){
    const [message,setMessage]= useState();
    const landlordId = localStorage.getItem('landlordId');
    const propertyName = localStorage.getItem('propertyName');
    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');
    
    const send= ()=>{
        if(!message){
            swal({
                title:'sorry',
                text:'please Tpye a message',
                icon:'info'
            })
            return 0;
        }
        axios.post('http://localhost:5000/api/message',
        {
            message:message,
            landlordId:landlordId,
            propertyName:propertyName,
            userId:userId,
            userName:userName
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
    const [auth , setAuth] =useState()
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
            <div className="row">
                <DashboardNavuser/>
            <div className="col s3">
            <SideNav/>
            </div>
            <div className="col s6">
            
             <div class="form-container">
                          <h4 className='green accent-4 modal-styles'> <MdMessage/>Send a Message </h4>
                          <h5>Send to: {localStorage.getItem('propertyName')}</h5>
                         
                          <h5>From : {localStorage.getItem('userName')}</h5>
                          
                          <div class="row">
                          <div class="input-field col s12">
                            <textarea id="textarea1" class="materialize-textarea"
                            onChange={(e)=>{setMessage(e.target.value)}}
                            ></textarea>
                            <label for="textarea1">Type your message, question, inquary etc...</label>
                          </div>
                        </div>

                         <div className="row">
                        
                        
                          <button  className=" waves-effect waves-green btn green accent-4 " onClick={send}>Send</button>
                        </div>
                        </div>
            </div>
            </div>
            <div>
                <Footer/>
            </div>

        </div>
    )

}
export default SendMessage;