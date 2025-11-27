import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I’m <b className="purple">Aditya Srinivas Konda</b>. I completed my
            <b className="purple"> B.E. in Information Technology</b> from K.C.
            College of Engineering and Management Studies (University of Mumbai),
            finishing with a CGPA of <b className="purple">8.28</b>.
            <br />
            <br />
            Today I work as a <b className="purple">DevOps / SRE</b>.
            I no longer occupy coding roles — my day-to-day is centered on
            building and operating resilient, secure, and automated cloud
            platforms that enable engineering teams to deliver with confidence.
            I specialize in designing CI/CD pipelines, infrastructure as code,
            container orchestration, cloud architecture, and observability.
            <br />
            <br />
            My core platform and tooling experience includes:
            <ul>
              <li>
                <b className="purple">Cloud & Compute:</b> AWS (EC2, S3, RDS,
                EFS, IAM, VPC, Load Balancers, Secrets Manager)
              </li>
              <li>
                <b className="purple">Containers & Orchestration:</b> Docker,
                Kubernetes, EKS, Helm, ECR
              </li>
              <li>
                <b className="purple">Infrastructure as Code:</b> Terraform —
                modular, state-managed provisioning and multi-account / multi-env
                patterns
              </li>
              <li>
                <b className="purple">CI/CD & Source Control:</b> Git, GitHub,
                Bitbucket, Jenkins, GitHub Actions, GitOps-style pipelines
              </li>
              <li>
                <b className="purple">Monitoring & Observability:</b> Prometheus,
                Grafana, CloudWatch, centralized logging and alerting
              </li>
              <li>
                <b className="purple">Automation & Scripting:</b> Bash / Shell
                scripting for ops automation, release automation, and runbooks
              </li>
              <li>
                <b className="purple">Security & Reliability:</b> IAM best
                practices, secrets management, SRE patterns, backups and DR
              </li>
            </ul>

            <br />
            Key responsibilities I take on:
            <ul>
              <li>Design and maintain CI/CD pipelines for multi-environment releases</li>
              <li>Provision and manage cloud infrastructure using Terraform</li>
              <li>Build and operate Kubernetes clusters (EKS) and container platforms</li>
              <li>Implement monitoring, alerting, and incident response playbooks</li>
              <li>Optimize cost, performance, and security of production systems</li>
              <li>Onboard teams to GitOps and infrastructure automation best practices</li>
            </ul>

            <br />
            My earlier academic projects gave me a strong engineering foundation and
            are highlights from my student days — I treat them as important
            domain experience that informs my DevOps work:
            <ul>
              <li>
                <b className="purple">Web Automation for IoT Provisioning (CWD Ltd.):</b> A
                Selenium-based automation framework to provision soundbox IoT devices,
                with Excel-driven inputs, retry/duplicate handling, and screenshot logging.
              </li>
              <li>
                <b className="purple">SHEild — Women Safety App & IoT:</b> Android + ESP8266 + Firebase
                project with SOS alerts and GPS tracking. Recognized as a Top-10 finalist
                in the Aavishkar Project Competition and 2nd prize in IETE-SF.
              </li>
              <li>
                <b className="purple">Charity Blockchain:</b> A secure donation platform built
                during college that introduced me to end-to-end deployment and CI/CD ideas.
              </li>
            </ul>

            <br />
            Apart from technical work, I contribute to campus life — I served as a{" "}
            <b className="purple">TPO member</b> and as part of the{" "}
            <b className="purple">Red Cross Committee</b>, which strengthened my
            leadership, communication, and coordination skills.
            <br />
            <br />
            If you'd like to explore my professional work or connect:
            <br />
            <a
              href="https://www.linkedin.com/in/aditya-adi-konda/"
              target="_blank"
              rel="noreferrer"
              className="purple"
            >
              LinkedIn
            </a>{" "}
            •{" "}
            <a
              href="https://github.com/AdityaKonda6"
              target="_blank"
              rel="noreferrer"
              className="purple"
            >
              GitHub
            </a>
            <br />
            <br />
            <span className="purple">Some of my hobbies and personal interests:</span>
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Gym — disciplined training and fitness
            </li>
            <li className="about-activity">
              <ImPointRight /> Riding — long bike rides and touring
            </li>
            <li className="about-activity">
              <ImPointRight /> Motovlogging — documenting rides and destinations
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel & exploring new places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build platforms and processes that make a difference."
          </p>
          <footer className="blockquote-footer">Aditya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;


// import React from "react";
// import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

