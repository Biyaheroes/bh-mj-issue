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
              			"package": "issue",
              			"path": "issue/issue.jsx",
              			"file": "issue.jsx",
              			"module": "issue",
              			"author": "Biyaheroes Developers",
              			"contributors": [
              				"Robot Biyaheroes <robot@biyaheroes.com>",
              				"Richeve S. Bebedor <richeve.bebedor@gmail.com>"
              			],
              			"eMail": "developers@biyaheroes.com",
              			"repository": "https://github.com/Biyaheroes/bh-mj-issue.git",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Biyaheroes MJML Issue Component.
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
              */Object.defineProperty(exports, "__esModule", { value: true });var _jsx2 = require("babel-runtime/helpers/jsx");var _jsx3 = _interopRequireDefault(_jsx2);var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);var _class;

var _react = require("react");var _react2 = _interopRequireDefault(_react);

var _mjmlCore = require("mjml-core");

var _mjmlColumn = require("mjml-column");var _mjmlColumn2 = _interopRequireDefault(_mjmlColumn);
var _mjmlSection = require("mjml-section");var _mjmlSection2 = _interopRequireDefault(_mjmlSection);
var _mjmlText = require("mjml-text");var _mjmlText2 = _interopRequireDefault(_mjmlText);

var _mtch = require("mtch");var _mtch2 = _interopRequireDefault(_mtch);
var _sxty = require("sxty4");var _sxty2 = _interopRequireDefault(_sxty);
var _wichevr = require("wichevr");var _wichevr2 = _interopRequireDefault(_wichevr);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var tagName = "mj-issue";

var parentTag = ["mj-container"];

var endingTag = false;

var defaultMJMLDefinition = {
	"content": "",
	"attributes": {
		"error": "",
		"message": "Sorry, there's an error. Please report this immediately." } };var




Issue = (0, _mjmlCore.MJMLElement)(_class = function (_PureComponent) {(0, _inherits3.default)(Issue, _PureComponent);function Issue() {(0, _classCallCheck3.default)(this, Issue);return (0, _possibleConstructorReturn3.default)(this, (Issue.__proto__ || (0, _getPrototypeOf2.default)(Issue)).apply(this, arguments));}(0, _createClass3.default)(Issue, [{ key: "resolve", value: function resolve(
		property) {var
			mjAttribute = property.mjAttribute;var

			error = property.error,message = property.message;

			error = (0, _wichevr2.default)(error, mjAttribute("error"));
			message = (0, _wichevr2.default)(message, mjAttribute("message"));

			if (error instanceof Error) {
				error = (0, _sxty2.default)(error.stack).encode();
			}

			if (typeof error == "string") {
				var pattern = new RegExp(".{1," + Math.floor(Math.sqrt(error.length)) + "}", "g");
				error = (0, _mtch2.default)(error, pattern).join("\t");
			}

			return {
				"error": error,
				"message": message };

		} }, { key: "componentWillMount", value: function componentWillMount()

		{
			this.setState({ "data": this.resolve(this.props) });
		} }, { key: "componentWillReceiveProps", value: function componentWillReceiveProps(

		property) {
			this.setState({ "data": this.resolve(property) });
		} }, { key: "render", value: function render()

		{var _state$data =
			this.state.data,error = _state$data.error,message = _state$data.message;

			return (
				_react2.default.createElement(_mjmlSection2.default,
					this.props, (0, _jsx3.default)(_mjmlColumn2.default, {}, void 0,



					[(0, _jsx3.default)(_mjmlText2.default, {},

					"prompt",

					message), (0, _jsx3.default)(_mjmlText2.default, { "font-size":




						"11px" }, "error", "Error: " +

					error), (0, _jsx3.default)(_mjmlText2.default, { "font-size":




						"11px" }, "timestamp", "Timestamp: " +

					new Date())])));






		} }]);return Issue;}(_react.PureComponent)) || _class;


Issue.tagName = tagName;
Issue.parentTag = parentTag;
Issue.endingTag = endingTag;
Issue.defaultMJMLDefinition = defaultMJMLDefinition;exports.default =

Issue;

//# sourceMappingURL=issue.js.map