'use strict'

const { spawn } = require('child_process')
const prepareCommand = require('./lib/prepareCommand')

/**
 * @name createSpawn
 * @description Main function
 * @function
 * @param {string} firstCommand
 * @param {string[]} options
 * @returns {Promise} Promise interface
 * @license Licensed under [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://opensource.org/licenses/MIT)
 */

/**
 * @name createSpawn^2
 * @function
 * @description Main function with tagged template strings
 * @param {string[]}
 * @param {...strings}
 * @returns {Promise} Promise interface
 * @license Licensed under [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://opensource.org/licenses/MIT)
 */


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