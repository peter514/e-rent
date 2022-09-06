import axios from "axios";
import M from 'materialize-css/dist/js/materialize.min.js'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import {FaSearch} from 'react-icons/fa'

function Search(){
        useEffect(()=>{
        M.AutoInit()
        })
    const [category,setCategory]=useState();
    const [posts, setPosts]=useState([]);
    const search=()=>{
        if(!category){
            swal({
                text:'Choose a filter category',
                icon:'info'
            })
            return 0;
        }
        axios.post('http://localhost:5000/api/search',
        {
            category:category,
        }).then((res)=>{
           
                setPosts(res.data);
                
     
            
            
            
        })

    }
    const navigate =useNavigate();


    return(
        <div className="form-container ">
            <div className="row">
            <div className="input-field col s6">         
                    
                    <select onChange={(e)=>{
                       setCategory(e.target.value);
                       
                       }} required>
                     <option value="" >Filter/Search </option>
                     <option value="single room">Single rooms</option>
                     <option value="Double room">Double rooms</option>
                     <option value="Bedsitter">Bedsitters</option>
                     <option value="1 bedroom">1 bedroom</option>
                     <option value="2bedroom">2bedrooms</option>
                     <option value="3bedroom">3bedrooms</option>
                     <option value="Guest rooms">Guest rooms</option>
                     <option value="Others">Others</option>
                     </select>
                    
                     
                   
                 </div>
                 <div className="col s6">
                 <button className=" green accent-4 waves-effect waves-light btn my-button" onClick={search}><FaSearch/> Search</button>
                 </div>
                 </div>
                 {
                   (
                     ()=>{
                       if(!posts){
                        
                         return(
                           <div>                        
                              <p>No property post to show</p>
                           </div>
                         )
                       }else{
                         return(
                           <div>
                             {posts.length} found

                             {

                          posts.map((post,postId)=>{  
                            
                          
                          const toBooking =()=>{
                            localStorage.setItem('propertyName',post.propertyName);
                            localStorage.setItem('landlordPhone', post.phone);
                            localStorage.setItem('landlordEmail', post.email);
                            localStorage.setItem('landlordId', post.landlordId);
                            localStorage.setItem('postId',post.postId)
                            localStorage.setItem('vaccant',post.vaccant)
                            navigate('/Booking')
                            
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
                          <div className="row" key={postId}>
                            
                          <div className="col s12 ">
                          <div className="card">
                          <div className="card-image">
                          <div className='view-display ' >
                              <img src={post.image1} className="responsiv-image view-image materialboxed " alt='property design' />
                              <img src={post.image2} className="responsiv-image view-image materialboxed" alt='house 2'/>
                              <img src={post.image3} className="responsiv-image view-image materialboxed " alt='home picha' />
                          </div>
                            
                          </div>
                          <div className="card-content text-display">
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
                            <button className='btn btn-primary green accent-4' onClick={toBooking}>Book now</button>
                            <button className='btn btn-primary green accent-4' onClick={toMaps}>View Location</button>
                            
                            <button className='btn btn-primary green accent-4' onClick={tosendMessage}>message Owner</button>

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
                     }
                   )()}
                

        </div>    
         
    )
  

    
    
}
export default Search;