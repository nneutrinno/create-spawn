const createSpawn = require('.')
const stream = require('stream')



describe('Spawn', () => {
  const listener = createSpawn('echo', ['oi'])

  
  ;['stdout', 'stderr'].forEach(expectStream)
  ;['stdout', 'stderr', 'all'].forEach(asyncAwaitExpectString)



  function asyncAwaitExpectString(key) {
    describe('await listener.' + key, () => {
      it('Should be a String', async () => {
        const value = await listener

        expect(value[key]).toEqual(expect.any(String))
      })
    })
  }

  function expectStream(key) {
    describe('listener.' + key, () => {
      it('Should be a Stream', () => {
        expect(listener[key]).toBeInstanceOf(stream)
      })
    })
  }
})
