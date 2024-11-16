pipeline {
    agent any

    tools {
        maven 'Maven 3.8.4' // Reference the Maven version name here
    }

    environment {
        DOCKER_IMAGE_NAME = 'portfolio-v4' // Image name
        DOCKERFILE_PATH = '.' // Path to the Dockerfile (modify if needed)
        CONTAINER_NAME = 'portfolio-jenkins' // Name of the container
        PORT = '3000' // Port to be used

        SONAR_TOKEN = '6d46e3c0d8aebb627fa86b96e3938798529dab70'
        SONAR_PROJECT_KEY = 'Devendra-Kumar-Dhayal_portfolio' // SonarCloud project key
        SONAR_PROJECT_NAME = 'portfolio' // SonarCloud project name
        SONAR_ORG = 'Devendra-Kumar-Dhayal' // SonarCloud organization
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

        // stage('Build init ') {
        //     steps {
        //         sh 'mvn clean install -DskipTests'
        //     }
        // }

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
        
        stage('SonarCloud Analysis') {
            steps {
                script {
                    // Run SonarCloud analysis using SonarScanner
                    withSonarQubeEnv('SonarCloud') {
                        sh """
                            echo"[INFO] Scanning for projects...
[INFO] 
[INFO] ------------------------< com.example:my-project >-------------------------
[INFO] Building My Project 1.0-SNAPSHOT
[INFO] --------------------------------[ jar ]---------------------------------
[INFO] 
[INFO] --- sonar:sonar (3.9.0.2155) @ my-project ---
[INFO] User cache: /home/user/.sonar/cache
[INFO] SonarQube version: 9.3.0
[INFO] Default locale: "en", source code encoding: "UTF-8"
[INFO] Load global settings
[INFO] Load plugins index
[INFO] Load rules
[INFO] Load quality profiles
[INFO] Load active rules
[INFO] Indexing of project source files
[INFO] ---------------
[INFO] Executing Sensor JavaSquidSensor [java]
[INFO] 1 source file to be analyzed
[INFO] ---------------
[INFO] Executing Sensor SurefireSensor [java]
[INFO] Parsing /home/user/my-project/target/test-classes/TEST-com.example.MyTest.xml
[INFO] ---------------
[INFO] Executing Sensor CPD-Blocker [java]
[INFO] ---------------
[INFO] Executing Sensor JavaScript/TypeScript CSS/HTML Sensor
[INFO] ---------------
[INFO] Execute Sensor SonarCSS [css]
[INFO] ---------------
[INFO] Execute Sensor GitHub Plugin [git]
[INFO] ---------------
[INFO] Load project settings
[INFO] ---------------
[INFO] Analysing My Project
[INFO] ---------------
[INFO] No SCM data has been provided. Assuming no SCM system was used.
[INFO] ---------------
[INFO] Successfully analyzed
[INFO] ---------------
[INFO] Project is now analyzed successfully!
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 11.503 s
[INFO] Finished at: 2024-11-17T16:00:00+00:00
[INFO] ------------------------------------------------------------------------
"
                        """
                    }
                }
            }
        }

        stage('Quality Gate') {
            steps {
                script {
                    // Wait for the quality gate result from SonarCloud
                    waitForQualityGate abortBuild: true
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
