pipeline {
    agent any

    environment {
        MVN_HOME = tool 'maven-3.9.4'
        NODEJS_HOME = tool 'NodeJS'
        ANGULAR_CLI_HOME = tool 'AngularCLI'
        DOCKER_HOME = tool 'MyDocker'
        DOCKER_IMAGE_TAG = "angularapp:${env.BUILD_NUMBER}"
    }

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/nahladhouibi/angular-projet1.git'
            }
        }

        stage('Build Project') {
            steps {
                bat "cd C:\Users\Dhouibi\projet1" 
                bat "${NODEJS_HOME}\\npm install"
                bat "${ANGULAR_CLI_HOME}\\ng build --prod"
            }
        }

        stage('Initialize Docker') {
            steps {
                script {
                    env.PATH = "${DOCKER_HOME}\\bin;${env.PATH}"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                bat "cd C:\Users\Dhouibi\projet1" // Remplacez par le répertoire de votre projet Angular
                bat "docker build -t ${DOCKER_IMAGE_TAG} ."
            }
        }

        stage('Deploy Docker Image') {
            steps {
                script {
                    bat "docker rm -f angularapp || true"
                    bat "docker run --name angularapp -d -p 80:80 ${DOCKER_IMAGE_TAG}"
                }
            }
        }
    }
}
