# Personal Full-Stack Portfolio Deployment with Jenkins, Docker, & Grafana


<center>

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) &nbsp;
![GitHub Repo stars](https://img.shields.io/github/stars/AdityaKonda6/my-portfolio-adityakonda?color=red&logo=github&style=for-the-badge) &nbsp;
![GitHub forks](https://img.shields.io/github/forks/AdityaKonda6/my-portfolio-adityakonda?color=red&logo=github&style=for-the-badge)

</center>

<h3 align="center">
    🔹
    <a href="https://github.com/AdityaKonda6/my-portfolio-adityakonda/issues">Report Bug</a> &nbsp; &nbsp;
    🔹
    <a href="https://github.com/AdityaKonda6/my-portfolio-adityakonda/issues">Request Feature</a>
</h3>

---

## 📖 About The Project

This repository contains the source code for my personal portfolio website, a fully responsive single-page application built with **React.js**.

Beyond showcasing my frontend projects, this repository is also a hands-on demonstration of my **DevOps and CI/CD skills**. The entire process—from a code commit to live deployment—is fully automated using a Jenkins pipeline that deploys the application as a Docker container to an AWS EC2 instance.

---

## 🚀 The CI/CD Pipeline

This project is configured with a complete Continuous Integration and Continuous Deployment (CI/CD) pipeline.

**Workflow:** `Git Push` -> `GitHub Webhook` -> `Jenkins Pipeline` -> `Docker Build & Push` -> `Deploy to AWS EC2`

1.  **Continuous Integration (CI):** On every `git push` to the `main` branch, a GitHub webhook automatically triggers the pipeline on the Jenkins server.
2.  **Build:** The Jenkins pipeline uses a **multi-stage Dockerfile**.
    * **Stage 1** uses a `node:18-alpine` image to run `npm install` and `npm run build`, creating an optimized production build of the React app.
    * **Stage 2** uses a lightweight `nginx:alpine` image. The static files from the build stage are copied into the Nginx server directory. This creates a small, efficient, and secure final Docker image.
3.  **Registry:** The newly built Docker image is tagged and pushed to Docker Hub.
4.  **Continuous Deployment (CD):** The pipeline then connects to the host server, pulls the latest image from Docker Hub, and deploys it as a new Docker container, making the changes live.

---

## 🛠️ Built With

### Frontend:
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/)
* [React-Bootstrap](https://react-bootstrap.github.io/)
* [CSS3](https://www.w3.org/Style/CSS/specs.en.html)

### DevOps & Cloud:
* [Jenkins](https://www.jenkins.io/)
* [Docker](https://www.docker.com/)
* [AWS (EC2)](https://aws.amazon.com/ec2/)
* [Nginx](https://www.nginx.com/)
* [GitHub (Webhooks)](https://docs.github.com/en/webhooks)

---

## ⚙️ Getting Started (Local Development)

To get a local copy up and running, follow these simple steps.

### Prerequisites
You will need `node.js` and `git` installed globally on your machine.

### Installation
1.  Clone the repo:
    ```sh
    git clone [https://github.com/AdityaKonda6/my-portfolio-adityakonda.git](https://github.com/AdityaKonda6/my-portfolio-adityakonda.git)
    ```
2.  Install NPM packages:
    ```sh
    npm install
    ```
3.  Run the app in development mode:
    ```sh
    npm start
    ```
    Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to view it in your browser.

---

## 💡 Challenges & Solutions
This section details two significant technical challenges faced during development and pipeline setup, outlining the diagnostic process and the implemented solutions.

### Challenge 1: "JavaScript Heap Out of Memory" During CI Build
* **Problem:** The `npm run build` command, when executed by Jenkins on the EC2 server, would crash with a fatal error: `FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory`.
* **Diagnostic Process:** The error message clearly indicated that the Node.js process did not have enough memory (heap) to complete the compilation and optimization of the React application. This is a common issue in resource-constrained environments like a small EC2 instance, where the default memory allocation for Node.js is insufficient.
* **Solution:** The fix was to explicitly increase the memory available to the Node.js process. I modified the build step in the `Jenkinsfile` to pass a specific flag to Node.js.
    * **Original command:** `sh 'npm run build'`
    * **Modified command:**
        ```groovy
        sh 'NODE_OPTIONS=--max-old-space-size=4096 npm run build'
        ```
    This command sets an environment variable `NODE_OPTIONS` just for this execution, instructing Node.js to allow its heap size to grow up to 4096 MB (4 GB). This provided more than enough memory for the build to complete successfully.

### Challenge 2: "ENOSPC" Error During Local Development
* **Problem:** While running the development server via `npm start`, my machine would often throw the error: `Error: ENOSPC: System limit for number of file watchers reached`. This would crash the server, requiring a manual restart.
* **Diagnostic Process:** The `ENOSPC` error in this context means "Error, No Space," but it refers to the system's limit for file watchers, not disk space. React's development server watches every file in the project (including the thousands in `node_modules/`) for changes to enable hot-reloading. My operating system had a low default limit, which was quickly exhausted.
* **Solution:** The solution was to increase the maximum number of file watchers allowed by the operating system. On my Linux (Ubuntu) distribution, this was achieved with a simple system configuration change.
    1.  I added a new value to the system control configuration file:
        ```sh
        echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
        ```
    2.  I then applied the new setting immediately without needing a reboot:
        ```sh
        sudo sysctl -p
        ```
    This command increased the limit to 524,288, a sufficiently large number to handle any modern web development project. The error was permanently resolved.
-----


## Hey there 👋, I'm [<a href="https://adityakonda04.vercel.app/">Aditya!</a>](https://github.com/AdityaKonda6)

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-0e76a8?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/aditya-adi-konda/)
[![Twitter Badge](https://img.shields.io/badge/-Twitter-00acee?style=flat-square&logo=Twitter&logoColor=white)](https://twitter.com/AdityaKonda7)
[![Instagram Badge](https://img.shields.io/badge/-Instagram-e4405f?style=flat-square&logo=Instagram&logoColor=white)](https://www.instagram.com/konda_aditya/)
<img align="right" height="250" width="375" alt="" src="https://github.com/AdityaKonda6/AdityaKonda6/blob/main/giphy2.webp" />


### Glad to see you here! &nbsp; ![](https://visitor-badge.glitch.me/badge?page_id=adityakonda.adityakonda&style=flat-square&color=0088cc)

I’m a **2025 IT Graduate** passionate about **DevOps, Cloud, and Software Development** 🚀.  
My mission? To **bridge the gap between development and operations**—building scalable systems, automating workflows, and ensuring quality from code to deployment.

With a strong foundation in **Java, SQL, Linux**, and hands-on experience with **CI/CD pipelines, Selenium automation, cloud services, and Android development**, I thrive in solving problems end-to-end—from writing code to deploying it in production.

Recently, at **CWD Limited**, I worked on:
- **Automation Testing Frameworks** (Selenium, Java, Maven)
- **Linux-based system configurations & debugging**
- **Hardware-software integration testing**
- API testing with Postman  
…and in the process, strengthened my DevOps skill set.

💡 Curious mind. Fast learner. Always ready to build, break, and rebuild—better.

---

### 🚀 What I’m Working On:
- Building **DevOps projects** (Jenkins, Docker, Kubernetes, AWS, Ansible)
- Enhancing **automation frameworks** for testing & deployment
- Crafting **Android apps** and backend services
- Expanding my **Linux administration** skills

---

### 💼 My Tech Stack:
<code><img height="27" src="https://raw.githubusercontent.com/github/explore/master/topics/java/java.png" alt="Java"></code>
<code><img height="27" src="https://raw.githubusercontent.com/github/explore/master/topics/linux/linux.png" alt="Linux"></code>
<code><img height="27" src="https://raw.githubusercontent.com/github/explore/master/topics/docker/docker.png" alt="Docker"></code>
<code><img height="27" src="https://raw.githubusercontent.com/github/explore/master/topics/kubernetes/kubernetes.png" alt="Kubernetes"></code>
<code><img height="27" src="https://raw.githubusercontent.com/github/explore/master/topics/aws/aws.png" alt="AWS"></code>
<code><img height="27" src="https://raw.githubusercontent.com/github/explore/master/topics/python/python.png" alt="Python"></code>
<code><img height="27" src="https://raw.githubusercontent.com/github/explore/master/topics/javascript/javascript.png" alt="JavaScript"></code>
<code><img height="27" src="https://raw.githubusercontent.com/github/explore/master/topics/react/react.png" alt="React"></code>
<code><img height="27" src="https://raw.githubusercontent.com/github/explore/master/topics/sql/sql.png" alt="SQL"></code>
<code><img height="27" src="https://raw.githubusercontent.com/github/explore/master/topics/git/git.png" alt="Git"></code>
<code><img height="27" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" alt="nodejs"></code>
<code><img height="27" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTTzPAw-55ssm1Im594xYZ9eRQu2JylrkYLg&usqp=CAU" alt="mongodb"></code>
<code><img height="27" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" alt="terminal"></code>

---

<img align="right" height="250" width="375" alt="" src="https://raw.githubusercontent.com/iampavangandhi/iampavangandhi/master/gifs/coder.gif" />

### 📌 Highlights:
- 🛠 Built **dynamic Selenium automation scripts** integrated with Maven
- 🚀 Created & deployed **full-stack and Android applications**
- 🐧 Comfortable with **Linux system administration & shell scripting**
- 📦 Implemented CI/CD workflows for smoother deployments
- ☁️ Learning & applying **cloud infrastructure concepts**

--

### 📫 How to Reach Me:
- Email: **adityakonda04@gmail.com**
- Portfolio: [adityakonda04.vercel.app](https://adityakonda04.vercel.app/)
- LinkedIn: [Aditya Adi Konda](https://www.linkedin.com/in/aditya-adi-konda/)

---

### 📊 GitHub Stats:
<details>
  <summary><b>⚡ GitHub Stats</b></summary>
  <br />
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=adityakonda6&show_icons=true&hide_border=true&&count_private=true&include_all_commits=true" />
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=adityakonda6&show_icons=true&hide_border=true&layout=compact&langs_count=8"/>
</details>

<details>
  <summary><b>🔥 GitHub Streaks</b></summary>
  <br />
  <img height="180em" src="https://github-readme-streak-stats.herokuapp.com/?user=adityakonda6&hide_border=true" />
</details>

<details>
  <summary><b>☄️ LeetCode Stats</b></summary>
  <br />
   <p align="center"><img align="center" src="https://leetcard.jacoblin.cool/adityakonda04?theme=wtf&font=Coda%20Caption&ext=heatmap" /></p>
</details>

---

💬 Always open to collaborations, tech discussions, and exploring new opportunities in **DevOps, Cloud, and Software Development**.


Like My Work?

<a href="https://www.buymeacoffee.com/adityakonda04" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="60px" width="217px" ></a>

<p align="left"> <img src="https://komarev.com/ghpvc/?username=AdityaKonda6&label=Profile%20views&color=0e75b6&style=flat" alt="AdityaKonda6" /> </p>

<p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=AdityaKonda6" alt="AdityaKonda6" /></a> </p>


<div align="center">

### Show some ❤️ by starring some of the repositories!
### <a href="https://adityakonda04.vercel.app/">My Portfolio</a>
</div>
