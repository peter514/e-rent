import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min.js'
import {useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react';
import {MdEdit,MdOutlineDeleteOutline} from 'react-icons/md'
import swal from 'sweetalert';

function ViewPropertyLandlord(){
    useEffect(
        ()=>{
            
          M.AutoInit();
          
        },
        
      )
      const [posts, setPosts]=useState([]);
      useEffect(
        ()=>{
           const landlordId = localStorage.getItem('landlordId');
           let mounted = true
              axios.post('http://localhost:5000/api/oneproperty',
                
              {
                landlordId:landlordId
              }
                  
              ).then((res)=>{
               if(mounted){
                 setPosts(res.data)

             
                
               }
      
              }).catch(err=>{console.log(err)})
              return function cleanup() {
                mounted = false
                console.log('unmounted')
            }
          
        },
        []
      )
      const navigate = useNavigate();     
 return(
<div>
    <p>{posts.length} properties found</p>
   <div>
     {
       
       posts.map((post,postId)=>{
        const deleteProperty= (bookId, e)=>{
          axios.post('http://localhost:5000/api/deleteproperty',
          {
              postId:post.postId
          }).then((res)=>{
            const status ={
                failed:res.data.failed,
                succeess:res.data.succeess
            }
            if(status.failed){
              swal({

                  text:res.data,
                  icon:'error'
              })
            }else{
                swal({
                    text:res.data,
                    icon:'success'
                })
            }
            
          })

      }

         return(
       
      <div class="row" key={postId}>
         
    <div class="col s12 ">
      <div class="card form-container" >
        <div class="card-image view-display">
        
           <img src={post.image1} className="responsiv-image view-image materialboxed " alt='image'  />
           <img src={post.image2} className="responsiv-image view-image materialboxed" alt='image'  />
           <img src={post.image3} className="responsiv-image view-image materialboxed "alt='image' />
        
          
        </div>
        <div class="card-content text-display">
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
        <div class="card-action">
        <div className='buttons-display'>
          {/* <button className='green accent-4 btn btn-primary'><MdEdit/> Edit</button> */}
          <button className='green accent-4 btn btn-primary' onClick={deleteProperty}><MdOutlineDeleteOutline/>delete Post</button>
         

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

 )

}
export default ViewPropertyLandlord;