import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// ✅ Correctly import both resumes
import resume1 from "../../Assets/Aditya__Konda__Resume.pdf";
import resume2 from "../../Assets/Aditya__Konda__Resume_Table.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [currentResumeIndex, setCurrentResumeIndex] = useState(0);

  // ✅ Resume array
  const resumes = [
    { file: resume1, name: "Detailed Resume" },
    { file: resume2, name: "Tabular Resume" },
  ];

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Correct handlers
  const handlePrev = () => {
    setCurrentResumeIndex((prevIndex) =>
      prevIndex === 0 ? resumes.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentResumeIndex((prevIndex) =>
      prevIndex === resumes.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Top Buttons */}
        <Row style={{ justifyContent: "center" }}>
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
            View My LinkedIn
          </Button>
          <Button
            variant="primary"
            href="https://github.com/AdityaKonda6"
            target="_blank"
            style={{ maxWidth: "250px", margin: "10px" }}
          >
            View GitHub
          </Button>
        </Row>

        {/* Resume Display with Navigation */}
        <Row className="resume" style={{ justifyContent: "center", alignItems: "center" }}>
          <Col xs="auto">
            <Button onClick={handlePrev} variant="secondary" style={{ marginRight: "20px" }}>
              <AiOutlineLeft /> Previous
            </Button>
          </Col>

          <Col xs="auto">
            <Document
              key={currentResumeIndex} // ✅ Force re-render on resume change
              file={resumes[currentResumeIndex].file}
            >
              <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.6} />
            </Document>
          </Col>

          <Col xs="auto">
            <Button onClick={handleNext} variant="secondary" style={{ marginLeft: "20px" }}>
              Next <AiOutlineRight />
            </Button>
          </Col>
        </Row>

        {/* Bottom Download Button */}
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
