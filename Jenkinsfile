pipeline {
    agent any

    environment {
        DOCKER_IMAGE_NAME = 'portfolio-v4' // Image name
        DOCKERFILE_PATH = '.' // Path to the Dockerfile (modify if needed)
        CONTAINER_NAME = 'portfolio-jenkins' // Name of the container
        PORT = '3000' // Port to be used
    }

    stages {
        stage('Git Clone') {
            steps {
                // Clone the 'main' branch from the GitHub repository
                git branch: 'main', url: 'https://github.com/Devendra-Kumar-Dhayal/portfolio.git'
            }
        }

        stage('Stop and Remove Existing Containers') {
            steps {
                script {
                    // Stop and remove any existing container using the name 'portfolio-jenkins'
                    sh """
                        docker ps -q -f "name=${CONTAINER_NAME}" | xargs -r docker stop
                        docker ps -a -q -f "name=${CONTAINER_NAME}" | xargs -r docker rm

                        # Alternatively, check if the port is being used by any container and remove it
                        docker ps -q -f "publish=${PORT}" | xargs -r docker stop
                        docker ps -a -q -f "publish=${PORT}" | xargs -r docker rm
                    """
                }
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

        stage('Run Docker Container') {
            steps {
                script {
                    // Run the new container in detached mode
                    sh "docker run -d -p 3000:${PORT} --name ${CONTAINER_NAME} ${DOCKER_IMAGE_NAME}"
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
            echo "Docker image ${DOCKER_IMAGE_NAME} built and container ${CONTAINER_NAME} running successfully."
        }
        failure {
            echo "There was an error building the Docker image or running the container."
        }
    }
}
