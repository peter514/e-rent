import {useEffect, useState} from 'react';
import userPicture from '../assets/img/faces/dem.jpg';
import { useNavigate } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';
import Footer from '../components/Footer';
import ViewProperty1 from '../components/ViewProperty1';
import UserBookings from '../components/UserBookings';
import Search from '../components/Search';
import SideNav from '../components/SideNav';
import DashboardNavuser from '../components/DashboardNavuser';
import { BiBuildingHouse,BiSearchAlt } from "react-icons/bi";
import {RiReservedFill} from 'react-icons/ri'


function UserDashboard(){
  // activating tabs
    useEffect(
      ()=>{
        M.AutoInit();
      },
      []
    )
    const [auth,setAuth]= useState();
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
  


        <div className="row  my-container ">
            <div className='row'>
            <DashboardNavuser/>
            </div>
         
          <div >
          {/* user dashboard content area */}
          <div className="row my-margin">
            <div className=" col s2 ">
            {/* side nav content here    */}
            
            <SideNav/>
         
            </div>

          {/* main content and posts content here */}
            <div className="col s9 " style={{ 'paddinLeft': '300px'}}>
          {/* tabs */}
          <div className="row">
              <div className="col s12">
                <ul className="tabs  green accent-4  ">
 
                  <li className="tab col s3 collection-item"><a href="#test1" className="white-text active"><BiBuildingHouse/> All vaccants</a></li>
                  <li className="tab col s3"><a className=" white-text" href="#test2"><BiSearchAlt/> Search/Filter</a></li>
                 <li className="tab col s3"><a href="#test4"className="white-text"><RiReservedFill/> My Bookings</a></li>
                </ul>
              </div>
              <div id="test1" className="col s12">
              
              <ViewProperty1/>
              </div>
              <div id="test2" className="col s12">
                New vacants to display here
                <Search/>

                </div>
              
              <div id="test4" className="col s12">
                Userbooking from bookings table
                <UserBookings/>
                </div>
            </div>

            </div>

          </div>

          </div>
          <div>
            <Footer/>
          </div>

            
        </div>
    );
}
export default UserDashboard;