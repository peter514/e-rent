import  {useState, useEffect }   from "react";
import M from 'materialize-css/dist/js/materialize.min.js';
import swal from 'sweetalert'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import CustomMaps from "./CustomMaps";



function AddPost(){
      useEffect(()=>{
        
        M.AutoInit();        
    })
    const navigate = useNavigate();
    const toMaps=()=>{
      navigate('/CustomMaps');
    }
// capture data
const landlordId = localStorage.getItem('landlordId');
const [propertyName, setPropertyName]= useState('');
const [category,setCategory]=useState('');
const [vaccant,setVaccant]=useState('');
const [extraServices,setExtraServices]=useState('');
const[price,setPrice]=useState('');
const [phone,setPhone]=useState('');
const [email,setEmail]=useState('');

//capture iages now
const[image,setImage]= useState([]);
     const handlefile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          setImage(e.target.files);
        }
      };
      const fd = new FormData();
    
      for (let i = 0; i < image.length; i++) {
          fd.append('image', image[i]);
        }
        
      fd.append('landlordId',landlordId);
      fd.append('propertyName', propertyName);
      fd.append('category',category);
      fd.append('vaccant',vaccant);
      fd.append('extraServices',extraServices)
      fd.append('price',price);
      fd.append('phone',phone);
      fd.append('email',email);
//setting number of images upoaded


const addpost=()=>{
  if(!propertyName|| !category || !vaccant || !extraServices || !phone || !email){
    swal({
      title:'Sorry!!',
      text:'All Fields Are Required!!',
      icon:'warning'
    })
    
    return 0;
  }
  if(image.length<3 || image.length>=4){
      swal({
      title:'Failed!!',
      text:'Upload 3 pictures',
      icon:'error'
    })
    setImage([]);
    return 0;
  }
  axios.post('http://localhost:5000/api/addpost',
 fd
 
   ).then((res)=>{
     const status={
      posted :res.data.posted,
      failedError:res.data.failedError

     }  
    if(status.posted==false){
      swal({
        title:'Failed!!',
        text:status.failedError,
        icon:'error'
      })
    }else{
      swal({
        title:'Success!!',
        text:res.data,
        icon:'success'
      })
    }
        
  })
}
    
return(
    <div className="form-container">
    <h5 className="center-align">Add property Form</h5>
    <hr/>
    <div> 
        <ul className="collapsible ">
        <li className="active">
        <div className="collapsible-header ">Apartment / property Name and description</div>
        <div className="collapsible-body">

        <div class="row">
        <form class="col s9 form-container " >
        <div class="row">
        <div class="input-field col s12">
        <input  id="Property Name"   type="text" class="validate"  onChange={(e)=>{setPropertyName(e.target.value)}} required/>
        <label for="">Propetry Name    
        </label>
        </div>
        
        </div>
        <div class="row">
        <div className="input-field col s6">
                  
                    
                    <select onChange={(e)=>{
                      setCategory(e.target.value);
                      
                      }} required>
                    <option value="" >Choose property  category</option>
                    <option value="single room">Single rooms</option>
                    <option value="Double room">Double rooms</option>
                    <option value="Bedsitter">Bedsitters</option>
                    <option value="1 bedroom">1 bedroom</option>
                    <option value="2bedroom">2bedrooms</option>
                    <option value="3bedroom">3bedrooms</option>
                    <option value="Guest rooms">Guest rooms</option>
                    <option value="Others">Others</option>
                    </select>
                    <label></label>
                    
                  
                </div>
        <div class="input-field col s6">
        <input placeholder="" id="Vaccants" type="text" class="validate" required
         onChange={(e)=>{setVaccant(e.target.value)}}
        />
        <label for="Vaccants">No of Vaccants</label>
        </div>
       
        </div>
        <div class="row">
        <div class="input-field col s12">
        <textarea id="textarea1" class="materialize-textarea" 
         onChange={(e)=>{setExtraServices(e.target.value)}}
        ></textarea>
        <label for="textarea1">EXtra services Eg Wifi, CCTV or packing spaces (add a description) </label>
        </div>

        </div>
            <div className="row">
            <div class="input-field col s8">
        <input  id="price" type="text" class="validate" 
         onChange={(e)=>{setPrice(e.target.value)}} required
        />
        <label for="price">Price (Describe your pricing policy)</label>
        </div>
            </div>
        <div class="row">
        <h6>Contact informatio:</h6>
        <div class="input-field col s6">          
        <input  id="Phone"   type="number" class="validate" required
         onChange={(e)=>{setPhone(e.target.value)}}
        />
        <label for="Phone">Phone: 0712345678</label>
        </div>
        <div class="input-field col s6">
        <input id="Email" type="email"  class="validate" required
         onChange={(e)=>{setEmail(e.target.value)}}
        />
        <label for="">Email </label>
        </div>
        </div>



        </form>
        </div>
        </div>
        </li>

        <li className="">
        <div className="collapsible-header">Add images/pictures</div>
        <div className="collapsible-body form-container">
        <div className="file-field input-field">

          
        <div className="btn"><span>File</span></div>
        <div className="file-path-wrapper">
        <input className="file-path validate" type="text" placeholder="upload files" /> 
        <input type="file" accept="image/*" multiple  
        onChange={handlefile}
        />
        <div>
          Images uploaded:::  {image.length} 

        </div>
        {/* displaying uploaded images */}
        <div className="row">

        </div>

        </div>
        </div>
        </div>
        </li>
       <button className=" green accent-4 btn my-button" onClick={addpost} > Post</button>
          
        </ul>
         
          
        </div>
        <div className="card add-location-card">
          
         <h4> Add locaton</h4>
         <botton className="btn  green accent-4 " onClick={toMaps}>Set location</botton>
         </div >
          

   </div>
)
}
export default AddPost;