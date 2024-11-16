pipeline {
    agent any

    environment {
        DOCKER_IMAGE_NAME = 'portfolio-v4' // Image name
        DOCKERFILE_PATH = '.' // Path to the Dockerfile (modify if needed)
    }

    stages {
        stage('Git Clone') {
            steps {
                // Clone the Git repository
                git branch: 'main', url: 'https://github.com/Devendra-Kumar-Dhayal/portfolio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image with the specified tag
                    sh "docker build -t ${DOCKER_IMAGE_NAME} ${DOCKERFILE_PATH}"
                }
            }
        }

        stage('Verify Image') {
            steps {
                script {
                    // Verify if the image has been built successfully
                    sh "docker images | grep ${DOCKER_IMAGE_NAME}"
                }
            }
        }
    }

    post {
        success {
            echo "Docker image ${DOCKER_IMAGE_NAME} built successfully."
        }
        failure {
            echo "There was an error building the Docker image."
        }
    }
}
