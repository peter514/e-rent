import {useEffect, useState} from 'react';
import {useNavigate } from 'react-router-dom';
import swal from 'sweetalert'
import {MdOutlineLogout} from 'react-icons/md'
import {FaUser} from 'react-icons/fa'
function DashboardNavuser(){
    const [userName,setUserName]= useState('');

//
useEffect(()=>{
  setUserName(localStorage.getItem('userName'))
})


const navigate= useNavigate();
const Logout= ()=>{
  swal({
    text: 'Logged Out',
        icon:'info',
    })
  localStorage.clear();
  navigate('/loginUser')
}
    return(
      <div>
          <div className="">
        <nav>
          <div className="nav-wrapper blue-grey">
            <a href="#" className="brand-logo">E-RENT</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a><FaUser/>  {userName}</a></li>
              <li><a onClick={Logout}><MdOutlineLogout/> Logout</a></li>
            </ul>
          </div>

         </nav>
        </div>
      </div>

    )
}
export default DashboardNavuser;