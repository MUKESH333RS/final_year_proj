import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

const Help = () => {
  return (
    <Jumbotron>
      <h3>About Rajkot Municipal Corporation (RMC)</h3>
      <span>
       SiniBot is a ChatBot.That provide a government various Schemes and
       also check their Schemes eligibility criteria and user can able to apply
       the Schemes.Check whether the person student or employee.
      </span>
      <div className="mt-5">
        <h3>Help</h3>
        <ul>  
          <li>Professional Tax FAQs</li>          
          <li>Election Department FAQs</li>
          <li>Government Schemes FAQs</li>
          <li>Building Plan Approval FAQs</li>
          <li>FAQs for Fire & Emergency Services</li>
          <li>FAQs for Birth & Death Certificate</li>
        </ul>
      </div>
      <div className="mt-5">
        <h3>Contact</h3>
        <p> Phone. No: +91-9597933964</p>
        <p>
          {' '}
          E-Mail:<a href="jamesveronica2507@gmail.com"> jamesveronica2507@gmail.com</a>{' '}
        </p>
       
      </div>
    </Jumbotron>
  )
}

export default Help
