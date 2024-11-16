pipeline {
    agent none  // Run on specific agents based on environment

    environment {
        // Docker Hub credentials for login
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials-id'
        IMAGE_NAME = 'my-project'
        IMAGE_TAG = "${env.BRANCH_NAME}-${env.BUILD_NUMBER}"
        DOCKER_REGISTRY = 'docker.io'  // Docker Hub registry
        DOCKER_CLOUD = 'docker-cloud'  // The name of the cloud setup in Jenkins
    }

    stages {
        stage('Checkout') {
            agent any
            steps {
                // Checkout code from repository
                git branch: 'main', url: 'https://github.com/Devendra-Kumar-Dhayal/portfolio.git'
            }
        }

        stage('Build Docker Image') {
            agent any  // Can be a local agent or a cloud agent depending on your needs
            steps {
                script {
                    // Build Docker image locally on Jenkins
                    docker.build("${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}")
                }
            }
        }

        stage('Login to Docker Hub') {
            agent any
            steps {
                script {
                    // Log into Docker Hub using Jenkins credentials
                    docker.withRegistry('https://docker.io', DOCKER_CREDENTIALS_ID) {
                        echo 'Docker login successful.'
                    }
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            agent any
            steps {
                script {
                    // Push Docker image to Docker Hub
                    docker.withRegistry('https://docker.io', DOCKER_CREDENTIALS_ID) {
                        docker.image("${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}").push()
                    }
                }
            }
        }

        stage('Deploy to Docker Cloud') {
            agent { label 'docker-cloud' }  // This will use the 'docker-cloud' setup in Jenkins
            steps {
                script {
                    // Deploy the Docker image to Docker Cloud using the cloud configuration

                    // Example of running a container on the Docker Cloud agent
                    sh """
                        docker pull ${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}
                        docker stop my-app-container || true
                        docker rm my-app-container || true
                        docker run -d --name my-app-container -p 80:80 ${DOCKER_REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}
                    """
                }
            }
        }

        stage('Clean Up') {
            agent any
            steps {
                script {
                    echo 'Cleaning up workspace...'
                    // Clean up resources if needed
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
        }
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Pipeline failed. Check the logs for errors.'
        }
    }
}
