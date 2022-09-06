//images imports
import service1 from'../assets/img/service1.jpg';
import service3 from'../assets/img/service2.jpg';
import service2 from'../assets/img/service3.jpg';


function Services(){
    return(
        <>
        <div className="center-align" id='service' name="service">
          
            <h1 className="divider"></h1>
            <h2 >Services</h2>

        </div>
        <div className="row ">
             <div class="col s4">
      <div class="card  hoverable">
        <div class="card-image">
          <img src={service1} className="responsive-img" alt="service picture"/>
          <span class="card-title">Apartments/ House booking service</span>
        </div>
        <div class="card-content">
          <p>Users of the system have a place to search and compare between various property and help them make informed decisions on their next Move
            Book any rental property remotely and secure yourself a place for your next apartment
          </p>
        </div>
        <div class="card-action">
          
        </div>
      </div>
        </div>

        
        <div class="col s4 ">
      <div class="card  hoverable">
        <div class="card-image">
          <img src={service2}className="responsive-img" alt="service picture"/>
          <span class="card-title">Apartment post/ads </span>
        </div>
        <div class="card-content">
          <p>For service provides they can advertise their property with ease and in a platform ment for just that.
            Connect with prospective tenants and share ideas.
            Also compare other landlords services to improve on the quality of services offered
          </p>
        </div>
        <div class="card-action">
         
        </div>
      </div>
    </div>


    <div class="col s4">
      <div class="card  hoverable">
        <div class="card-image">
          <img src={service3} className="responsive-img" alt="service picture"/>
          <span class="card-title">Quality information from one pool</span>
        </div>
        <div class="card-content">
          <p>Get Quality information all from one central place. Make informed decision on your next apartment</p>
        </div>
        <div class="card-action">
          
        </div>
      </div>
    </div>


        </div>
        </>


    );
}
 export default Services;