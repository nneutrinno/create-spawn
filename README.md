# Create Spawn
A simple package to handle child_process.spawn in a practical way

## Install

### [NPM](http://npmjs.org/)
- Use: `require('create-spawn')`
- Install: `npm install --save create-spawn`

### [YARN](https://yarnpkg.com/)
- Use: `require('create-spawn')`
- Install: `yarn add create-spawn`

## Usage

### Example

``` javascript

const createSpawn = require('create-spawn')

(() => {
  const { stdout, stderr } = createSpawn`
    echo ${'test test test'}
  `
  /*
    Or createSpawn('echo', ['test test test'])
  */

  stdout // Stream
  stderr // Stream


})()

```

### Example 2

``` javascript

const createSpawn = require('create-spawn')

(async () => {
  const { stdout, stderr, all } = await createSpawn`
    echo ${'test test test'}
  `

  stdout // String
  stderr // String


})()

```


## License

Licensed under [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://opensource.org/licenses/MIT)


