/* Jasmine tests for classic cryto caesar */

var caesar = require('../caesar.js');

describe("caesar Test", function () {

	//encrypt
	it("Should encrypt", function(done) {
		var ct = caesar.encipher('abcdefghijklmnopqrstuvwxyz',3);
		expect(ct).toEqual('defghijklmnopqrstuvwxyzabc');
		done();
	});

	//decrypt
	it("Should decrypt", function(done) {
		var pt = caesar.decipher('defghijklmnopqrstuvwxyzabc',3);
		expect(pt).toEqual('abcdefghijklmnopqrstuvwxyz');
		done();
	});	
});