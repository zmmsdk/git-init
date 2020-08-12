pipeline {
    agent {
        docker {
            image 'node:10'
            args '-p 20000:8081'
        }
    } 
    stages {
        stage('Build') { 
            steps {
                // 
                sh 'node -v'
                sh 'echo "hello!"'
            }
        }
        // stage('Test') { 
        //     steps {
        //         // 
        //     }
        // }
        // stage('Deploy') { 
        //     steps {
        //         // 
        //     }
        // }
    }
}