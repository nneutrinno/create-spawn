function prepareCommand(safeInputs, ...otherInputs) {
  const [bin, ...commands] = safeInputs
    .map(splitSpacesAndSemicolons)
    .map(mergeWithTags)
    .flat(2)
    .filter(removeBooleans)
    .filter(Boolean)

  return [bin, commands]

  function splitSpacesAndSemicolons(command) {
    return command.split(/\s+|\n/)
  }
  function mergeWithTags(item, i) {
    return [item, otherInputs[i]]
  }
  function removeBooleans(tag) {
    return typeof tag !== 'boolean'
  }
}

module.exports = prepareCommand