import {useNavigate} from 'react-router-dom';

// importing component
import CreateAccountBtn from './CreateAccountBtn';
import LoginUserBtn from './LoginUserBtn';

function LandingNav(){
  //javascript initialization
 

  let navigate= useNavigate();
  
  const toServices=()=>{

    navigate("/Services")

  }
   

    return(
      <div className="" >
        <div  className="nav-wrapper"> 
     <nav>
    <div className=" blue-grey">
      <a className="hovarable">E-RENTING</a>
      <ul id="nav-mobile" className="right ">
       <li><a onClick={toServices}  >Services</a></li> 
        
        <li><CreateAccountBtn/></li>
        <li><LoginUserBtn/></li>
        
      </ul>
    </div>
     </nav>
        </div>
        </div>

    );

}

export default LandingNav;

