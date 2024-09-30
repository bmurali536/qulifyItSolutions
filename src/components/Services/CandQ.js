import React from 'react';
import csvImage from '../../images/csv2.jpj.jpg';  // Adjusted relative path
// import '../css/Services.css';
import '../css/candq.css';

const CandQ = () => {
  return (
    <div>
      <div className='candq-container'>
  <div className='candq-image'>
    <img src={csvImage} alt="CSV"/>
  </div>
  <div className='candq-text'>
    <h1>CQV</h1>
    <h2>Delivery and Documentation</h2>
    <h4>
     . Commissioning and Validation Master Plans<br />
      .Validation Project Plans (VPPs)<br />
      .Cleaning Validation Master Plans (CVMP)<br />
      .Cleaning Validation strategy build-out (Equipment grouping, family approach)<br />
      .Risk-based strategies (ASTM E2500, ICH-Q9 principles)<br />
      .Risk Assessments<br />
      .FAT and SAT support<br />
      .Equipment startup support<br />
      .Commissioning protocol development and execution.
    </h4>
  </div>
</div>
  <div className='cand-text2'>
    <h1>Manufacturing</h1>
    <h2>Facilities and Programs </h2>
    <h4>.Green Field projects<br/>
      .Brown Field projects<br/>
       .Decommissioning<br/>
      .Strategy development<br/>
       .Owners Representation (CQV and PM)</h4>
  </div>


      
      <div className='cand2'>
        <h2> Our C&Q services include:  </h2>
        <h4> Commissioning: We verify that all equipment is installed and configured according to design specifications. 
          This includes initial testing, calibration, and ensuring that the equipment operates in the desired environment.
        </h4>
      </div>
      <div className='cand3'>
        <h2>Installation Qualification (IQ): </h2>
        <h4> We document and verify that the equipment is installed correctly, according to the
           manufacturer’s recommendations and design requirements. </h4>
      </div>
      <div className='cand4'>
        <h2>Operational Qualification (OQ): </h2>
        <h4>  We perform rigorous testing to confirm that the equipment operates within the specified operational limits under
           normal and challenging conditions. </h4>
      </div>
      <div className='cand5'>
        <h1>Concept & Designing For Pharmaceuttical Green field & Field projects</h1>
        <h3>.Process Engineering<br></br>
        .Procurement Management<br></br>
        .Commissioning & Qualification<br></br>
        .HVAC Desige Support<br></br>
        .Process Equipment's Automation Support<br></br>
        .Faciility,Black Utility,clean Utility, Process Equipment's P&lD Concept review<br></br>
        .CIP/SIP Studies Designs<br></br>
        .AMC Services for All type of Process Equipment's (Vial Filling Line, BFS,Ampule Line,Tube Filing Line and Water System  )
        </h3>
      </div>
    </div>
  );
}

export default CandQ;
