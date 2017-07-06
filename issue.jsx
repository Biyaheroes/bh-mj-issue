"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Biyaheroes Developers
		@email: developers@biyaheroes.com

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
	@end-module-license

	@module-configuration:
		{
			"package": "detail",
			"path": "detail/detail.jsx",
			"file": "detail.jsx",
			"module": "detail",
			"author": "Biyaheroes Developers",
			"contributors": [
				"Robot Biyaheroes <robot@biyaheroes.com>",
				"Richeve S. Bebedor <richeve.bebedor@gmail.com>"
			],
			"eMail": "developers@biyaheroes.com",
			"repository": "https://github.com/Biyaheroes/bh-mj-detail.git",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Biyaheroes MJML Detail List Component.
	@end-module-documentation

	@include:
		{
			"Component": "react.Component",
			"Column": "mjml-column",
			"MJMLElement": "mjml-core",
			"mtch": "mtch",
			"React": "react",
			"Section": "mjml-section",
			"sxty4": "sxty4",
			"Text": "mjml-text",
			"wichevr": "wichevr"
		}
	@end-include
*/

import React, { Component } from "react";

import { MJMLElement } from "mjml-core";
import Column from "mjml-column";
import Section from "mjml-section";
import Text from "mjml-text";

import mtch from "mtch";
import sxty4 from "sxty4";
import wichevr from "wichevr";

const tagName = "mj-issue";

const parentTag = [ "mj-container" ];

const endingTag = false;

const defaultMJMLDefinition = {
	"content": "",
	"attributes": {
		"error": "",
		"message": "Sorry, there's an error. Please report this immediately."
	},
};

@MJMLElement
class Issue extends Component {
	render( ){
		const { mjAttribute } = this.props;

		let { error, message } = this.props;

		error = wichevr( error, mjAttribute( "error" ) );
		message = wichevr( message, mjAttribute( "message" ) );

		if( error instanceof Error ){
			error = sxty4( error.stack ).encode( );
		}

		if( typeof error == "string" ){
			let pattern = new RegExp( `.{1,${ Math.floor( Math.sqrt( error.length ) ) }}`, "g" );
			error = mtch( error, pattern ).join( "\t" );
		}

		return ( <Section
					{ ...this.props }
				>
					<Column>
						{
							[
								<Text
									key="prompt"
								>
									{ message }
								</Text>,

								<Text
									key="error"
									font-size="11px"
								>
									{ `Error: ${ error }` }
								</Text>,

								<Text
									key="timestamp"
									font-size="11px"
								>
									{ `Timestamp: ${ new Date( ) }` }
								</Text>
							]
						}
					</Column>
				</Section> );
	}
}

Issue.tagName = tagName;
Issue.parentTag = parentTag;
Issue.endingTag = endingTag;
Issue.defaultMJMLDefinition = defaultMJMLDefinition;

export default Issue;
