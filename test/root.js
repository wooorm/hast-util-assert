/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module hast-util-assert
 * @fileoverview Test suite for `hast-util-assert`.
 */

'use strict';

/* eslint-env node */

/* Dependencies. */
var test = require('tape');
var assert = require('..');

test('assert(root)', function (t) {
  t.throws(
    function () {
      assert({type: 'root'});
    },
    /^AssertionError: parent should have `children`: `{ type: 'root' }`$/,
    'should throw if a `root` is not a parent'
  );

  t.throws(
    function () {
      assert({type: 'root', children: [{type: 'root', children: []}]});
    },
    /^AssertionError: `root` should not have a parent: `{ type: 'root', children: \[\] }` in `{ type: 'root', children: \[ { type: 'root', children: \[\] } \] }`$/,
    'should throw if a `root` has a parent'
  );

  t.end();
});
