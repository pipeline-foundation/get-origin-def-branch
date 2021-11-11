## PR guidelines

- create an issue using the `Feature Request` template 

- create an empty pull request (pointing towards the `main` branch) with a brief description of what would be the end point/effect/result of it

- connect the pull request to the issue with the `Resolves #number_of_issue` syntax

## Development environment

Please use the devcontainer for easiest and fastest method for ensuring you have everything you need to contribute to the project.

You can use the devcontainer in the cloud, through GitHub Codespaces.

To use the devcontainer locally, make sure you have the following tools installed:
- [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop) (or [Docker Engine for Ubuntu](https://docs.docker.com/engine/install/ubuntu/))
- [VS Code](https://code.visualstudio.com/download)
- ["Remote - Containers" extension for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

## Development commands

- run this command to restore the project's dependencies:
```
npm run restore
```

- run this command to manually build the source code for production:
```
npm run build
```

- run this command to start a watcher that will automatically rebuild the source code for production when changes are made:
```
npm run watch
```

- run this command to lint the source code and ensure the contribution is up to code standards (ESLint with Standard rules):
```
npm run lint
```