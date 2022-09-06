
import {useNavigate} from 'react-router-dom';

function NotLogedin(){
let navigate= useNavigate();
//navigate function
const toHomePage=()=>{

    navigate("/");
}

return (
< div className="container " >
    <h2>
        Ooops!
    </h2>
 
   <p className=""><h5>ERROR :You are not Loged in the system Please log in</h5>   </p>
    <a className="btn waves-effect blue-grey" onClick={toHomePage}>Back Home</a>



</div>


);


}
export default  NotLogedin;