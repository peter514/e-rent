import { Route, Link, Router } from "react-router-dom";

function ProtectedRoutes({auth, component:component,...rest}){

    return(
        <Router>
        <Route
        {...rest }
        render={(props)=>{
            if(auth){
                return(
                    <component {...props}/>
                )
            }
            if(!auth){
                return(<Link to ={'/HomePage'}/>)
            }

        }}
        
        />
        </Router>
    )

}
export default ProtectedRoutes;