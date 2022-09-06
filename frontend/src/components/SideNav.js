import { useEffect, useState } from 'react';
import userPicture from '../assets/img/faces/dem.jpg'
import {useNavigate} from 'react-router-dom';
import {FaUserEdit, FaDiscourse } from 'react-icons/fa'
import {MdMessage,MdOutlineLogout} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import swal from 'sweetalert';
function SideNav(){
  const navigate = useNavigate();
   const toUserProfile = ()=>{
      navigate('/UserProfile')
   }
   const toViewMessages = ()=>{
    navigate('/ViewMessages')
 }
 const logout= ()=>{
   swal({
     text: 'Logged Out',
         icon:'info',
     })
   localStorage.clear();
   navigate('/loginUser')
 }


    return(
       
        <div className="center-left side-height" >
          <div class="collection   ">
   
            <a href="#!" class="collection-item active green accent-4 "> <GiHamburgerMenu/>  Home</a>
            <a href="#!" class="collection-item" onClick={toUserProfile}><FaUserEdit/>  Profile</a>
            <a href="#!" class="collection-item" onClick={toViewMessages}><MdMessage/> Messages</a>
            <a className='collection-item' onClick={logout}><MdOutlineLogout/>   Logout</a>
         </div>
        </div>
    )
}
export default SideNav;