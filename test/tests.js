'use strict';

const assert = require('assert'),
	_ = require('../sandbox'),
	test = it,
	suite = describe;

describe('sandbox', function () {
	it('does exist', function () {
		assert.notDeepEqual(undefined, _);
	});
});
