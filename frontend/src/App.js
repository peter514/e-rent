//defining imports for routes
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


//pages
import HomePage from './pages/HomePage.js';
import RegisterUser from "./pages/RegisterUser";
import RegisterLandlord from "./pages/RegisterLandlord";
import LoginUser from "./pages/LoginUser";
import LoginLandlord from "./pages/LoginLandlord";
import UserProfile from "./pages/UserProfile";
import LandlordProfile from "./pages/LandlordProfile";
import UserDashboard from './pages/UserDashboard.js';
import ErrorPage from "./pages/ErrorPage";
import LandlordDashboard from './pages/LandlordDashboard.js';
import Booking from './pages/Booking.js';
import Tsing from "./pages/tsing"
//importing components
import Services from './components/Services.js';
import CustomMaps from './components/CustomMaps.js';
import SendMessage from './pages/SendMessage.js';
import NotLogedin from './pages/NotLogedin.js';
import ViewMessages from './pages/ViewMessages.js';



function App() {
  const logedIn= true;
  return (
    <div className="my-container">
      <Router>
        <Routes>
        <Route
        path="/"
        element={<HomePage/>}
        
        />
        <Route
        path="/RegisterUser"
        element={<RegisterUser/>}
        />
        <Route
        path="/RegisterLandlord"
        element={<RegisterLandlord/> }
        />
        
        <Route
        path="/LoginUser"
        element={<LoginUser/>}
        />
        <Route
        path="/LoginLandlord"
        element={<LoginLandlord/>}
        />
        <Route
        path="/UserProfile"
        element={<UserProfile/>}
        />
        <Route
        path="/LandlordProfile"
        element={<LandlordProfile/>}
        />
        <Route 
        path="/Services"
        element={<Services/>}
        />
       
      
        <Route
        path="/UserDashboard"
        element={<UserDashboard/>}
        />
        <Route
        path="/LandlordDashboard"
        element={<LandlordDashboard/>}
        />
         <Route
        path="/Booking"
        element={<Booking/>}
        />
         <Route
        path="/ViewMessages"
        element={<ViewMessages/>}
        />
         <Route
        path="/SendMessage"
        element={<SendMessage/>}
        />
        <Route
        path="/CustomMaps"
        element={<CustomMaps/>}
        />
          <Route
        path="/tsing"
        element={<Tsing/>}
        />
        <Route
        path="/NotLogedin"
        element={<NotLogedin/>}
        />
          <Route
        path="*"
        element={<ErrorPage/>}
        />
         

        </Routes>
    

        </Router>
    
    </div>
  );
}

export default App;
