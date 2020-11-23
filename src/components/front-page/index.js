import React, { Component } from 'react'
import Footer from '../Footer';
import AboutUs from './About-Us';
import ContactUs from './Contact-Us';

import Course from './course-single';
import FrontImage from './Front-Image';

export default class Front extends Component {
    render() {
        return (
            <div>
                
                <FrontImage
                title="3 Sons System Limited"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                />


                <div className="container" style={{zIndex: "2", marginTop: "-5vh"}} >

                <div className="row">

                  <Course heading="Job Aid"
                          detail="posuerea ante"
                          detail2="onsectetur adipiscing elit"
                          detail3="posuere erat a ante"
                          color="#38405F"
                          icon="fa fa-briefcase"
                          link="/job-aid"
                          />
                    <Course heading="Business Aid"
                                  detail="posuerea ante"
                                  detail2="onsectetur adipiscing elit"
                                  detail3="posuere erat a ante"
                                  color="#8B939C"
                                  icon="fa fa-money"
                                  
                                  />
                    <Course heading="Social Aid"
                                  detail="posuerea ante"
                                  detail2="onsectetur adipiscing elit"
                                  detail3="posuere erat a ante"
                                  color="#38405F"
                                  icon="fa fa-link"
                                  />
                    </div>

                    <div className="row">

                    <Course heading="Medical Aid"
                                  detail="posuerea ante"
                                  detail2="onsectetur adipiscing elit"
                                  detail3="posuere erat a ante"
                                  color="#8B939C"
                                  icon="fa fa-medkit"
                                  />
                    <Course heading="Legal Aid"
                                  detail="posuerea ante"
                                  detail2="onsectetur adipiscing elit"
                                  detail3="posuere erat a ante"
                                  color="#8B939C"
                                  icon="fa fa-gavel"
                                  />
                    </div>

                </div>

                <AboutUs />

                <ContactUs />

                <Footer />

            </div>
        )
    }
}
