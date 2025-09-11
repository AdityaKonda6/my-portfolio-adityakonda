import React, { useState } from "react";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import Particle from "../Particle";

function CertificateNew() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showModal, setShowModal] = useState(false);

const certificates = [
  {
    title: "Modernize Infrastructure and Applications with Google Cloud",
    issuer: "Google Cloud / Simplilearn SkillUp",
    date: "September 2025",
    description: "Learned to build, deploy, and manage applications on Google Cloud Platform. Gained hands-on experience with key services like Google Kubernetes Engine (GKE) for container orchestration and other tools for modernizing infrastructure.",
    image: require("../../Assets/Certificates/Modernize Infrastructure and Applications with Google Cloud.png"),
    verificationLink: "https://www.simplilearn.com/skillup-certificate-verification"
  },
  {
    title: "Fundamentals of DevOps On AWS",
    issuer: "AWS / Simplilearn SkillUp",
    date: "September 2025",
    description: "Acquired specialized knowledge of implementing core DevOps practices on AWS. Covered key services for building CI/CD pipelines, automating infrastructure provisioning with CloudFormation, and monitoring application performance.",
    image: require("../../Assets/Certificates/AWS DevOps.png"),
    verificationLink: "https://www.simplilearn.com/skillup-certificate-verification"
  },
  {
    title: "Free DevOps Bootcamp",
    issuer: "TrainWithShubham (TWS)",
    date: "September 2025",
    description: "Completed a comprehensive, hands-on bootcamp on foundational DevOps principles. Developed practical skills in CI/CD pipeline creation, containerization with Docker, and configuration management tools.",
    image: require("../../Assets/Certificates/DevOps Trainwithshubham.jpg"),
    verificationLink: "https://www.trainwithshubham.com"
  },
  {
    title: "Operating Systems Basics",
    issuer: "Cisco Networking Academy",
    date: "March 2025",
    description: "Established a strong foundation in both Windows and Linux environments. Gained proficiency in using the Linux shell for file manipulation, service monitoring, and implementing basic security, which are essential for server management.",
    image: require("../../Assets/Certificates/Operating Systems basics.png"),
    verificationLink: "Certificate has a scannable QR code for verification"
  },
  {
    title: "Blockchain Developer Training",
    issuer: "Simplilearn SkillUp",
    date: "March 2025",
    description: "Gained insight into the architecture of decentralized systems and blockchain technology. This knowledge is applicable to developing and deploying secure and transparent applications in the Web3 space.",
    image: require("../../Assets/Certificates/Blockchain Developer.png"),
    verificationLink: "https://www.simplilearn.com/skillup-certificate-verification"
  },
  {
    title: "Introduction to Figma",
    issuer: "Simplilearn SkillUp",
    date: "March 2025",
    description: "Learned the fundamentals of UI/UX design using Figma. Developed skills in creating wireframes, prototypes, and user interfaces, which helps in better collaboration between development and design teams.",
    image: require("../../Assets/Certificates/Introduction to Figma Basics.png"),
    verificationLink: "https://www.simplilearn.com/skillup-certificate-verification"
  },
  {
    title: "Introduction to Internet of Things (IoT)",
    issuer: "Cisco Networking Academy",
    date: "October 2024",
    description: "Explored the architecture of distributed systems and the fundamentals of IoT. Understood the importance of automation, data handling, and security in a connected world, which can be applied to managing IoT device fleets.",
    image: require("../../Assets/Certificates/Introduction to IOT.png"),
    verificationLink: "Certificate has a scannable QR code for verification"
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "July 2024",
    description: "Successfully cleared an assessment demonstrating a solid understanding of fundamental Python concepts, data structures, and algorithms. This proficiency is key for scripting, automation, and back-end development.",
    image: require("../../Assets/Certificates/HackerRank Python.jpg"),
    verificationLink: "https://www.hackerrank.com/certificates/8E8B49D4244E"
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "July 2024",
    description: "Validated fundamental analytical and problem-solving abilities through a skills-based assessment. This showcases the capability to approach logical challenges, a critical skill in any software development role.",
    image: require("../../Assets/Certificates/HackerRank Problem Solving.jpg"),
    verificationLink: "https://www.hackerrank.com/certificates/C5FF04D991F3"
  },
  {
    title: "CSS, Bootstrap, JavaScript, PHP Full Stack Crash Course",
    issuer: "Udemy (Proper Dot Institute)",
    date: "March 2024",
    description: "Gained a broad understanding of the full web stack, from creating responsive front-end interfaces with CSS and Bootstrap to building server-side logic with PHP. This knowledge is applicable to end-to-end web application development.",
    image: require("../../Assets/Certificates/CSS, Bootstrap ,JavaScript, PHP Full Stack Crash Course.jpg"),
    verificationLink: "https://www.udemy.com/certificate/UC-6400c0c3-6c5f-423a-8a70-8f9f26210a27/"
  },
  {
    title: "PY0101EN: Python Basics for Data Science",
    issuer: "IBM (via edX)",
    date: "February 2024",
    description: "Built a solid foundation in Python programming, focusing on data structures, libraries like Pandas and NumPy, and other concepts essential for data analysis and scripting.",
    image: require("../../Assets/Certificates/IBMPython.png"),
    verificationLink: "https://courses.edx.org/certificates/968889f2a5a747fba1902d148c9ad621"
  },
  {
    title: "Legacy JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "October 2023",
    description: "Developed proficiency in core JavaScript concepts, algorithms, and data structures. This is a crucial skill for building complex front-end applications, writing efficient code, and tackling technical interviews.",
    image: require("../../Assets/Certificates/Freecodecamp JS and DSA.png"),
    verificationLink: "https://www.freecodecamp.org/certification/fcc7b5e3da4-5f9a-4f48-937b-f5df5b29b81d/javascript-algorithms-and-data-structures"
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "October 2023",
    description: "Gained foundational skills in HTML5 and CSS3 to build responsive websites that adapt to different screen sizes. This is a fundamental skill for any front-end or full-stack web developer.",
    image: require("../../Assets/Certificates/Freecodecamp Responsive WebDesign.png"),
    verificationLink: "https://www.freecodecamp.org/certification/fcc7b5e3da4-5f9a-4f48-937b-f5df5b29b81d/responsive-web-design"
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "September 2023",
    description: "Acquired foundational knowledge of cybersecurity principles, including common threats, vulnerabilities, and mitigation strategies. This understanding is essential for building secure and resilient applications.",
    image: require("../../Assets/Certificates/Introduction to Cyber Security.png"),
    verificationLink: "Certificate has a scannable QR code for verification"
  },
  {
    title: "GNU & Unix Commands",
    issuer: "Skillsoft",
    date: "Date not specified",
    description: "Validated essential command-line skills for navigating and managing Linux/Unix environments. This is a fundamental requirement for server management, shell scripting, and back-end development.",
    image: require("../../Assets/Certificates/Badge.png"),
    verificationLink: "https://www.skillsoft.com/"
  },
  {
    title: "Python Essentials",
    issuer: "IBM Skills Network (via edX)",
    date: "Date not specified",
    description: "Further solidified Python programming skills, reinforcing the ability to write clean, efficient code for scripting, automation, and software development.",
    image: require("../../Assets/Certificates/python-essentials.png"),
    verificationLink: "https://www.edx.org/"
  }
];

  return (
    <div>
      <Container fluid className="certificate-section">
        <Particle />
        <Container>
          <h1 className="certificate-heading text-center" style={{ color: "white", paddingTop: "30px" }}>
            My Professional <strong className="purple">Certificates</strong>
          </h1>
          <p style={{ color: "white", textAlign: "center", padding: "20px" }}>
            Click on any certificate to view more details
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {certificates.map((cert, index) => (
              <Col md={4} style={{ paddingTop: "20px" }} key={index}>
                <Card 
                  className="certificate-card h-100" 
                  onClick={() => {
                    setSelectedCert(cert);
                    setShowModal(true);
                  }}
                >
                  <Card.Img 
                    variant="top" 
                    src={cert.image} 
                    alt={cert.title}
                    className="certificate-image"
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{cert.title}</Card.Title>
                    <Card.Text>
                      <strong style={{ color: 'var(--imp-text-color)' }}>Issuer:</strong> {cert.issuer}<br />
                      <strong style={{ color: 'var(--imp-text-color)' }}>Date:</strong> {cert.date}
                    </Card.Text>
                    <div className="mt-auto">
                      <Button 
                        variant="primary" 
                        size="sm" 
                        className="w-100"
                      >
                        View Details
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
      >
        {selectedCert && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedCert.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-100 mb-3"
                style={{ maxHeight: "400px", objectFit: "contain" }}
              />
              <h5>Issuer: {selectedCert.issuer}</h5>
              <h6>Date: {selectedCert.date}</h6>
              <p>{selectedCert.description}</p>
              {selectedCert.verificationLink && (
                <Button
                  href={selectedCert.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                >
                  Verify Certificate
                </Button>
              )}
            </Modal.Body>
          </>
        )}
      </Modal>
    </div>
  );
}

export default CertificateNew;