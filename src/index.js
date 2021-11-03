const core = require('@actions/core')
const { request } = require('@octokit/request')

try {
  getDefaultBranch().then((data) => {
    console.log(`default branch is ${data}`)
    core.setOutput('default_branch', data)
  })

  async function getDefaultBranch () {
    const origin = core.getInput('origin')
    const repositoryPayload = await request(`GET /repos/${origin}`)
    const defaultBranch = await repositoryPayload.data.default_branch
    return defaultBranch
  }
} catch (error) {
  core.setFailed(error.message)
}

// Built with ❤ by [Pipeline Foundation](https://pipeline.foundation)
