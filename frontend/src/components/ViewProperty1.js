import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min.js'
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {RiReservedFill} from 'react-icons/ri'
import {MdLocationPin,MdSms} from 'react-icons/md'



function ViewProperty1(){
    useEffect(
      
        ()=>{
          
            M.AutoInit();          
          
        }
      )
      
      const [propertyName,setPropertyName]=useState();
      const [posts, setPosts]=useState([]);
      useEffect(()=>{
        let mounted = true
        axios.get('http://localhost:5000/api/viewproperties'
            
        ).then((res)=>{
         if(mounted){
          setPosts(res.data)
          
         }

        }).catch(err=>{console.log(err)})
        return function cleanup() {
          mounted = false
          console.log('unmounted')
      }
      },[])   
      const navigate= useNavigate();
      
 return(
<div>
<p>{posts.length} properties found... </p>
                     
{ 
                  
                  posts.map((post,postId)=>{
                   
                   const toBooking =()=>{
                     localStorage.setItem('propertyName',post.propertyName);
                     localStorage.setItem('landlordPhone', post.phone);
                     localStorage.setItem('landlordEmail', post.email);
                     localStorage.setItem('landlordId', post.landlordId);
                     localStorage.setItem('postId',post.postId)
                     localStorage.setItem('vaccant', post.vaccant)
                     navigate('/Booking');
                     
                   }
                   const tosendMessage=()=>{
                     localStorage.setItem('propertyName', post.propertyName);
                     localStorage.setItem('landlordId',post.landlordId)
                     navigate('/SendMessage')
                   }
                   const toMaps =()=>{
                    navigate('/CustomMaps')
                  }
                    return(
                 
                 <div className="row " key ={postId}>
                  <div className="col s12 ">
                 <div className="card form-container">
                   <div className="card-image">
                   <div className='view-display ' >
                      <img src={post.image1} className="responsiv-image view-image materialboxed " alt='property design' />
                      <img src={post.image2} className="responsiv-image view-image materialboxed" alt='house 2'/>
                      <img src={post.image3} className="responsiv-image view-image materialboxed " alt='home picha' />
                   </div>
                     
                   </div>
                   <div className="card-content text-display" key={postId}>
                     <hr/>
                    <ul type="none" className='card-list'>
                      <div className='row'>
                      <div className='col s8 center-align' >
                        <li ><label>Property Name:</label> {post.propertyName}</li>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col s6'>
                        <li><label>Category:</label>  {post.category}</li>
                        </div>
                        <div className='col s6'>
                        <li><label>Vaccancies :</label>  {post.vaccant}</li>
                        </div>
                     <div className='row'>
                         <div className='col s6'>
                         <li><label>Extra services:</label>  {post.extraServices}</li>
                         </div>
                         <div className='col s6'>
                         <li><label>Price: </label>  {post.price}</li>
                         </div>
                     
           
                     </div>
                            
                                
                      </div>
                      <div>
                        <label>Contact informatio:</label>
                        <div className='row'>
                       <div className='col s6'>
                       <li><label>Phone Number:</label>   {post.phone}</li>
                       </div>
                       <div className='col s6'>
                       <li><label>Email Address:</label> {post.email}</li>
                       </div>
           
                     </div>
                      </div>
                        
                    </ul>
           
                   </div>
                   <div className="card-action">
                   <div className='buttons-display'>
                     <button className='btn btn-primary green accent-4' onClick={toBooking}><RiReservedFill/> Book now</button>
                     <button className='btn btn-primary green accent-4' onClick={toMaps}><MdLocationPin/>  View Location</button>
                                                             
                    
                     <button className='waves-effect waves-light btn green accent-4' 
                    onClick={tosendMessage}

                      > <MdSms/>Message Owner
                      
                      </button> 

                              
           
                   </div>
                   </div>
                 </div>
               </div>
             </div>
                      )
                      
                    
                  })
           
                }
        
</div>

 )

}
export default ViewProperty1;