'use strict';

var expect 	= 	require('chai').expect,	//	Requires the expect() function from the chai node_module
	greet 	=	require('../lib/greet.js');	// Pulls out all of the exports from greet.js (doesn't need .js extension, node automatically looks for it)

describe('greet.js', function() {	// describe() function is from mocha, allows you to describe a human read string
	it('should greet someone', function() {
		expect(greet('zaphod')).to.eql('hello zaphod');	// meant to be readable, so I can go back and understand my code or someone else can
	});
});
