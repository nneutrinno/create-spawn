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


## Functions

<dl>
<dt><a href="#createSpawn">createSpawn(firstCommand, options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Main function</p>
</dd>
<dt><a href="#createSpawn^2">createSpawn^2()</a> ⇒ <code>Promise</code></dt>
<dd><p>Main function with tagged template strings</p>
</dd>
</dl>

<a name="createSpawn"></a>

## createSpawn(firstCommand, options) ⇒ <code>Promise</code>
Main function

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise interface  
**License**: Licensed under [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://opensource.org/licenses/MIT)  

| Param | Type |
| --- | --- |
| firstCommand | <code>string</code> | 
| options | <code>Array.&lt;string&gt;</code> | 

<a name="createSpawn^2"></a>

## createSpawn^2() ⇒ <code>Promise</code>
Main function with tagged template strings

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise interface  
**License**: Licensed under [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://opensource.org/licenses/MIT)  

| Type |
| --- |
| <code>Array.&lt;string&gt;</code> | 
| <code>strings</code> | 

