// import component
import CreateAccountBtn from "./CreateAccountBtn";

function LoginNav(){


    return(
        <div className=""> 
       
        <nav>
       <div className="nav-wrapper blue-grey">
         <a  className="brand-logo">E-RENTING</a>
         <ul className=" right">
           <li>New user ?</li>
         <li> <CreateAccountBtn/></li>
         </ul>
       </div>
     </nav>
       </div>
    

    );
}
export default LoginNav;