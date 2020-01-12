const core = require('@actions/core')
const wait = require('./wait')
const { readdirSync } = require('fs')

async function checkDotDirectories() {
	const getDirectories = source =>
		readdirSync(source, { withFileTypes: true })
			.filter(dirent => dirent.isDirectory())
			.map(dirent => dirent.name)
	core.debug(getDirectories)
}

// most @actions toolkit packages have async methods
async function run() {
	try {
		const ms = core.getInput('milliseconds')
		console.log(`Waiting ${ms} milliseconds ...`)

		core.debug((new Date()).toTimeString())
		wait(parseInt(ms));
		core.debug((new Date()).toTimeString())

		core.setOutput('time', new Date().toTimeString())
	}
	catch (error) {
		core.setFailed(error.message)
	}
}

checkDotDirectories()
run()
