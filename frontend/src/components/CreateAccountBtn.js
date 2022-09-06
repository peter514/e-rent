import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

function CreateAccountBtn(){
    // initializing javascript
    useEffect(()=>{
        M.AutoInit();
    },[])

    // navigation paths
    let navigate = useNavigate();

    const  toRegisterUser = ()=>{
        navigate("/RegisterUser")
    
      }
      const  toRegisterLandlord = ()=>{
        navigate("/RegisterLandlord")
    
      }
 return(
     <div>

          {/*   this are drop down contents for create account*/}
        
        <ul id='dropdown1' className='dropdown-content'>
    <li><a>Account type:</a></li>
    <li class="divider" ></li>
    <li><a  onClick={toRegisterUser} >User Account</a></li>    
    <li><a  onClick={toRegisterLandlord}>Landlord Account</a></li>
    
        </ul>
         <a className="dropdown-trigger btn blue-grey "  data-target='dropdown1'>Create Account</a>
     </div>
 );


}
export default CreateAccountBtn;