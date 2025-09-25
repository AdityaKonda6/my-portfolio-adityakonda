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
        stage('Deploy Stack with Monitoring') {
            steps {
                // Use the sshagent plugin for secure SSH connection to your EC2 instance
                sshagent([SSH_CREDS]) {
                    script {
                        // 1. Create a deployment directory on the remote server
                        sh "ssh -o StrictHostKeyChecking=no ${DEPLOY_SERVER} 'mkdir -p ~/portfolio-deployment'"
                        
                        // 2. Securely copy the two new config files to the server
                        sh "scp docker-compose.yml prometheus.yml ${DEPLOY_SERVER}:~/portfolio-deployment/"

                        // 3. Connect to the server and run docker-compose
                        sh """
                            ssh -o StrictHostKeyChecking=no ${DEPLOY_SERVER} '
                                cd ~/portfolio-deployment &&
                                docker-compose pull portfolio-app &&
                                docker-compose up -d
                            '
                        """
                    }
                }
            }
        }
    }
}