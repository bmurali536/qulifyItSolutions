import React from 'react';
import csvImage from '../../images/csv5.jpg';  // Adjusted relative path
import csv2Image from '../../images/csv4.jpg';
// import csv5Image from '../../images/csv5.jpg';
// import '../css/Services.css';
import '../css/csv.css';

const CSV = () => {
  return (
    <>
      <div className='csv5-image'>
        <img src={csvImage} alt="CSV"  />
      </div>
      <div className='csvp1'>
        <h3>Validation of computer systems is essential to confirm their accuracy, reliability, consistent performance as intended, and the capability to identify invalid or modified records. This process is a fundamental requirement for compliance with electronic record standards.

Our team of computer system validation specialists conducts validations for various sectors, including pharmaceutical and biologics manufacturers, medical device producers, clinical research organizations, and GLP laboratories. Regulatory bodies mandate the computer system validation (CSV) process to guarantee the accuracy and integrity of data within computerized systems, as well as to ensure product safety and efficacy. CSV should be performed when configuring a new system or when making updates to an existing validated system, such as upgrades, patches, or extensions.

CSV processes must adhere to established regulations and guidelines. Best practices relevant to the field and the specific attributes of the system are subject to approval. </h3>
        

       </div>
       <div className="csv4-image" >
       <img src={csv2Image} alt="CSV" />
        </div>
       <div className="csv-text">
        <h1>Our CSV services include:
        </h1>
        <h3> 
       Requirement Analysis: We work with you to define clear and precise user and system requirements.
       Risk Management: We conduct thorough risk assessments to identify and mitigate potential risks to compliance and system performance.
        Validation Planning: A detailed validation plan is created to outline the scope, strategy, and specific testing required for each system.
        System Testing: We perform comprehensive testing procedures, including Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ), to ensure the system meets all functional and regulatory requirements.

         </h3>
    
      </div>
      <div className='csv-text1'>
        <h1>COMPUTER SYSTEMVALIDATION</h1>
        <h3>.Upgradtion Of Legacy System<br></br>.Automation Support<br></br>
        .PLC and SCADA Validation as per GAMP Requirements <br></br>
        .Application Software Validation as per GAMP and EUANX 11 and CFR Part 11 <ber></ber>
        .EMS/BMS Quatlification<br></br>
        .Audit Trail Review Assessment<br></br> 
        .Periodic Review Assessments<br></br>
        .ERES Assessments<br></br>
        .GAP Assessments for ALL type Computerized System<br></br>
       </h3>
      </div>

      
      <div className="csv-system">
        <h1>System Testing
        </h1>
        <p> System Testing: We perform comprehensive testing procedures, including
             Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ),<br></br> to ensure the system meets 
             all functional and regulatory requirements.
        Documentation:All steps of the validation process are meticulously documented, providing a clear audit trail and evidence of compliance.
    
         </p>
    
      </div>
    </>
  );
}

export default CSV;
