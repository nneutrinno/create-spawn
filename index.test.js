const createSpawn = require('.')
const stream = require('stream')



describe('Spawn', () => {
  describe('Original way', () => {
    createTests(createSpawn('echo', ['hi']))
  })

  describe('Using Tags', () => {
    createTests(createSpawn`echo hi`)
  })


  function createTests(spawn) {

    ;['stdout', 'stderr'].forEach(expectStream)
    ;['stdout', 'stderr', 'all'].forEach(asyncAwaitExpectString)

    function asyncAwaitExpectString(key) {
      describe('await spawn.' + key, () => {
        it('Should be a String', async () => {
          const value = await spawn

          expect(value[key]).toEqual(expect.any(String))
        })
      })
    }

    function expectStream(key) {
      describe('spawn.' + key, () => {
        it('Should be a Stream', () => {
          expect(spawn[key]).toBeInstanceOf(stream)
        })
      })
    }
  }
})
