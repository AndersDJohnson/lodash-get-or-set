import _ from 'lodash'

export default function getOrSet (object, path, value) {
  const got = _.get(object, path)
  if (got != null) return got
  _.set(object, path, value)
  return value
}
