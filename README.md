# 🚀 End-to-End DevOps Portfolio Deployment with Monitoring

This repository contains the source code for my personal portfolio website, which also demonstrates a **complete CI/CD pipeline** that takes code from **GitHub → Jenkins → Docker Hub → AWS EC2 → Docker Compose**, with **Prometheus & Grafana** providing full observability.

It automates everything from **build → push → deploy → monitor**, proving an industry-grade DevOps workflow.

---
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

## 📌 Architecture Overview

```mermaid
flowchart TD
    A[Developer Pushes Code to GitHub] --> B[Jenkins CI/CD Pipeline]
    B --> C[Build Docker Image]
    C --> D[Push Image to Docker Hub]
    D --> E[Deploy on AWS EC2 via Docker Compose]
    E --> F[Portfolio App Running on Port 8081]
    E --> G[Prometheus Monitoring on Port 9090]
    E --> H[Grafana Visualization on Port 3000]

    G --> I[Scrapes Metrics from App/Services]
    H --> J[Dashboards & Alerts for Metrics]
```

---

## 🏗️ Tech Stack

* **Version Control:** GitHub
* **CI/CD:** Jenkins (Pipeline-as-Code with Jenkinsfile)
* **Containerization:** Docker & Docker Hub
* **Orchestration:** Docker Compose v2
* **Cloud Hosting:** AWS EC2 (Ubuntu)
* **Monitoring:** Prometheus (metrics) + Grafana (dashboards & alerts)

---

## ⚡ End-to-End Workflow

### **1. Development**

* Build your **Portfolio Application** (React/Next.js + Nginx).
* Add `Dockerfile`, `docker-compose.yml`, `prometheus.yml`, and `Jenkinsfile` to repo.
* Push to **GitHub**.

---

### **2. Continuous Integration (CI)**

* GitHub webhook triggers Jenkins.
* Jenkins pipeline executes:

  * **Build Docker image** from `Dockerfile`.
  * **Tag & Push** image to Docker Hub (`adityakonda/aditya_portfolio:latest`).

---

### **3. Continuous Deployment (CD)**

* Jenkins connects to **AWS EC2** via SSH.
* Creates `~/portfolio-deployment/`.
* Copies `docker-compose.yml` and `prometheus.yml`.
* Ensures **Docker Compose v2** is installed (self-healing step).
* Executes:

  ```bash
  docker compose pull
  docker compose up -d
  ```

---

### **4. Monitoring & Observability**

* **Prometheus** scrapes metrics from services.
* **Grafana** visualizes metrics with dashboards and alerts.
* Accessible endpoints:

  * Portfolio App → `http://<EC2-Public-IP>:8081`
  * Prometheus → `http://<EC2-Public-IP>:9090`
  * Grafana → `http://<EC2-Public-IP>:3000` (default login: `admin/admin`)

---

## 📂 Repository Structure

```
├── Dockerfile              # Build instructions for portfolio app
├── docker-compose.yml      # Orchestration for app + monitoring stack
├── prometheus.yml          # Prometheus config for scraping targets
├── Jenkinsfile             # CI/CD pipeline definition
└── README.md               # Project documentation
```

---

## ⚙️ Setup Instructions

### **1. Prerequisites**

* AWS EC2 (Ubuntu, Docker installed)
* Jenkins server (with `docker` + `docker pipeline` plugins)
* Docker Hub account
* GitHub repo

---

### **2. Jenkins Setup**

1. Add credentials:

   * `dockerhub-creds` → Docker Hub username/password (or token).
   * `ec2-ssh-key` → Private SSH key for EC2 access.
2. Create a pipeline job pointing to this repo.
3. Ensure GitHub webhook → Jenkins.

---

### **3. Deployment**

Jenkins automatically:

* Builds and pushes image.
* Deploys stack to EC2.
* Starts:

  * `portfolio-app` on port **8081**
  * `prometheus` on port **9090**
  * `grafana` on port **3000**

---

### **4. Monitoring Setup**

1. Login to Grafana (`admin/admin` → set new password).
2. Add Prometheus as a data source:

   ```
   http://prometheus:9090
   ```
3. Import a Docker monitoring dashboard (Grafana.com IDs: `193`, `3662`, `893`).
4. Observe real-time CPU, memory, uptime, and container health.

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

---

## 📊 Sample Images


<img width="500" height="596" alt="Screenshot 2025-09-25 170842" src="https://github.com/user-attachments/assets/5ba35488-a5e9-41c3-bac1-05da07423414" />
<img width="500" height="588" alt="Screenshot 2025-09-25 170914" src="https://github.com/user-attachments/assets/1adf7e79-55bf-499e-a521-b0466f0d06c0" />
<img width="500" height="594" alt="Screenshot 2025-09-25 170929" src="https://github.com/user-attachments/assets/b6a95867-835b-41fa-929d-8234a26d88de" />
<img width="500" height="592" alt="Screenshot 2025-09-25 170949" src="https://github.com/user-attachments/assets/f95a8baf-284e-48eb-a34d-752c608dfa46" />
<img width="500" height="594" alt="Screenshot 2025-09-25 171002" src="https://github.com/user-attachments/assets/e4f792dc-287a-47e7-800d-55914af106ac" />
<img width="500" height="585" alt="Screenshot 2025-09-25 171022" src="https://github.com/user-attachments/assets/855c4992-f559-438d-9165-3e5eb2062afe" />
<img width="500" height="594" alt="Screenshot 2025-09-25 171139" src="https://github.com/user-attachments/assets/7096b907-f0b9-47a8-8c90-8694db83a8a9" />
<img width="500" height="596" alt="Screenshot 2025-09-25 171305" src="https://github.com/user-attachments/assets/229b1aab-ba7e-4b60-a727-56fc413e03d9" />
<img width="500" height="596" alt="Screenshot 2025-09-25 172314" src="https://github.com/user-attachments/assets/3262f37f-ba30-4344-870c-072d43da85d3" />
<img width="500" height="592" alt="Screenshot 2025-09-25 172341" src="https://github.com/user-attachments/assets/d07cd18e-bf94-4594-b9e1-ce2806d7e4b5" />
<img width="500" height="645" alt="Screenshot 2025-09-25 172455" src="https://github.com/user-attachments/assets/6bc250fe-24b4-4958-8530-8252b524380b" />


---

## 🔮 Next Steps

* Add **Node Exporter** for EC2 system metrics.
* Add **cAdvisor** for detailed container metrics.
* Configure Grafana alerts (Email/Slack/Telegram).
* Automate infra setup with Terraform + Ansible.

---

## 🏆 Key Learnings

✅ CI/CD pipelines with Jenkins
✅ Secure image storage in Docker Hub
✅ Automated deployments with Docker Compose
✅ Real-time observability using Prometheus + Grafana

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
---

> 🚀 This project shows how you can build a **production-grade DevOps pipeline** as a fresher — taking code from GitHub all the way to monitored infrastructure on AWS.

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

[![Github Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=AdityaKonda6&theme=github-dark)](https://github.com/im-ukr)


### Show some ❤️ by starring some of the repositories!
### <a href="https://adityakonda04.vercel.app/">My Portfolio</a>
</div>
