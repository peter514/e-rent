 
import {useState} from 'react'
import axios from 'axios';

 function Tsing(){
     const[image,setImage]= useState([]);
     const handlefile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          setImage(e.target.files);
        }
      };

    const name ='peter';
    const fd = new FormData();
    
    for (let i = 0; i < image.length; i++) {
        fd.append('image', image[i]);
      }
    fd.append('name',name);
    const post =()=>{
        console.log(image)
     axios.post('http://localhost:5000/api/her',  fd
           
        
        ).them((res)=>{
            alert(res.data)
        })
    }
   

    return(
        <div className="container">
        <div className="form-container">
        <label>Upload</label>
        <input type='file' onChange={handlefile} multiple/>
        
        <button className="btn btn primary" onClick={post} > upload</button>
         
        </div>
        
        
        </div>

    )
 }
 export default Tsing;