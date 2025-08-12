import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
  I’m <b className="purple">Aditya Srinivas Konda</b>, currently pursuing my 
  <b className="purple"> B.E. in Information Technology</b> from 
  K.C. College of Engineering and Management Studies, University of Mumbai, 
  with a CGPA of <b className="purple">8.28</b>.  
  My journey in technology began with a passion for problem-solving and 
  hands-on building, which I have transformed into expertise in 
  <b className="purple"> software development, testing, and DevOps practices</b>.
  <br /><br />
  During my academic years, I have worked on multiple impactful projects:
  <ul>
    <li>
      <b className="purple">Web Automation Testing for IoT Device Provisioning – CWD Limited:</b>  
      Designed a Selenium-based automation framework in Java with TestNG and 
      Apache POI to handle user provisioning on soundbox-based IoT systems.  
      Added Excel-driven inputs, result logging, retry logic for duplicates, and 
      screenshot capture at each step for traceability.
    </li>
    <li>
      <b className="purple">SHEild – Women Safety Android App & IoT Device:</b>  
      Built using Android Studio (Java/Kotlin), ESP8266, GPS, and Firebase.  
      Features SOS alerts, GPS tracking, emergency notifications, and hidden camera 
      detection via electromagnetic sensors.  
      Achieved <b className="purple">Top 10 finalist</b> rank among 700+ teams in 
      the Aavishkar Project Competition and <b className="purple">2nd prize</b> in 
      IETE-SF Technical Poster Competition.
    </li>
    <li>
      <b className="purple">Charity Blockchain – Secure Donation Platform:</b>  
      Developed with Solidity, Ethereum, React, Web3.js, and MetaMask.  
      Integrated wallet connection, smart contract interactions, and deployed on Vercel, 
      practicing CI/CD-style workflows.
    </li>
  </ul>
  <br />
  Professionally, I have been working as a <b className="purple">Software Testing Engineer</b> 
  at <b className="purple">CWD Limited</b>, where I perform manual and automation testing, 
  including test case creation, API testing with Postman, functional and sanity testing, 
  firmware flashing, and defect life cycle management in Agile environments.  
  My testing expertise covers <b className="purple">Java, Selenium, Maven, TestNG, Chirpstack, 
  and Postman</b>.
  <br /><br />
  Currently, I’m transitioning into the <b className="purple">DevOps domain</b>, 
  expanding my skill set in:
  <ul>
    <li><b className="purple">Version Control & Collaboration:</b> Git, GitHub</li>
    <li><b className="purple">System Administration:</b> Linux (Ubuntu 22.04 LTS), Shell Scripting</li>
    <li><b className="purple">Containerization & Cloud:</b> Docker, AWS</li>
    <li><b className="purple">CI/CD & Monitoring:</b> GitLab CI/CD (basics), Cursor, Trae, log analysis</li>
    <li><b className="purple">Networking:</b> OSI, TCP/IP, DNS, HTTP/HTTPS, SSL/TLS, IAM</li>
  </ul>
  <br />
  Beyond academics and work, I am actively involved as a 
  <b className="purple"> TPO member</b> and <b className="purple">Red Cross Committee member</b> 
  at my college, which has strengthened my leadership and collaboration skills.  
  <br /><br />
  I am committed to building a career that merges my 
  <b className="purple"> testing expertise</b>, 
  <b className="purple"> DevOps practices</b>, and 
  <b className="purple"> problem-solving abilities</b> to deliver scalable, reliable, 
  and secure software solutions.
</p>

          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aditya Konda </span>
            from <span className="purple"> Bhiwandi, India.</span>
            <br />
            I am currently studying at K.C College Of Engineering & Management Studies.
            <br />
            I am persuing Bachelors Of Engineering in Information Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
              <li className="about-activity">
              <ImPointRight /> Trekking
            </li>
              <li className="about-activity">
              <ImPointRight /> Gym 🏋🏽
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aditya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
