import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

function LoginUserBtn(){
    // initializing javascript
    
    useEffect(()=>{
        M.AutoInit();
    },[])

    //navigate function
    let navigate= useNavigate();
  const  toLoginUser = ()=>{
    navigate("/LoginUser")

  }
  const  toLoginLandlord = ()=>{
    navigate("/LoginLandlord")

  }
 return(
     <div>

         {/* drop down content for login button */}
        <ul id='dropdown2' className='dropdown-content'>
    <li><a>Login AS:</a></li>
    <li class="divider" ></li>
    <li><a  onClick={toLoginUser}  >User </a></li>    
    <li><a onClick={toLoginLandlord}>Landlord </a></li>
    
        </ul>
        <a className="dropdown-trigger btn blue-grey "  data-target='dropdown2'>Sign In</a>
     </div>
 );


}
export default  LoginUserBtn;