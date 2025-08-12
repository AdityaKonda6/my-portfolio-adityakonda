import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.mp4";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
             I’m <b className="purple">Aditya Konda</b>, a Software Testing Engineer with hands-on
  experience in <b className="purple">manual and automation testing</b>. I’ve built
  dynamic Selenium-based automation frameworks — including a 
  <b className="purple"> role-based user creation script</b> with Excel-driven inputs,
  duplicate handling, and detailed screenshot logging.
  <br /><br />
  As part of my academic journey, I developed <b className="purple">SHEild</b>, an
  Android safety application designed to provide real-time alerts and emergency
  contact features, focusing on usability and reliability under critical scenarios.
  <br /><br />
  Currently, I’m expanding my expertise into <b className="purple">DevOps</b> —
  working with <b className="purple">Git, GitHub, CI/CD pipelines, Docker, Linux</b>,
  and cloud deployment practices to bridge the gap between development and operations.
  <br /><br />
  My tech stack includes 
  <b className="purple"> Java, Python, SQL, Node.js, React.js, Git, Selenium, Maven</b>,
  with a strong foundation in software quality assurance principles.
  <br /><br />
  I thrive on solving problems, optimizing processes, and delivering
  <b className="purple"> production-ready, scalable, and testable solutions</b>. 
  Adaptable and detail-oriented, I enjoy working with diverse teams and exploring
  emerging technologies that can make systems more efficient and reliable.
              <br />
                        <br />
              My field of Interest's are &nbsp;
              <i>
                <b className="purple">DevOps and Automation Testing </b> and
                also in areas related to{" "}
                <b className="purple">
                  Cloud Security Engineer, SRE, Platform Engineer and Software Testing
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AdityaKonda6"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/AdityaKonda7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aditya-adi-konda"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/konda_aditya/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
