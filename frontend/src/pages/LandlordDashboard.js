import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min.js';
import Footer from '../components/Footer';
import AddPost from '../components/AddPost';
import ViewProperty1 from '../components/ViewProperty1';
import ViewPropertyLandlord from '../components/ViewPropertyLandLord';
import SideNav from '../components/SideNav';
import swal from 'sweetalert';
import DashboardNav from '../components/DashboardNav';
import LandlordBookingReport from '../components/LandlordBookingReport';
import { BiBuildingHouse, } from "react-icons/bi";
import{MdAddCircleOutline} from 'react-icons/md'
import {RiReservedFill} from 'react-icons/ri'
import {BsCardList} from 'react-icons/bs'



function LandlordDashboard(){
// activating tabs


useEffect(
  ()=>{
    M.AutoInit();
    
  },
  []
)
const [auth, setAuth]= useState();
useEffect(()=>{
  setAuth(localStorage.getItem('login'))
},[])
const navigate = useNavigate();
if(!auth){
return(
  <div>
    {navigate('/NotLogedin')}
  </div>
) 
return 0;
}

return(

    <div className="my-container ">
        <DashboardNav/>
        
      <div>
      {/* user dashboard content area */}
      <div className="row my-margin">
        <div className=" col s3 dashboard-side">
        {/* side nav content here    */}
        
        <SideNav/>
         
     
        </div>

      {/* main content and posts content here */}
      
        <div className="col s9 ">
      {/* tabs */} 
       <div className="row">
          <div className="col s12">
            <ul className="tabs teal lighten-1 green accent-4 ">
              <li className="tab col s3 collection-item"><a href="#test1" className="white-text"><BiBuildingHouse/> My Property</a></li>
              <li className="tab col s3"><a class="active" href="#test2"className="white-text"><MdAddCircleOutline/> Add Property</a></li>
              <li className="tab col s3 "><a href="#test3"className="white-text"><BsCardList/> Bookings Report 
              </a></li>
              <li className="tab col s3"><a href="#test4"className="white-text"><RiReservedFill/> View Other Property</a></li>
            </ul>
          </div>
          <div id="test1" className="col s12">
         
          <ViewPropertyLandlord/>

          </div>
          <div id="test2" className="col s12">
         
          <AddPost/> 

          </div>
          <div id="test3" class="col s12">
          <LandlordBookingReport/>
          </div>
          <div id="test4" className="col s12">
          <ViewProperty1/>
           </div>
        </div>
        
        </div>


      </div>
      <div>
        {/* footer */}
        <Footer/>
      </div>

      </div>


        
    </div>
);
}
export default LandlordDashboard;