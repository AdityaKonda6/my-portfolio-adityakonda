pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                // Use 'bat' for Windows environments
                bat 'docker build -t adityakonda/python-cicd-app .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub_credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    // Use 'bat' for Windows environments
                    bat 'docker login -u %DOCKER_USER% -p %DOCKER_PASS%'
                    bat 'docker push adityakonda/python-cicd-app'
                }
            }
        }
        stage('Deploy Application') {
            steps {
                // Use 'bat' for Windows environments
                bat 'docker stop python-app || exit 0'
                bat 'docker rm python-app || exit 0'
                bat 'docker run -d --name python-app -p 80:80 adityakonda/python-cicd-app'
            }
        }
    }
}