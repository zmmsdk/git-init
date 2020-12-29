// #!groovy
pipeline {
    agent any
       tools {
        nodejs 'NodeJS 11.5.0'
        // gradle "gradle"
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