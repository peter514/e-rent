// components imports
import LoginUserBtn from './LoginUserBtn';


 function CreateaccountNav(){
  //initializing the dropdown components


 return (

    <div className=""> 
     
     <nav>
    <div className="nav-wrapper blue-grey">
      <a  class="brand-logo">E-RENTING</a>
      <ul className=" right">
        <li>Already using?</li>
        <li><LoginUserBtn/></li>
      </ul>
    </div>
  </nav>
    </div>
 );



 }
 export default CreateaccountNav;