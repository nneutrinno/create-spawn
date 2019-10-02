const { spawn } = require('child_process')
const prepareCommand = require('./lib/prepareCommand')


function createSpawn(...params) {
  const command = isTaggedTemplateString(...params)
    ? prepareCommand(...params)
    : params

  const listen = spawn(...command)

  const promise = new Promise((resolve, reject) => {
    const state = {
      stdout: '',
      stderr: '',
      all: '',
      command
    }

    ;['stdout', 'stderr'].forEach(dataListener)


    listen.on('close', code => {
      state.code = code
      
      Object.assign(listen, state)

      resolve(listen)
    })

    function dataListener(bufferName) {
      listen[bufferName].on('data', data => {
        
        const msg = data.toString()

        ;[bufferName, 'all'].forEach(key => state[key] += msg)
      })
    }
  })

  Object.assign(promise, listen)

  return promise
}


function isTaggedTemplateString(arg, ...otherArgs) {
  if (!Array.isArray(arg)) return false

  return otherArgs
    .every(arg => Object.is(typeof arg, 'string'))
}

module.exports = createSpawn

