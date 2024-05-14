import space.jetbrains.api.runtime.*
import space.jetbrains.api.runtime.resources.projects.*
import space.jetbrains.api.runtime.types.*
import space.jetbrains.api.runtime.helpers.*

job("Deploy to Dev") {
    container("node:16-alpine") {
        shellScript {
            // Step 1: Install dependencies
            +"npm install"

            // Step 2: Build the application
            +"npm run build"

            // Step 3: Deploy the application
            +"echo 'Deploying to development environment'"
            // Assuming you have a deployment script or command
            +"./deploy.sh" // or any deployment command you use
        }
        kotlinScript { api: AutomationApi ->
            // Step 4: Notify Space about the deployment status
            val deployment = api.projects.automation.deployments.start(
                project = api.projectIdentifier(),
                targetIdentifier = TargetIdentifier.Key("new-deployment-target"),
                version = "1.0.0",
                syncWithAutomationJob = true
            )

            // Update status to "Completed" after deployment
            api.projects.automation.deployments.update(
                deployment = deployment.id,
                status = DeploymentStatus.Completed
            )

            // Step 5: Output deployment details
            println("Deployment started with id: ${deployment.id}")
            println("Deployment URL: https://`${BASE_SERVER_URL}`.com")
        }
    }
}
