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
              */Object.defineProperty(exports, "__esModule", { value: true });var _jsx2 = __webpack_require__(318);var _jsx3 = _interopRequireDefault(_jsx2);var _getPrototypeOf = __webpack_require__(192);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(121);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(122);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(196);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(199);var _inherits3 = _interopRequireDefault(_inherits2);var _class;

var _react = __webpack_require__(39);var _react2 = _interopRequireDefault(_react);

var _mjmlCore = __webpack_require__(31);

var _mjmlColumn = __webpack_require__(674);var _mjmlColumn2 = _interopRequireDefault(_mjmlColumn);
var _mjmlSection = __webpack_require__(679);var _mjmlSection2 = _interopRequireDefault(_mjmlSection);
var _mjmlText = __webpack_require__(680);var _mjmlText2 = _interopRequireDefault(_mjmlText);

var _mtch = __webpack_require__(681);var _mtch2 = _interopRequireDefault(_mtch);
var _sxty = __webpack_require__(698);var _sxty2 = _interopRequireDefault(_sxty);
var _wichevr = __webpack_require__(704);var _wichevr2 = _interopRequireDefault(_wichevr);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlzc3VlLmpzeCJdLCJuYW1lcyI6WyJ0YWdOYW1lIiwicGFyZW50VGFnIiwiZW5kaW5nVGFnIiwiZGVmYXVsdE1KTUxEZWZpbml0aW9uIiwiSXNzdWUiLCJwcm9wZXJ0eSIsIm1qQXR0cmlidXRlIiwiZXJyb3IiLCJtZXNzYWdlIiwiRXJyb3IiLCJzdGFjayIsImVuY29kZSIsInBhdHRlcm4iLCJSZWdFeHAiLCJNYXRoIiwiZmxvb3IiLCJzcXJ0IiwibGVuZ3RoIiwiam9pbiIsInNldFN0YXRlIiwicmVzb2x2ZSIsInByb3BzIiwic3RhdGUiLCJkYXRhIiwiRGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStEQSw4Qjs7QUFFQTs7QUFFQSx5QztBQUNBLDJDO0FBQ0EscUM7O0FBRUEsNEI7QUFDQSw2QjtBQUNBLGtDOztBQUVBLElBQU1BLFVBQVUsVUFBaEI7O0FBRUEsSUFBTUMsWUFBWSxDQUFFLGNBQUYsQ0FBbEI7O0FBRUEsSUFBTUMsWUFBWSxLQUFsQjs7QUFFQSxJQUFNQyx3QkFBd0I7QUFDN0IsWUFBVyxFQURrQjtBQUU3QixlQUFjO0FBQ2IsV0FBUyxFQURJO0FBRWIsYUFBVywwREFGRSxFQUZlLEVBQTlCLEM7Ozs7O0FBU01DLEs7QUFDSUMsVSxFQUFVO0FBQ1ZDLGNBRFUsR0FDTUQsUUFETixDQUNWQyxXQURVOztBQUdaQyxRQUhZLEdBR09GLFFBSFAsQ0FHWkUsS0FIWSxDQUdMQyxPQUhLLEdBR09ILFFBSFAsQ0FHTEcsT0FISzs7QUFLbEJELFdBQVEsdUJBQVNBLEtBQVQsRUFBZ0JELFlBQWEsT0FBYixDQUFoQixDQUFSO0FBQ0FFLGFBQVUsdUJBQVNBLE9BQVQsRUFBa0JGLFlBQWEsU0FBYixDQUFsQixDQUFWOztBQUVBLE9BQUlDLGlCQUFpQkUsS0FBckIsRUFBNEI7QUFDM0JGLFlBQVEsb0JBQU9BLE1BQU1HLEtBQWIsRUFBcUJDLE1BQXJCLEVBQVI7QUFDQTs7QUFFRCxPQUFJLE9BQU9KLEtBQVAsSUFBZ0IsUUFBcEIsRUFBOEI7QUFDN0IsUUFBSUssVUFBVSxJQUFJQyxNQUFKLFVBQW9CQyxLQUFLQyxLQUFMLENBQVlELEtBQUtFLElBQUwsQ0FBV1QsTUFBTVUsTUFBakIsQ0FBWixDQUFwQixRQUFpRSxHQUFqRSxDQUFkO0FBQ0FWLFlBQVEsb0JBQU1BLEtBQU4sRUFBYUssT0FBYixFQUF1Qk0sSUFBdkIsQ0FBNkIsSUFBN0IsQ0FBUjtBQUNBOztBQUVELFVBQU87QUFDTixhQUFTWCxLQURIO0FBRU4sZUFBV0MsT0FGTCxFQUFQOztBQUlBLEc7O0FBRW9CO0FBQ3BCLFFBQUtXLFFBQUwsQ0FBZSxFQUFFLFFBQVEsS0FBS0MsT0FBTCxDQUFjLEtBQUtDLEtBQW5CLENBQVYsRUFBZjtBQUNBLEc7O0FBRTBCaEIsVSxFQUFVO0FBQ3BDLFFBQUtjLFFBQUwsQ0FBZSxFQUFFLFFBQVEsS0FBS0MsT0FBTCxDQUFjZixRQUFkLENBQVYsRUFBZjtBQUNBLEc7O0FBRVE7QUFDaUIsUUFBS2lCLEtBQUwsQ0FBV0MsSUFENUIsQ0FDRmhCLEtBREUsZUFDRkEsS0FERSxDQUNLQyxPQURMLGVBQ0tBLE9BREw7O0FBR1I7QUFDQztBQUNNLFVBQUthLEtBRFg7Ozs7QUFLRzs7QUFFTSxhQUZOOztBQUlJYixZQUpKOzs7OztBQVNZLFlBVFosSUFRTSxPQVJOOztBQVdlRCxVQVhmOzs7OztBQWdCWSxZQWhCWixJQWVNLFdBZk47O0FBa0JtQixTQUFJaUIsSUFBSixFQWxCbkIsRUFMSCxFQUREOzs7Ozs7O0FBK0JBLEc7OztBQUdGcEIsTUFBTUosT0FBTixHQUFnQkEsT0FBaEI7QUFDQUksTUFBTUgsU0FBTixHQUFrQkEsU0FBbEI7QUFDQUcsTUFBTUYsU0FBTixHQUFrQkEsU0FBbEI7QUFDQUUsTUFBTUQscUJBQU4sR0FBOEJBLHFCQUE5QixDOztBQUVlQyxLIiwiZmlsZSI6Imlzc3VlLmpzeCIsInNvdXJjZVJvb3QiOiIvaG9tZS9yaWNoZXZlL2JoL2JoLW1qLWlzc3VlIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IEJpeWFoZXJvZXMgRGV2ZWxvcGVyc1xuXHRcdEBlbWFpbDogZGV2ZWxvcGVyc0BiaXlhaGVyb2VzLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiaXNzdWVcIixcblx0XHRcdFwicGF0aFwiOiBcImlzc3VlL2lzc3VlLmpzeFwiLFxuXHRcdFx0XCJmaWxlXCI6IFwiaXNzdWUuanN4XCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImlzc3VlXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIkJpeWFoZXJvZXMgRGV2ZWxvcGVyc1wiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIlJvYm90IEJpeWFoZXJvZXMgPHJvYm90QGJpeWFoZXJvZXMuY29tPlwiLFxuXHRcdFx0XHRcIlJpY2hldmUgUy4gQmViZWRvciA8cmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwiZU1haWxcIjogXCJkZXZlbG9wZXJzQGJpeWFoZXJvZXMuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vQml5YWhlcm9lcy9iaC1tai1pc3N1ZS5naXRcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0Qml5YWhlcm9lcyBNSk1MIElzc3VlIENvbXBvbmVudC5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiQ29tcG9uZW50XCI6IFwicmVhY3QuQ29tcG9uZW50XCIsXG5cdFx0XHRcIkNvbHVtblwiOiBcIm1qbWwtY29sdW1uXCIsXG5cdFx0XHRcIk1KTUxFbGVtZW50XCI6IFwibWptbC1jb3JlXCIsXG5cdFx0XHRcIm10Y2hcIjogXCJtdGNoXCIsXG5cdFx0XHRcIlJlYWN0XCI6IFwicmVhY3RcIixcblx0XHRcdFwiU2VjdGlvblwiOiBcIm1qbWwtc2VjdGlvblwiLFxuXHRcdFx0XCJzeHR5NFwiOiBcInN4dHk0XCIsXG5cdFx0XHRcIlRleHRcIjogXCJtam1sLXRleHRcIixcblx0XHRcdFwid2ljaGV2clwiOiBcIndpY2hldnJcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBNSk1MRWxlbWVudCB9IGZyb20gXCJtam1sLWNvcmVcIjtcblxuaW1wb3J0IENvbHVtbiBmcm9tIFwibWptbC1jb2x1bW5cIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCJtam1sLXNlY3Rpb25cIjtcbmltcG9ydCBUZXh0IGZyb20gXCJtam1sLXRleHRcIjtcblxuaW1wb3J0IG10Y2ggZnJvbSBcIm10Y2hcIjtcbmltcG9ydCBzeHR5NCBmcm9tIFwic3h0eTRcIjtcbmltcG9ydCB3aWNoZXZyIGZyb20gXCJ3aWNoZXZyXCI7XG5cbmNvbnN0IHRhZ05hbWUgPSBcIm1qLWlzc3VlXCI7XG5cbmNvbnN0IHBhcmVudFRhZyA9IFsgXCJtai1jb250YWluZXJcIiBdO1xuXG5jb25zdCBlbmRpbmdUYWcgPSBmYWxzZTtcblxuY29uc3QgZGVmYXVsdE1KTUxEZWZpbml0aW9uID0ge1xuXHRcImNvbnRlbnRcIjogXCJcIixcblx0XCJhdHRyaWJ1dGVzXCI6IHtcblx0XHRcImVycm9yXCI6IFwiXCIsXG5cdFx0XCJtZXNzYWdlXCI6IFwiU29ycnksIHRoZXJlJ3MgYW4gZXJyb3IuIFBsZWFzZSByZXBvcnQgdGhpcyBpbW1lZGlhdGVseS5cIlxuXHR9XG59O1xuXG5ATUpNTEVsZW1lbnRcbmNsYXNzIElzc3VlIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cdHJlc29sdmUoIHByb3BlcnR5ICl7XG5cdFx0Y29uc3QgeyBtakF0dHJpYnV0ZSB9ID0gcHJvcGVydHk7XG5cblx0XHRsZXQgeyBlcnJvciwgbWVzc2FnZSB9ID0gcHJvcGVydHk7XG5cblx0XHRlcnJvciA9IHdpY2hldnIoIGVycm9yLCBtakF0dHJpYnV0ZSggXCJlcnJvclwiICkgKTtcblx0XHRtZXNzYWdlID0gd2ljaGV2ciggbWVzc2FnZSwgbWpBdHRyaWJ1dGUoIFwibWVzc2FnZVwiICkgKTtcblxuXHRcdGlmKCBlcnJvciBpbnN0YW5jZW9mIEVycm9yICl7XG5cdFx0XHRlcnJvciA9IHN4dHk0KCBlcnJvci5zdGFjayApLmVuY29kZSggKTtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIGVycm9yID09IFwic3RyaW5nXCIgKXtcblx0XHRcdGxldCBwYXR0ZXJuID0gbmV3IFJlZ0V4cCggYC57MSwkeyBNYXRoLmZsb29yKCBNYXRoLnNxcnQoIGVycm9yLmxlbmd0aCApICkgfX1gLCBcImdcIiApO1xuXHRcdFx0ZXJyb3IgPSBtdGNoKCBlcnJvciwgcGF0dGVybiApLmpvaW4oIFwiXFx0XCIgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0XCJlcnJvclwiOiBlcnJvcixcblx0XHRcdFwibWVzc2FnZVwiOiBtZXNzYWdlXG5cdFx0fTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCggKXtcblx0XHR0aGlzLnNldFN0YXRlKCB7IFwiZGF0YVwiOiB0aGlzLnJlc29sdmUoIHRoaXMucHJvcHMgKSB9ICk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCBwcm9wZXJ0eSApe1xuXHRcdHRoaXMuc2V0U3RhdGUoIHsgXCJkYXRhXCI6IHRoaXMucmVzb2x2ZSggcHJvcGVydHkgKSB9ICk7XG5cdH1cblxuXHRyZW5kZXIoICl7XG5cdFx0bGV0IHsgZXJyb3IsIG1lc3NhZ2UgfSA9IHRoaXMuc3RhdGUuZGF0YTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8U2VjdGlvblxuXHRcdFx0XHR7IC4uLnRoaXMucHJvcHMgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8Q29sdW1uPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0PFRleHRcblx0XHRcdFx0XHRcdFx0XHRrZXk9XCJwcm9tcHRcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0eyBtZXNzYWdlIH1cblx0XHRcdFx0XHRcdFx0PC9UZXh0PixcblxuXHRcdFx0XHRcdFx0XHQ8VGV4dFxuXHRcdFx0XHRcdFx0XHRcdGtleT1cImVycm9yXCJcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU9XCIxMXB4XCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHsgYEVycm9yOiAkeyBlcnJvciB9YCB9XG5cdFx0XHRcdFx0XHRcdDwvVGV4dD4sXG5cblx0XHRcdFx0XHRcdFx0PFRleHRcblx0XHRcdFx0XHRcdFx0XHRrZXk9XCJ0aW1lc3RhbXBcIlxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZT1cIjExcHhcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0eyBgVGltZXN0YW1wOiAkeyBuZXcgRGF0ZSggKSB9YCB9XG5cdFx0XHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvQ29sdW1uPlxuXHRcdFx0PC9TZWN0aW9uPlxuXHRcdCk7XG5cdH1cbn1cblxuSXNzdWUudGFnTmFtZSA9IHRhZ05hbWU7XG5Jc3N1ZS5wYXJlbnRUYWcgPSBwYXJlbnRUYWc7XG5Jc3N1ZS5lbmRpbmdUYWcgPSBlbmRpbmdUYWc7XG5Jc3N1ZS5kZWZhdWx0TUpNTERlZmluaXRpb24gPSBkZWZhdWx0TUpNTERlZmluaXRpb247XG5cbmV4cG9ydCBkZWZhdWx0IElzc3VlO1xuIl19

/***/ }),

/***/ 369:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 500:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 602:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 614:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[317]);
});
//# sourceMappingURL=issue.support.js.map