
//importing components
import LandingNav from '../components/LandingNav';
import LandingHeader from '../components/LandingHeader';
import Services from '../components/Services';
import Footer from '../components/Footer';

function HomePage() {
 
    return (
      <div className="my-container">
        <LandingNav/>
        <LandingHeader/>
        <Services/>
        <Footer/>
       
      </div>
    );
  }
  
  export default HomePage;