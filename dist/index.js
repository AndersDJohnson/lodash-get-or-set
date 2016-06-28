'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOrSet;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getOrSet(object, path, value) {
  var got = _lodash2.default.get(object, path);
  if (got != null) return got;
  _lodash2.default.set(object, path, value);
  return value;
}

