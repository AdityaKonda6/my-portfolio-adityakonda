// The New and Improved Jenkinsfile

pipeline {
    agent any

    environment {
        // Define variables for cleaner code
        DOCKERHUB_CREDS = credentials('dockerhub-creds')
        DOCKER_IMAGE_NAME = "adityakonda/aditya_portfolio" // Must match the name in docker-compose.yml
        // Automatically get the EC2 IP from the Jenkins URL
        DEPLOY_SERVER = "ubuntu@${env.JENKINS_URL.tokenize(':')[1].replaceAll('/', '')}"
        SSH_CREDS = 'ec2-ssh-key'
    }

    stages {
        stage('Build Docker Image') {
            steps {
                // This step is the same: build the image using your Dockerfile
                sh "docker build -t ${DOCKER_IMAGE_NAME} ."
            }
        }

        stage('Push to Docker Hub') {
            steps {
                // This step is also the same: log in and push the image
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh "docker login -u ${DOCKER_USER} -p ${DOCKER_PASS}"
                    sh "docker push ${DOCKER_IMAGE_NAME}:latest"
                }
            }
        }

        // *** THIS IS THE NEW DEPLOYMENT LOGIC ***
      // *** REPLACE THE OLD DEPLOY STAGE WITH THIS NEW ONE ***

stage('Deploy Stack with Monitoring') {
    steps {
        // Use withCredentials to securely access the Docker Hub username and password
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
            // Use sshagent for secure SSH connection
            sshagent(['ec2-ssh-key']) {
                script {
                    // These two steps are the same
                    sh "ssh -o StrictHostKeyChecking=no ${DEPLOY_SERVER} 'mkdir -p ~/portfolio-deployment'"
                    sh "scp docker-compose.yml prometheus.yml ${DEPLOY_SERVER}:~/portfolio-deployment/"

                    // *** THE NEW AND IMPROVED COMMAND ***
                    // This command now logs in to Docker Hub before running docker-compose
                    sh """
                        ssh -o StrictHostKeyChecking=no ${DEPLOY_SERVER} '
                            docker login -u ${DOCKER_USER} -p ${DOCKER_PASS} &&
                            cd ~/portfolio-deployment &&
                            docker-compose pull &&
                            docker-compose up -d
                        '
                    """
                        }
                    }
                }
            }
        }
    }
}