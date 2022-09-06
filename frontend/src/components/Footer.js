function Footer(){


    //creating todays function
    const today =  new Date();
    const currentYear = today.getFullYear()
    
return(


<div className="">
<footer class="page-footer blue-grey">
          <div class="">
            <div class="row">
              <div class=" col s8 ">
                <h5 class="white-text">House/rental search </h5>
                <p class="grey-text text-lighten-4">
                    E-renting is a houses/apartments searching system.
                    This project is built to bridge the gap between the apartments owners and the prospective tenants
                </p>
                
              </div>
              <div class="col s4">
                <h5 class="white-text center-align">Links</h5>
                <ul className="center-align"> 
                  <li><a class="grey-text text-lighten-3" href="#!">Support E-renting</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Email dev </a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Contacts</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Follow on twitter</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container center-align">
            Copyright  ©{currentYear}
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>

</div>

);

}
export default Footer;