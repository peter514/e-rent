import {  useNavigate } from "react-router-dom";

//import header from '../assets/img/5f.jpg';
function LandingHeader(){
    const Navigate = useNavigate();
    const toRegisterUser=()=>{
        Navigate('/RegisterUser')
    }
    return(
<div className="landing-header center-align white-text">

        <div className="yellow-text header-caption" >
            <div>
            <h2 >E-RENTING SERVICES</h2>
            <h3>comfort and convinience</h3>
            </div>
            <div className="center-align">
               
                <button className="btn btn-large my-button  waves-effect  green accent-4" onClick={toRegisterUser}>Get started</button>
            </div>
            
        </div>
</div>


    );
}
export default LandingHeader;