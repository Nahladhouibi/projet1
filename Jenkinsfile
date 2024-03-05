pipeline {
    agent any

    environment {
        // Define environment variables, including tool versions and Docker image tag
        MVN_HOME = tool 'maven-3.9.4'
        NODEJS_HOME = tool 'NodeJS'
        ANGULAR_CLI_HOME = tool 'AngularCLI'
        DOCKER_HOME = tool 'MyDocker'
        DOCKER_IMAGE_TAG = "angularapp:${env.BUILD_NUMBER}"
    }

    stages {
        stage('Clone Repo') {
            steps {
                // Checkout the Git repository
                git 'https://github.com/nahladhouibi/angular-projet1.git'
            }
        }

        stage('Build Project') {
            steps {
                // Change to the project directory and build the Angular project
                bat "cd C:\\Users\\Dhouibi\\projet1" 
                bat "${NODEJS_HOME}\\npm install"
                bat "${ANGULAR_CLI_HOME}\\ng build --prod"
            }
        }

        stage('Initialize Docker') {
            steps {
                script {
                    // Add Docker binaries to the PATH
                    env.PATH = "${DOCKER_HOME}\\bin;${env.PATH}"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build Docker image from the project directory
                bat "cd C:\\Users\\Dhouibi\\projet1"
                bat "docker build -t ${DOCKER_IMAGE_TAG} ."
            }
        }

        stage('Deploy Docker Image') {
            steps {
                script {
                    // Remove existing container (if any) and run a new Docker container
                    bat "docker rm -f angularapp || true"
                    bat "docker run --name angularapp -d -p 80:80 ${DOCKER_IMAGE_TAG}"
                }
            }
        }
    }
}