// function AboutCard() {
//   return (
//     <Card className="quote-card-view">
//       <Card.Body>
//         <blockquote className="blockquote mb-0">
//           <p style={{ textAlign: "justify" }}>
//   I’m <b className="purple">Aditya Srinivas Konda</b>, currently pursuing my 
//   <b className="purple"> B.E. in Information Technology</b> from 
//   K.C. College of Engineering and Management Studies, University of Mumbai, 
//   with a CGPA of <b className="purple">8.28</b>.  
//   My journey in technology began with a passion for problem-solving and 
//   hands-on building, which I have transformed into expertise in 
//   <b className="purple"> software development, testing, and DevOps practices</b>.
//   <br /><br />
//   During my academic years, I have worked on multiple impactful projects:
//   <ul>
//     <li>
//       <b className="purple">Web Automation Testing for IoT Device Provisioning – CWD Limited:</b>  
//       Designed a Selenium-based automation framework in Java with TestNG and 
//       Apache POI to handle user provisioning on soundbox-based IoT systems.  
//       Added Excel-driven inputs, result logging, retry logic for duplicates, and 
//       screenshot capture at each step for traceability.
//     </li>
//     <li>
//       <b className="purple">SHEild – Women Safety Android App & IoT Device:</b>  
//       Built using Android Studio (Java/Kotlin), ESP8266, GPS, and Firebase.  
//       Features SOS alerts, GPS tracking, emergency notifications, and hidden camera 
//       detection via electromagnetic sensors.  
//       Achieved <b className="purple">Top 10 finalist</b> rank among 700+ teams in 
//       the Aavishkar Project Competition and <b className="purple">2nd prize</b> in 
//       IETE-SF Technical Poster Competition.
//     </li>
//     <li>
//       <b className="purple">Charity Blockchain – Secure Donation Platform:</b>  
//       Developed with Solidity, Ethereum, React, Web3.js, and MetaMask.  
//       Integrated wallet connection, smart contract interactions, and deployed on Vercel, 
//       practicing CI/CD-style workflows.
//     </li>
//   </ul>
//   <br />
//   Professionally, I have been working as a <b className="purple">Software Testing Engineer</b> 
//   at <b className="purple">CWD Limited</b>, where I perform manual and automation testing, 
//   including test case creation, API testing with Postman, functional and sanity testing, 
//   firmware flashing, and defect life cycle management in Agile environments.  
//   My testing expertise covers <b className="purple">Java, Selenium, Maven, TestNG, Chirpstack, 
//   and Postman</b>.
//   <br /><br />
//   Currently, I’m transitioning into the <b className="purple">DevOps domain</b>, 
//   expanding my skill set in:
//   <ul>
//     <li><b className="purple">Version Control & Collaboration:</b> Git, GitHub</li>
//     <li><b className="purple">System Administration:</b> Linux (Ubuntu 22.04 LTS), Shell Scripting</li>
//     <li><b className="purple">Containerization & Cloud:</b> Docker, AWS</li>
//     <li><b className="purple">CI/CD & Monitoring:</b> GitLab CI/CD (basics), Cursor, Trae, log analysis</li>
//     <li><b className="purple">Networking:</b> OSI, TCP/IP, DNS, HTTP/HTTPS, SSL/TLS, IAM</li>
//   </ul>
//   <br />
//   Beyond academics and work, I am actively involved as a 
//   <b className="purple"> TPO member</b> and <b className="purple">Red Cross Committee member</b> 
//   at my college, which has strengthened my leadership and collaboration skills.  
//   <br /><br />
//   I am committed to building a career that merges my 
//   <b className="purple"> testing expertise</b>, 
//   <b className="purple"> DevOps practices</b>, and 
//   <b className="purple"> problem-solving abilities</b> to deliver scalable, reliable, 
//   and secure software solutions.
// </p>

// <p style={{ textAlign: "justify" }}>
//             <span className="purple">Some of my hobbies include:</span>
//           </p>
//           <ul>
//             <li className="about-activity">
//               <ImPointRight /> Playing Games
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Writing Tech Blogs
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Travelling
//             </li>
//               <li className="about-activity">
//               <ImPointRight /> Trekking
//             </li>
//               <li className="about-activity">
//               <ImPointRight /> Gym 🏋🏽
//             </li>
//           </ul>

//           <p style={{ color: "rgb(155 126 172)" }}>
//             "Strive to build things that make a difference!"{" "}
//           </p>
//           <footer className="blockquote-footer">Aditya</footer>
//         </blockquote>
//       </Card.Body>
//     </Card>
//   );
// }

// export default AboutCard;
