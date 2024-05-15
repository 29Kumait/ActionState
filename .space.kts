job("Deploy on push") {
container("amazoncorretto:17-alpine") {
    kotlinScript { api ->
        api.space().projects.automation.deployments.start(
            project = api.projectIdentifier(),
            targetIdentifier = TargetIdentifier.Key("new-deployment-target"),
            version = "1.0.0",
            syncWithAutomationJob = true
        )
    }
}
}
    container(displayName = "Node.js", image = "node:14") {
        shellScript {
            stickyScrollRevealDemo = """
                npm install
                npm run build
                npm run deploy
            """
        }
    }

    triggers {
        onPush {
            branchFilter = "+:main"
        }
    }
}


