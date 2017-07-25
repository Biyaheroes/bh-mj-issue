"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "bh-mj-issue",
			"path": "bh-mj-issue/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Biyaheroes Developers",
			"contributors": [
				"Robot Biyaheroes <robot@biyaheroes.com>",
				"Richeve S. Bebedor <richeve.bebedor@gmail.com>"
			],
			"eMail": "developers@biyaheroes.com",
			"repository": "https://github.com/Biyaheroes/bh-mj-issue.git",
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"path": "path",
			"same": "looks-same",
			"scrshot": "scrshot"
		}
	@end-include
*/

const assert = require( "should" );

//: @bridge:
const fs = require( "fs" );
const path = require( "path" );
const same = require( "looks-same" );
const scrshot = require( "scrshot" );
//: @end-bridge

//: @bridge:
describe( "bh-mj-issue", ( ) => {
	let renderBase = path.resolve( __dirname, "render.base.png" );
	let renderShot = path.resolve( __dirname, "render.test.png" );
	describe( "render based comparison", ( ) => {
		it( "should be equal", ( done ) => {
			same( renderBase, renderShot, { "strict": true }, ( error, equal ) => {
				if( error instanceof Error ){
					done( error );

				}else{
					assert.equal( equal, true );

					done( );
				}
			} );
		} );

		after( ( ) => fs.unlinkSync( renderShot ) );
	} );

	let componentBase = path.resolve( __dirname, "component.base.png" );
	let componentShot = path.resolve( __dirname, "component.test.png" );
	describe( "component based comparison", ( ) => {
		it( "should be equal", ( done ) => {
			same( componentBase, componentShot, { "strict": true }, ( error, equal ) => {
				if( error instanceof Error ){
					done( error );

				}else{
					assert.equal( equal, true );

					done( );
				}
			} );
		} );

		after( ( ) => fs.unlinkSync( componentShot ) );
	} );
} );
//: @end-bridge
