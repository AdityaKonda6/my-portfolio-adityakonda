import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Import both resumes
import resume1 from "../../Assets/Aditya__Konda__Resume.pdf";
import resume2 from "../../Assets/Aditya__Konda__Resume_Table.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [currentResumeIndex, setCurrentResumeIndex] = useState(0);

  const resumes = [
    { file: resume1, name: "Detailed Resume" },
    { file: resume2, name: "Tabular Resume" },
  ];

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handlePrev = () => {
    setCurrentResumeIndex((prev) => (prev === 0 ? resumes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentResumeIndex((prev) => (prev === resumes.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumes[currentResumeIndex].file}
            target="_blank"
            style={{ maxWidth: "250px", margin: "10px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download {resumes[currentResumeIndex].name}
          </Button>
          <Button
            variant="primary"
            href="https://www.linkedin.com/in/aditya-adi-konda/"
            target="_blank"
            style={{ maxWidth: "250px", margin: "10px" }}
          >
            View My LinkedIn Profile
          </Button>
          <Button
            variant="primary"
            href="https://github.com/AdityaKonda6"
            target="_blank"
            style={{ maxWidth: "250px", margin: "10px" }}
          >
            View My GitHub Profile
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center", alignItems: "center" }}>
          <Col xs="auto">
            <Button onClick={handlePrev} variant="secondary" style={{ marginRight: "20px" }}>
              <AiOutlineLeft /> Previous
            </Button>
          </Col>

          <Col xs="auto">
            <Document file={resumes[currentResumeIndex].file}>
              <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.6} />
            </Document>
          </Col>

          <Col xs="auto">
            <Button onClick={handleNext} variant="secondary" style={{ marginLeft: "20px" }}>
              Next <AiOutlineRight />
            </Button>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={resumes[currentResumeIndex].file}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download {resumes[currentResumeIndex].name}
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
