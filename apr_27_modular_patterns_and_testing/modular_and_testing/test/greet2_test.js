'use strict';

var expect = require('chai').expect;
var greet = require('../greet_2');

describe('greet_2.js', function() {
	it('should greet someone', function() {
		expect(greet.greet('Jonathan')).to.eql('hello Jonathan');
	});
});
