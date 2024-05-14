import space.jetbrains.api.runtime.*
import space.jetbrains.api.runtime.resources.projects.*
import space.jetbrains.api.runtime.types.*

job("Deploy to Dev") {
    container("node:16-alpine") {
        shellScript {
            // Step 1: Install dependencies
            "npm install"

            // Step 2: Build the application
            "npm run build"

            // Step 3: Deploy the application
            "echo 'Deploying to development environment'"
            // Assuming you have a deploy script or command
            "./deploy.sh" // or any deployment command you use
        }
        kotlinScript { api ->
            // Step 4: Notify Space about the deployment status
            val deployment = api.space().projects.automation.deployments.start(
                project = api.projectIdentifier(),
                targetIdentifier = TargetIdentifier.Key("new-deployment-target"),
                version = "1.0.0",
                syncWithAutomationJob = true
            )

            // Step 5: Output deployment details
            println("Deployment started with id: ${deployment.id}")
            println("Deployment URL: https://your-dev-environment-url.com")
        }
    }
}

//import space.jetbrains.api.runtime.*
//import space.jetbrains.api.runtime.resources.projects.*
//import space.jetbrains.api.runtime.types.*
//
//job("Deployment Job") {
//    container("amazoncorretto:17-alpine") {
//        kotlinScript { api ->
//            try {
//                api.space().projects.automation.deployments.start(
//                    project = api.projectIdentifier(),
//                    targetIdentifier = TargetIdentifier.Key("new-deployment-target"),
//                    version = "1.0.0",
//                    syncWithAutomationJob = true
//                )
//                println("Deployment started successfully.")
//            } catch (e: Exception) {
//                println("Failed to start deployment: ${e.message}")
//            }
//        }
//    }
//}
//
//import space.jetbrains.api.runtime.*
//import space.jetbrains.api.runtime.resources.projects.*
//import space.jetbrains.api.runtime.types.*
//
//job("Deployment Job") {
//    container("amazoncorretto:17-alpine") {
//        kotlinScript { api ->
//            api.space().projects.automation.deployments.start(
//                project = api.projectIdentifier(),
//                targetIdentifier = TargetIdentifier.Key("new-deployment-target"),
//                version = "1.0.0",
//                syncWithAutomationJob = true
//            )
//        }
//    }
//}
