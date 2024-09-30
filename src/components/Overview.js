import React from 'react';
import './css/Overview.css';  // Adjust the path as per your folder structure
import home1Image from '../images/medical-banner-with-doctor-wearing-goggles.jpg'; // Import the image

import pharmaImage from '../../src/images/pharma.jpg';
import { RiH4 } from 'react-icons/ri';

const Overview = () => {
    return (
        <div className='main-overview'>
                {/* <div className='welcome'>WELCOME TO</div> */}
                <div className='wel'>QUALIFYIT SOLUTIONS</div>
                <div class="container1">
  <div class="image-container">
    <div class="home1-image"></div>
  </div>
  
</div>

              
            
            <div className="overview_main">COMPANY OVERVIEW</div>
            <div className="overview_name">QUALIFYIT SOLUTIONS <br /> </div>
            <p className='overview_para'>
            Qualify IT Solutions a Startup company in engineering & design.
               having successfully executed CSV & CQV projects in Infra, Pharma, Biotechnology and software industries. Qualify IT Solutuions provides expert delivery of world class Pharma Facilities. Our team of CSV & CQV engineers is skilled at
               taking your project from concept to operation, providing local support with global subject matter expertise. Qualify IT solutions will deliver a cost-effective design and to meet regulatory requirement.
               Qualify IT solutions provides services for the validation of the process euipment's, utilities, control systems and the facility determined to be GXP and Non-GXP system used in pharmaceutical manufacturing facilities.  . 
            </p>
            {/* <div className="learn_more_btn">Learn More</div> */}
            <div className="contrib_head">Our Contributions</div>
            <div className="tag_line">Industries We Serve!</div>
            <div className='pharma-image'>
                <img src={pharmaImage} alt="CSV" />
            </div>
        </div>
    );
};

export default Overview;
