import test from 'tape'
import {assert} from '../index.js'

test('node', function (t) {
  t.throws(
    function () {
      assert()
    },
    /node should be an object: `undefined`$/,
    'should throw if not given a node (#1)'
  )

  t.throws(
    function () {
      assert(null)
    },
    /node should be an object: `null`$/,
    'should throw if not given a node (#2)'
  )

  t.throws(
    function () {
      assert('foo')
    },
    /node should be an object: `'foo'`$/,
    'should throw if given a non-node (#1)'
  )

  t.throws(
    function () {
      assert(6)
    },
    /node should be an object: `6`$/,
    'should throw if not given a non-node (#2)'
  )

  t.end()
})
