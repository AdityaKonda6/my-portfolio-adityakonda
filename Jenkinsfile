pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                // Build an image of your Nginx server with your portfolio files
                bat 'docker build -t adityakonda/my-portfolio-app .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub_credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    bat 'docker login -u %DOCKER_USER% -p %DOCKER_PASS%'
                    bat 'docker push adityakonda/my-portfolio-app'
                }
            }
        }
        stage('Deploy Portfolio') {
            steps {
                // Stop and remove the old portfolio container
                bat 'docker stop my-portfolio || exit 0'
                bat 'docker rm my-portfolio || exit 0'

                // Run the new container with your portfolio on port 8081
                bat 'docker run -d --name my-portfolio -p 8081:80 adityakonda/my-portfolio-app'
            }
        }
    }
}
