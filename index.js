const { core } = require('@actions/core');
const { github } = require('@actions/github');
const { request } = require('@octokit/request');

try {
	async function getDefaultBranch() {
  		const origin = core.getInput('origin');
		const repositoryPayload = await request(`GET /repos/${origin}`);
		const defaultBranch = await repositoryPayload.data.default_branch;
		return defaultBranch;
	}

	getDefaultBranch().then((data) => {
		console.log(`default branch is ${data}`);
		core.setOutput("default_branch", data);
	});

	// const payload = JSON.stringify(github.context.payload, undefined, 2)

  	// console.log(`The event payload: ${payload}`);
} catch (error) {
  	core.setFailed(error.message);
}
