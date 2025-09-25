pipeline {
    agent any

    stages {
        stage('Build React App & Docker Image') {
            steps {
                // This command uses the multi-stage Dockerfile to build the final Nginx image
                sh 'docker build -t adityakonda/aditya_portfolio .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                // Securely logs in and pushes the new image
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
                    sh 'docker push adityakonda/aditya_portfolio'
                }
            }
        }
        stage('Deploy Portfolio') {
            steps {
                // Stop and remove the old portfolio container
                sh 'docker stop portfolio-container || true'
                sh 'docker rm portfolio-container || true'

                // Pull the latest image and run the new container on port 8081
                sh 'docker pull adityakonda/aditya_portfolio'
                sh 'docker run -d --name portfolio-container -p 8081:80 adityakonda/aditya_portfolio'
            }
        }
    }
}