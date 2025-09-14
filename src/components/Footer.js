// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaShop } from "react-icons/fa";

// function Footer() {
//   let date = new Date();
//   let year = date.getFullYear();
//   return (
//     <Container fluid className="footer">
//       <Row>
//         <Col md="4" className="footer-copywright">
//           <h3>Designed and Developed by Aditya Konda</h3>
//         </Col>
//         <Col md="4" className="footer-copywright">
//           <h3>Copyright © {year} AK</h3>
//         </Col>
//         <Col md="4" className="footer-body">
//           <ul className="footer-icons">
//             <li className="social-icons">
//               <a
//                 href="https://github.com/AdityaKonda6"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <AiFillGithub />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="https://twitter.com/AdityaKonda7"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <AiOutlineTwitter />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="https://www.linkedin.com/in/aditya-adi-konda"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedinIn />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="https://jiffyjugaad.in/"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <FaShop />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="https://www.instagram.com/konda_aditya/"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <AiFillInstagram />
//               </a>
//             </li>
//           </ul>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Footer;










import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaShop } from "react-icons/fa"; // Combined Fa imports

// Data for social icons to avoid repetition
const socialLinks = [
  {
    href: "https://github.com/AdityaKonda6",
    label: "GitHub",
    icon: <AiFillGithub />,
  },
  {
    href: "https://twitter.com/AdityaKonda7",
    label: "Twitter",
    icon: <AiOutlineTwitter />,
  },
  {
    href: "https://www.linkedin.com/in/aditya-adi-konda",
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
  }, // <--- THIS COMMA WAS MISSING
  {
    href: "https://jiffyjugaad.in/",
    label: "Shop",
    icon: <FaShop />,
  },
  {
    href: "https://www.instagram.com/konda_aditya/",
    label: "Instagram",
    icon: <AiFillInstagram />,
  },
];

function Footer() {
  const year = new Date().getFullYear(); // More concise way to get the year

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Aditya Konda</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} AK</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {socialLinks.map((link, index) => (
              <li className="social-icons" key={`social-icon-${index}`}>
                <a
                  href={link.href}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label} // Accessibility improvement
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
