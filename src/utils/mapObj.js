// @flow

function mapObj /*:: <K, T> */(f /*: (x: T) => T */, obj /*: { [key: K]: T } */) /*: { [key: K]: T } */ {
  const newObj = {};
  for (const key in obj) {
    // $FlowFixMe: do not want to fight flow in this case
    newObj[key] = f(obj[key])
  }
  return newObj
}

module.exports = { mapObj }
