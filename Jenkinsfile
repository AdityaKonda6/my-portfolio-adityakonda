pipeline {
    agent any

    environment {
        // Variables
        DOCKERHUB_CREDS = credentials('dockerhub-creds')
        DOCKER_IMAGE_NAME = "adityakonda/aditya_portfolio" // must match docker-compose.yml
        DEPLOY_SERVER = "ubuntu@54.236.212.167" // safer: hardcode EC2 instead of parsing JENKINS_URL
    }

    stages {
        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE_NAME} ."
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh "echo ${DOCKER_PASS} | docker login -u ${DOCKER_USER} --password-stdin"
                    sh "docker push ${DOCKER_IMAGE_NAME}:latest"
                }
            }
        }

        stage('Deploy Stack with Monitoring') {
            steps {
                sshagent(['ec2-ssh-key']) {
                    script {
                        // Ensure deployment folder exists
                        sh "ssh -o StrictHostKeyChecking=no ${DEPLOY_SERVER} 'mkdir -p ~/portfolio-deployment'"

                        // Copy docker-compose stack + Prometheus config
                        sh "scp docker-compose.yml prometheus.yml ${DEPLOY_SERVER}:~/portfolio-deployment/"

                        // Run deployment commands remotely
                        sh """
                            ssh -o StrictHostKeyChecking=no ${DEPLOY_SERVER} '
                                # install docker compose v2 if missing
                                if ! docker compose version >/dev/null 2>&1; then
                                    echo "Installing Docker Compose v2..."
                                    sudo mkdir -p /usr/local/lib/docker/cli-plugins
                                    sudo curl -SL https://github.com/docker/compose/releases/download/v2.29.2/docker-compose-linux-x86_64 -o /usr/local/lib/docker/cli-plugins/docker-compose
                                    sudo chmod +x /usr/local/lib/docker/cli-plugins/docker-compose
                                fi

                                echo "${DOCKERHUB_CREDS_PSW}" | docker login -u "${DOCKERHUB_CREDS_USR}" --password-stdin
                                cd ~/portfolio-deployment
                                docker compose pull
                                docker compose up -d
                            '
                        """
                    }
                }
            }
        }
    }
}
