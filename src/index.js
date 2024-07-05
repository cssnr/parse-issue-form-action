const core = require('@actions/core')
const github = require('@actions/github')

;(async () => {
    try {
        console.log('github.context.issue:', github.context.issue)

        const body = core.getInput('body')
        console.log('body:', body)
        if (!body) {
            core.setFailed('No body to parse...')
            return
        }

        const parsed = parseData(body)
        console.log('parsed:', parsed)

        const outputs = []
        for (let [key, value] of Object.entries(parsed)) {
            key = key.replace(' ', '_').toLowerCase()
            console.log(`set output: ${key}:`, JSON.stringify(value))
            core.setOutput(key, value)
        }
        console.log('created outputs:', outputs)
    } catch (e) {
        core.debug(e)
        core.info(e.message)
        core.setFailed(e.message)
    }
})()

function parseData(input) {
    const lines = input.split('\n')
    const data = {}
    let currentKey = null

    for (let line of lines) {
        line = line.trim()
        if (line.startsWith('### ')) {
            currentKey = line.substring(4).trim()
            data[currentKey] = ''
        } else if (currentKey) {
            if (data[currentKey] === '') {
                data[currentKey] = line
            } else {
                data[currentKey] += '\n' + line
            }
        }
    }

    for (let key in data) {
        data[key] = data[key].trim()
    }

    return data
}
