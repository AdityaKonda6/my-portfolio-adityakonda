import React from "react";
import { Col, Row } from "react-bootstrap";

function Techstack() {
  const techIcons = [
    // Cloud Platforms
    { src: "https://raw.githubusercontent.com/github/explore/master/topics/aws/aws.png", title: "AWS" },
    { src: "https://raw.githubusercontent.com/github/explore/master/topics/azure/azure.png", title: "Azure" },
    { src: "https://raw.githubusercontent.com/github/explore/master/topics/google-cloud/google-cloud.png", title: "Google Cloud" },

    // IaC / Automation
    { src: "https://raw.githubusercontent.com/github/explore/master/topics/terraform/terraform.png", title: "Terraform" },
    { src: "https://raw.githubusercontent.com/github/explore/master/topics/ansible/ansible.png", title: "Ansible" },

    // DevOps / Containers
    { src: "https://raw.githubusercontent.com/github/explore/master/topics/kubernetes/kubernetes.png", title: "Kubernetes" },
    { src: "https://raw.githubusercontent.com/github/explore/master/topics/docker/docker.png", title: "Docker" },
    { src: "https://raw.githubusercontent.com/cncf/artwork/master/projects/containerd/icon/color/containerd-icon-color.png", title: "containerd" },
    { src: "https://raw.githubusercontent.com/github/explore/master/topics/nginx/nginx.png", title: "Nginx" },

    // CI/CD
    { src: "https://raw.githubusercontent.com/github/explore/master/topics/jenkins/jenkins.png", title: "Jenkins" },
    { src: "https://raw.githubusercontent.com/github/explore/master/topics/git/git.png", title: "Git" },
    { src: "https://raw.githubusercontent.com/github/explore/master/topics/github/github.png", title: "GitHub" },
    { src: "https://raw.githubusercontent.com/github/explore/master/topics/gitlab/gitlab.png", title: "GitLab" },
    { src: "https://avatars.githubusercontent.com/u/365556?s=200&v=4", title: "Bitbucket" },

    // OS & Command Line
    { src: "https://raw.githubusercontent.com/github/explore/master/topics/linux/linux.png", title: "Linux" },
    { src: "https://raw.githubusercontent.com/github/explore/master/topics/bash/bash.png", title: "Bash" },
    { src: "https://raw.githubusercontent.com/github/explore/master/topics/terminal/terminal.png", title: "Terminal" },

    // Programming Languages / Frameworks
    { src: "https://raw.githubusercontent.com/github/explore/master/topics/python/python.png", title: "Python" },
    { src: "https://raw.githubusercontent.com/github/explore/master/topics/go/go.png", title: "Go" },
    { src: "https://raw.githubusercontent.com/github/explore/master/topics/java/java.png", title: "Java" },
    { src: "https://raw.githubusercontent.com/github/explore/master/topics/javascript/javascript.png", title: "JavaScript" },
    { src: "https://raw.githubusercontent.com/github/explore/master/topics/nodejs/nodejs.png", title: "Node.js" },
    { src: "https://raw.githubusercontent.com/github/explore/master/topics/react/react.png", title: "React" },

    // Databases
    { src: "https://raw.githubusercontent.com/github/explore/master/topics/sql/sql.png", title: "SQL" },
    { src: "https://raw.githubusercontent.com/github/explore/master/topics/mongodb/mongodb.png", title: "MongoDB" },
    { src: "https://raw.githubusercontent.com/github/explore/master/topics/mysql/mysql.png", title: "MySQL" },
    { src: "https://raw.githubusercontent.com/github/explore/master/topics/postgresql/postgresql.png", title: "PostgreSQL" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techIcons.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <img
            src={tech.src}
            alt={tech.title}
            title={tech.title}
            style={{ width: "60px", height: "60px" }}
          />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;









// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiJava,
//   DiJenkins,
//   DiDocker,
// } from "react-icons/di";
// import {
//   SiFirebase,
//   SiSelenium,
//   SiCypress,
//   SiPostman,
//   SiKubernetes,
//   SiAnsible,
//   SiGithubactions,
// } from "react-icons/si";

// function Techstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <CgCPlusPlus />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJavascript1 />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiNodejs />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiReact />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiMongodb />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiFirebase />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiPython />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJava />
//       </Col>
      
//       {/* Added Automation Testing Tools */}
//       <Col xs={4} md={2} className="tech-icons">
//         <SiSelenium />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiCypress />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostman />
//       </Col>

//       {/* Added DevOps Tools */}
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJenkins />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiDocker />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiKubernetes />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiAnsible />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiGithubactions />
//       </Col>
//     </Row>
//   );
// }

// export default Techstack;
