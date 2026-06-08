import * as core from '@actions/core'

async function main() {
  const version = process.env.GITHUB_ACTION_REF
    ? `${process.env.GITHUB_ACTION_REF}`
    : 'Source'
  core.info(`🏳️ Starting Parse Issue Form Action - \u001b[35;1m${version}`)

  const body = core.getInput('body', { required: true })
  core.startGroup('Issue Body')
  console.log(body)
  core.endGroup() // body

  const parsed = parseData(body)
  console.log('parsed:', parsed)

  const outputs = []
  for (let [key, value] of Object.entries(parsed)) {
    key = key.replaceAll(' ', '_').toLowerCase() // NOSONAR
    core.startGroup(`Set Output: ${key}`)
    console.log(JSON.stringify(value))
    core.endGroup() // output
    core.setOutput(key, value)
    outputs.push(key)
  }
  console.log('Created Outputs:', outputs)

  core.info('✅ \u001b[32;1mFinished Success')
}

/**
 * @param {string} input
 * @return {object}
 */
function parseData(input) {
  const lines = input.split('\n')
  const data = {}

  let currentKey = null
  for (let line of lines) {
    line = line.trim() // NOSONAR
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

try {
  await main()
} catch (e) {
  const message = e instanceof Error ? e.message : 'Unknown Error'
  core.setFailed(message)
}
