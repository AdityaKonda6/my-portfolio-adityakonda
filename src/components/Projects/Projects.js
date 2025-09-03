import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fly from "../../Assets/Projects/airtic.gif";
import inventory from "../../Assets/Projects/inventory.gif";
import men from "../../Assets/Projects/menss.gif";
import lenskart from "../../Assets/Projects/lenskart.gif";
import predico from "../../Assets/Projects/disease.gif";
import Charity from "../../Assets/Projects/blockchain.gif";
import AutomationTesting from "../../Assets/Projects/automationtesting.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">ProjectsWorks </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AutomationTesting}
              isBlog={false}
              title="⚙️🤖 Automation Testing for Login Page"
              description="This project automates login testing for the Soundbox web application using Selenium WebDriver, TestNG, and WebDriverManager. It performs 15 valid and 15 invalid login attempts, takes screenshots after each attempt for verification, and saves them automatically. The project supports running on Linux and Windows systems."
              ghLink="https://github.com/AdityaKonda6/Automation-Testing-CWD-By-Aditya"
              demoLink="https://adityakonda04.vercel.app"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fly}
              isBlog={false}
              title="✈️✈︎ Fly With Aditya"
              description="A streamlined web application for booking flights, developed with PHP and MySQL. Users can search flights, book tickets, and manage bookings, while admins oversee schedules and pricing. The platform features secure user authentication, a responsive interface, and seamless transaction management."
              ghLink="https://github.com/AdityaKonda6/Online-Flight-Booking--PHP"
              demoLink="https://fly-with-aditya.vercel.app/"
            />
          </Col>

         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Charity}
              isBlog={false}
              title="💰 Charity BlockChain Project"
              description="The Charity Blockchain Project is a decentralized platform that ensures transparency and security in charitable donations using blockchain technology. The platform leverages smart contracts to facilitate secure transactions and prevent fraud, ensuring that funds reach the intended recipients."
              ghLink="https://github.com/AdityaKonda6/Charity-Blockchain-Project-Aditya_Konda"
              demoLink="https://adityablockchainproject.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inventory}
              isBlog={false}
              title="📦💰 Inventory Management System"
              description="A desktop application in Python with SQLite for efficient inventory tracking. Users can manage products, record transactions, and generate stock reports through an intuitive GUI built with Tkinter. This system simplifies inventory processes, enhancing real-time stock monitoring and record-keeping accuracy."
              ghLink="https://github.com/AdityaKonda6/Inventory-Management-System-Mini-Project--Python"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lenskart}
              isBlog={false}
              title="👓 Lenskart Clone"
              description="A React-based clone of the Lenskart website, this project simulates a responsive e-commerce platform with features like product filtering, detailed product pages, and cart functionality. It demonstrates expertise in component-driven design, providing a seamless shopping experience for desktop and mobile users alike."
              ghLink="https://github.com/AdityaKonda6/LenskartClone-Aditya"
              demoLink="https://lenskartclone-aditya-m1p0.onrender.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={men}
              isBlog={false}
              title="💇‍♂️ Men Saloon Management System"
              description="A PHP-based system designed to streamline salon operations. It offers appointment booking, customer management, and service tracking for an organized client experience. With a responsive interface and admin controls, this application simplifies salon workflows, enhancing service efficiency and customer satisfaction."
              ghLink="https://github.com/AdityaKonda6/Men-Saloon-Management-System---PHP"
              demoLink="https://aditya-men-saloon.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={predico}
              isBlog={false}
              title="🩺 Predico - Disease Prediction System"
              description="An ML-powered disease prediction platform built with Flask and Python, designed to assist in early diagnosis. Patients enter symptoms to receive predictive insights using the Naive Bayes algorithm, while doctors and admins manage records and monitor cases, enhancing healthcare accessibility and proactive intervention."
              ghLink="https://github.com/AdityaKonda6/Predico-Aditya"
              demoLink="https://predico-aditya.onrender.com/"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
