import {useNavigate} from 'react-router-dom';

function ErrorPage(){
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
 
   <p className=""> ERROR : PAGE NOT FOUND</p>
    <a className="btn waves-effect blue-grey" onClick={toHomePage}>Back Home</a>



</div>


);


}
export default  ErrorPage;