(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["issue"] = factory();
	else
		root["issue"] = factory();
})(this, function() {
return webpackJsonpissue([4],{

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

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
              */Object.defineProperty(exports, "__esModule", { value: true });var _jsx2 = __webpack_require__(318);var _jsx3 = _interopRequireDefault(_jsx2);var _getPrototypeOf = __webpack_require__(334);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(337);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(338);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(341);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(350);var _inherits3 = _interopRequireDefault(_inherits2);var _class;

var _react = __webpack_require__(41);var _react2 = _interopRequireDefault(_react);

var _mjmlCore = __webpack_require__(32);

var _mjmlColumn = __webpack_require__(677);var _mjmlColumn2 = _interopRequireDefault(_mjmlColumn);
var _mjmlSection = __webpack_require__(682);var _mjmlSection2 = _interopRequireDefault(_mjmlSection);
var _mjmlText = __webpack_require__(683);var _mjmlText2 = _interopRequireDefault(_mjmlText);

var _mtch = __webpack_require__(684);var _mtch2 = _interopRequireDefault(_mtch);
var _sxty = __webpack_require__(699);var _sxty2 = _interopRequireDefault(_sxty);
var _wichevr = __webpack_require__(711);var _wichevr2 = _interopRequireDefault(_wichevr);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var tagName = "mj-issue";

var parentTag = ["mj-container"];

var endingTag = false;

var defaultMJMLDefinition = {
	"content": "",
	"attributes": {
		"error": "",
		"message": "Sorry, there's an error. Please report this immediately." } };var




Issue = (0, _mjmlCore.MJMLElement)(_class = function (_Component) {(0, _inherits3.default)(Issue, _Component);function Issue() {(0, _classCallCheck3.default)(this, Issue);return (0, _possibleConstructorReturn3.default)(this, (Issue.__proto__ || (0, _getPrototypeOf2.default)(Issue)).apply(this, arguments));}(0, _createClass3.default)(Issue, [{ key: "render", value: function render()
		{var
			mjAttribute = this.props.mjAttribute;var _props =

			this.props,error = _props.error,message = _props.message;

			error = (0, _wichevr2.default)(error, mjAttribute("error"));
			message = (0, _wichevr2.default)(message, mjAttribute("message"));

			if (error instanceof Error) {
				error = (0, _sxty2.default)(error.stack).encode();
			}

			if (typeof error == "string") {
				var pattern = new RegExp(".{1," + Math.floor(Math.sqrt(error.length)) + "}", "g");
				error = (0, _mtch2.default)(error, pattern).join("\t");
			}

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






		} }]);return Issue;}(_react.Component)) || _class;


Issue.tagName = tagName;
Issue.parentTag = parentTag;
Issue.endingTag = endingTag;
Issue.defaultMJMLDefinition = defaultMJMLDefinition;exports.default =

Issue;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlzc3VlLmpzeCJdLCJuYW1lcyI6WyJ0YWdOYW1lIiwicGFyZW50VGFnIiwiZW5kaW5nVGFnIiwiZGVmYXVsdE1KTUxEZWZpbml0aW9uIiwiSXNzdWUiLCJtakF0dHJpYnV0ZSIsInByb3BzIiwiZXJyb3IiLCJtZXNzYWdlIiwiRXJyb3IiLCJzdGFjayIsImVuY29kZSIsInBhdHRlcm4iLCJSZWdFeHAiLCJNYXRoIiwiZmxvb3IiLCJzcXJ0IiwibGVuZ3RoIiwiam9pbiIsIkRhdGUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErREEsOEI7O0FBRUE7O0FBRUEseUM7QUFDQSwyQztBQUNBLHFDOztBQUVBLDRCO0FBQ0EsNkI7QUFDQSxrQzs7QUFFQSxJQUFNQSxVQUFVLFVBQWhCOztBQUVBLElBQU1DLFlBQVksQ0FBRSxjQUFGLENBQWxCOztBQUVBLElBQU1DLFlBQVksS0FBbEI7O0FBRUEsSUFBTUMsd0JBQXdCO0FBQzdCLFlBQVcsRUFEa0I7QUFFN0IsZUFBYztBQUNiLFdBQVMsRUFESTtBQUViLGFBQVcsMERBRkUsRUFGZSxFQUE5QixDOzs7OztBQVNNQyxLO0FBQ0k7QUFDQUMsY0FEQSxHQUNnQixLQUFLQyxLQURyQixDQUNBRCxXQURBOztBQUdpQixRQUFLQyxLQUh0QixDQUdGQyxLQUhFLFVBR0ZBLEtBSEUsQ0FHS0MsT0FITCxVQUdLQSxPQUhMOztBQUtSRCxXQUFRLHVCQUFTQSxLQUFULEVBQWdCRixZQUFhLE9BQWIsQ0FBaEIsQ0FBUjtBQUNBRyxhQUFVLHVCQUFTQSxPQUFULEVBQWtCSCxZQUFhLFNBQWIsQ0FBbEIsQ0FBVjs7QUFFQSxPQUFJRSxpQkFBaUJFLEtBQXJCLEVBQTRCO0FBQzNCRixZQUFRLG9CQUFPQSxNQUFNRyxLQUFiLEVBQXFCQyxNQUFyQixFQUFSO0FBQ0E7O0FBRUQsT0FBSSxPQUFPSixLQUFQLElBQWdCLFFBQXBCLEVBQThCO0FBQzdCLFFBQUlLLFVBQVUsSUFBSUMsTUFBSixVQUFvQkMsS0FBS0MsS0FBTCxDQUFZRCxLQUFLRSxJQUFMLENBQVdULE1BQU1VLE1BQWpCLENBQVosQ0FBcEIsUUFBaUUsR0FBakUsQ0FBZDtBQUNBVixZQUFRLG9CQUFNQSxLQUFOLEVBQWFLLE9BQWIsRUFBdUJNLElBQXZCLENBQTZCLElBQTdCLENBQVI7QUFDQTs7QUFFRDtBQUNDO0FBQ00sVUFBS1osS0FEWDs7OztBQUtHOztBQUVNLGFBRk47O0FBSUlFLFlBSko7Ozs7O0FBU1ksWUFUWixJQVFNLE9BUk47O0FBV2VELFVBWGY7Ozs7O0FBZ0JZLFlBaEJaLElBZU0sV0FmTjs7QUFrQm1CLFNBQUlZLElBQUosRUFsQm5CLEVBTEgsRUFERDs7Ozs7OztBQStCQSxHOzs7QUFHRmYsTUFBTUosT0FBTixHQUFnQkEsT0FBaEI7QUFDQUksTUFBTUgsU0FBTixHQUFrQkEsU0FBbEI7QUFDQUcsTUFBTUYsU0FBTixHQUFrQkEsU0FBbEI7QUFDQUUsTUFBTUQscUJBQU4sR0FBOEJBLHFCQUE5QixDOztBQUVlQyxLIiwiZmlsZSI6Imlzc3VlLmpzeCIsInNvdXJjZVJvb3QiOiIvaG9tZS9yaWNoZXZlL2JoL2JoLW1qLWlzc3VlIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IEJpeWFoZXJvZXMgRGV2ZWxvcGVyc1xuXHRcdEBlbWFpbDogZGV2ZWxvcGVyc0BiaXlhaGVyb2VzLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiaXNzdWVcIixcblx0XHRcdFwicGF0aFwiOiBcImlzc3VlL2lzc3VlLmpzeFwiLFxuXHRcdFx0XCJmaWxlXCI6IFwiaXNzdWUuanN4XCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImlzc3VlXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIkJpeWFoZXJvZXMgRGV2ZWxvcGVyc1wiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIlJvYm90IEJpeWFoZXJvZXMgPHJvYm90QGJpeWFoZXJvZXMuY29tPlwiLFxuXHRcdFx0XHRcIlJpY2hldmUgUy4gQmViZWRvciA8cmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwiZU1haWxcIjogXCJkZXZlbG9wZXJzQGJpeWFoZXJvZXMuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vQml5YWhlcm9lcy9iaC1tai1pc3N1ZS5naXRcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0Qml5YWhlcm9lcyBNSk1MIElzc3VlIENvbXBvbmVudC5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiQ29tcG9uZW50XCI6IFwicmVhY3QuQ29tcG9uZW50XCIsXG5cdFx0XHRcIkNvbHVtblwiOiBcIm1qbWwtY29sdW1uXCIsXG5cdFx0XHRcIk1KTUxFbGVtZW50XCI6IFwibWptbC1jb3JlXCIsXG5cdFx0XHRcIm10Y2hcIjogXCJtdGNoXCIsXG5cdFx0XHRcIlJlYWN0XCI6IFwicmVhY3RcIixcblx0XHRcdFwiU2VjdGlvblwiOiBcIm1qbWwtc2VjdGlvblwiLFxuXHRcdFx0XCJzeHR5NFwiOiBcInN4dHk0XCIsXG5cdFx0XHRcIlRleHRcIjogXCJtam1sLXRleHRcIixcblx0XHRcdFwid2ljaGV2clwiOiBcIndpY2hldnJcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IE1KTUxFbGVtZW50IH0gZnJvbSBcIm1qbWwtY29yZVwiO1xuXG5pbXBvcnQgQ29sdW1uIGZyb20gXCJtam1sLWNvbHVtblwiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIm1qbWwtc2VjdGlvblwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIm1qbWwtdGV4dFwiO1xuXG5pbXBvcnQgbXRjaCBmcm9tIFwibXRjaFwiO1xuaW1wb3J0IHN4dHk0IGZyb20gXCJzeHR5NFwiO1xuaW1wb3J0IHdpY2hldnIgZnJvbSBcIndpY2hldnJcIjtcblxuY29uc3QgdGFnTmFtZSA9IFwibWotaXNzdWVcIjtcblxuY29uc3QgcGFyZW50VGFnID0gWyBcIm1qLWNvbnRhaW5lclwiIF07XG5cbmNvbnN0IGVuZGluZ1RhZyA9IGZhbHNlO1xuXG5jb25zdCBkZWZhdWx0TUpNTERlZmluaXRpb24gPSB7XG5cdFwiY29udGVudFwiOiBcIlwiLFxuXHRcImF0dHJpYnV0ZXNcIjoge1xuXHRcdFwiZXJyb3JcIjogXCJcIixcblx0XHRcIm1lc3NhZ2VcIjogXCJTb3JyeSwgdGhlcmUncyBhbiBlcnJvci4gUGxlYXNlIHJlcG9ydCB0aGlzIGltbWVkaWF0ZWx5LlwiXG5cdH1cbn07XG5cbkBNSk1MRWxlbWVudFxuY2xhc3MgSXNzdWUgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoICl7XG5cdFx0Y29uc3QgeyBtakF0dHJpYnV0ZSB9ID0gdGhpcy5wcm9wcztcblxuXHRcdGxldCB7IGVycm9yLCBtZXNzYWdlIH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0ZXJyb3IgPSB3aWNoZXZyKCBlcnJvciwgbWpBdHRyaWJ1dGUoIFwiZXJyb3JcIiApICk7XG5cdFx0bWVzc2FnZSA9IHdpY2hldnIoIG1lc3NhZ2UsIG1qQXR0cmlidXRlKCBcIm1lc3NhZ2VcIiApICk7XG5cblx0XHRpZiggZXJyb3IgaW5zdGFuY2VvZiBFcnJvciApe1xuXHRcdFx0ZXJyb3IgPSBzeHR5NCggZXJyb3Iuc3RhY2sgKS5lbmNvZGUoICk7XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBlcnJvciA9PSBcInN0cmluZ1wiICl7XG5cdFx0XHRsZXQgcGF0dGVybiA9IG5ldyBSZWdFeHAoIGAuezEsJHsgTWF0aC5mbG9vciggTWF0aC5zcXJ0KCBlcnJvci5sZW5ndGggKSApIH19YCwgXCJnXCIgKTtcblx0XHRcdGVycm9yID0gbXRjaCggZXJyb3IsIHBhdHRlcm4gKS5qb2luKCBcIlxcdFwiICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxTZWN0aW9uXG5cdFx0XHRcdHsgLi4udGhpcy5wcm9wcyB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxDb2x1bW4+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHQ8VGV4dFxuXHRcdFx0XHRcdFx0XHRcdGtleT1cInByb21wdFwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7IG1lc3NhZ2UgfVxuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+LFxuXG5cdFx0XHRcdFx0XHRcdDxUZXh0XG5cdFx0XHRcdFx0XHRcdFx0a2V5PVwiZXJyb3JcIlxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZT1cIjExcHhcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0eyBgRXJyb3I6ICR7IGVycm9yIH1gIH1cblx0XHRcdFx0XHRcdFx0PC9UZXh0PixcblxuXHRcdFx0XHRcdFx0XHQ8VGV4dFxuXHRcdFx0XHRcdFx0XHRcdGtleT1cInRpbWVzdGFtcFwiXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplPVwiMTFweFwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7IGBUaW1lc3RhbXA6ICR7IG5ldyBEYXRlKCApIH1gIH1cblx0XHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9Db2x1bW4+XG5cdFx0XHQ8L1NlY3Rpb24+XG5cdFx0KTtcblx0fVxufVxuXG5Jc3N1ZS50YWdOYW1lID0gdGFnTmFtZTtcbklzc3VlLnBhcmVudFRhZyA9IHBhcmVudFRhZztcbklzc3VlLmVuZGluZ1RhZyA9IGVuZGluZ1RhZztcbklzc3VlLmRlZmF1bHRNSk1MRGVmaW5pdGlvbiA9IGRlZmF1bHRNSk1MRGVmaW5pdGlvbjtcblxuZXhwb3J0IGRlZmF1bHQgSXNzdWU7XG4iXX0=

/***/ }),

/***/ 373:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 443:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 504:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 606:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 618:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 628:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[317]);
});
//# sourceMappingURL=issue.support.js.map