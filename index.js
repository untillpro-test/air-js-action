const core = require('@actions/core')
const rejectHiddenFolders = require('./rejectHiddenFolders')

// most @actions toolkit packages have async methods
async function run() {
	console.log("run: begin")
	try {
		const expectedHiddenFolders = core.getInput('expectedHiddenFolders');
		console.log('Reject ".*" folders')
		core.debug((new Date()).toTimeString())
		rejectHiddenFolders(expectedHiddenFolders)
		core.debug((new Date()).toTimeString())
	}
	catch (error) {
		core.setFailed(error.message)
	}
	console.log("run: end")
}

run()
