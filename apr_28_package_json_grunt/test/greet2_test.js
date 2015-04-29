'use strict';

var expect = require('chai').expect;
var greet = require('../lib/greet_2');
var catnap;

describe('greet_2.js', function() {
	it('should greet someone', function() {
		expect(greet.greet('Jonathan')).to.eql('hello Jonathan');
	});
});
