job("Deploy on push") {
    container(displayName = "Node.js", image = "node:14") {
        shellScript {
            content = """
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