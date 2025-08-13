import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import androidResume from "../../Assets/Resume - Aditya Konda - Android Developer.pdf";
import softwareResume from "../../Assets/Resume - Aditya Konda - Software Developer.pdf";
import devopsResume from "../../Assets/Resume - Aditya Konda - DevOps Engineer.pdf";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumes = [
  {
    name: "📄 Resume – Android Developer",
    file: androidResume,
  },
  {
    name: "📄 Resume – Software Developer",
    file: softwareResume,
  },
  {
    name: "📄 Resume – DevOps Engineer",
    file: devopsResume,
  },
];

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [hoveredResume, setHoveredResume] = useState(resumes[2].file); // Default to DevOps

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleClick = (resume, event) => {
    if (event.detail === 1) {
      // Single click - show resume
      setHoveredResume(resume.file);
    } else if (event.detail === 2) {
      // Double click - download
      const link = document.createElement("a");
      link.href = resume.file;
      link.download = resume.name.replace("📄 ", "") + ".pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="justify-content-center mb-4">
          <h1 style={{ textAlign: "center" }}>
            🎯 My Tailored Resumes for Your Role
          </h1>
          <p style={{ textAlign: "center", fontSize: "1.2em" }}>
            Choose a role-specific resume to view or download instantly.
          </p>
          <div
            style={{
              textAlign: "center",
              fontSize: "0.85em",
              color: "#666",
              maxWidth: "300px",
              margin: "3px auto",
              padding: "4px",
              backgroundColor: "#f8f9fa",
              borderRadius: "6px",
              border: "1px solid #dee2e6",
            }}
          >
            <p>📌 &nbsp;How to use:</p>
            <p>• Single click on any resume to preview it</p>
            <p>• Double click to download the PDF version</p>
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          {resumes.map((resume) => (
            <Button
              key={resume.name}
              variant="primary"
              style={{ maxWidth: "250px", margin: "10px" }}
              onClick={(e) => handleClick(resume, e)}
            >
              <AiOutlineDownload />
              &nbsp;{resume.name}
            </Button>
          ))}
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

        <Row className="resume">
          {hoveredResume ? (
            <div
              style={{
                height: "80vh", // Increased from 70vh
                overflowY: "auto",
                margin: "20px auto",
                padding: "20px",
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                maxWidth: "1000px", // Increased from 900px
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            >
              <Document
                file={hoveredResume}
                className="d-flex justify-content-center"
              >
                <Page
                  pageNumber={1}
                  scale={width > 786 ? 1.4 : 0.7} // Increased scale values
                  renderTextLayer={false}
                />
              </Document>
            </div>
          ) : (
            <div className="text-center mt-4">
              <p style={{ fontSize: "1.1em" }}>
                Select a resume to view or download.
              </p>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
