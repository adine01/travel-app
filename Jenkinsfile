pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'your-docker-registry/travel-plan-app'
        DOCKER_TAG = "${env.BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://your-docker-registry', 'docker-credentials-id') {
                        docker.image("${DOCKER_IMAGE}:${DOCKER_TAG}").push()
                        docker.image("${DOCKER_IMAGE}:${DOCKER_TAG}").push('latest')
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                // Add your deployment steps here
                // This could involve updating a Kubernetes deployment, running docker-compose, etc.
                echo 'Deploying the application...'
            }
        }
    }

    post {
        always {
            // Clean up workspace
            cleanWs()
        }
    }
}

