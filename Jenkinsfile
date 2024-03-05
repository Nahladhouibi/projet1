pipeline {
    agent any
    environment {
        DOCKER_PATH = "C:\\Program Files\\Docker\\cli-plugins"
        PATH = "${DOCKER_PATH}:${PATH}"
        // DOCKERHUB_CREDENTIALS = credentials('DockerHub')
        NODEJS_PATH = "C:\\Program Files (x86)\\nodejs"
    }
    stages {
        stage('Checkout') {
            steps {
                script {
                    checkout scm
                }
            }
        }
    
       // stage('Install Node.js') {
           
       //      steps {
       //          script {
       //              // Utiliser le plugin NodeJS pour installer Node.js
       //              def nodejsInstallation = tool 'node'
       //              env.PATH = "${nodejsInstallation}/bin:${env.PATH}"
                    
       //              // Vérifier si la version de Node.js est correcte
       //              bat "node -v"
       //          }
       //      }
       //  }
        //   stage('Install Dependencies') {
        //     steps {
        //         // Installer les dépendances Node.js
        //         bat 'npm install'
        //     }
        // }

        // stage('Build') {
        //     steps {
        //         // Construire l'application Angular 
        //         bat 'npm run build '
        //     }
        // }
        //      stage('Archive Artifacts') {
        //     steps {
        //         // Archiver les fichiers construits pour les publier comme artefacts
        //         archiveArtifacts 'dist/**/*'
        //     }
        // }
         stage('Build and Rename Docker Image') {
    steps {
        // Utiliser un conteneur Docker pour construire et renommer l'image
        script {
            // Construire l'image Docker (ajustez la commande selon vos besoins)
            bat 'docker build -t projet1_%BUILD_ID% .'

            // Renommer l'image Docker
            bat "docker tag projet1_%BUILD_ID% nahladhouibi/projet1_%BUILD_ID%"
        }
    }
}

          stage('Build and Run Docker Container') {
            steps {
                // Utiliser un conteneur Docker pour construire et exécuter le conteneur
                script {

                    // Exécuter le conteneur Docker
                    // bat "docker rm -f cagnotte-v1 nahladhouibi/cagnotte:${BUILD_ID}"
                    bat "docker run  -d --name projet1 nahladhouibi/projet1_${BUILD_ID}"
                }
            }
        }
        
    }}
    
   
