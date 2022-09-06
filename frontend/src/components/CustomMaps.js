import DashboardNav from './DashboardNav';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Marker, Map, GoogleApiWrapper } from 'google-maps-react'
import SideNav from './SideNav';
import Footer from './Footer';


function CustomMaps({ google, locations = [] }){
  const [auth, setAuth] =useState();
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
    <div  className='row' style={{'minHeight':'20em'}}>
      <DashboardNav/>
      <div className='col s3' >
        <SideNav/>
      </div>
      <div className='col s8'>
      <Map
              
                   
               

            google={google}
            containerStyle={{
                position: "relative",
                width: "100%",
                height: "100%"
            }}
            style={{
                width: "100%",
                height: "50em"
            }}
            center={locations[0]}
            initialCenter={
              {
                lat: -0.333332 ,
                lng: 37.6499974
              }
            }
            
            zoom={locations.length === 1 ? 15 : 15}
            disableDefaultUI={true}
            
            // onClick={ev => {
            //   console.log("latitide = ", ev.latLng.lat());
            //   console.log("longitude = ", ev.latLng.lng());
            // }}
        >
          <Marker position={
           
            {lat: -0.3166492387261364,
            lng: 37.65982381251684}
          } />
          <Marker position={
           
           {lat: -0.3212004717694545,
           lng:  37.652756161476574}
         } />
         <Marker position={
           
           {lat: -0.3184295708624572,
           lng:  37.66310390590662}
         } />
         <Marker position={
           
           {lat: -0.319131575209438,
           lng:  37.64524287331992}
         } />
         

            

        </Map>
        </div>
        
      </div>
  )
}
export default GoogleApiWrapper({
  apiKey:'AIzaSyBT6X96RMvOTcwVrAwbLgJURMpcKiihoq4'
})(CustomMaps);
