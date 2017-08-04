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

/***/ 326:
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
              */

//: @ignore:
Object.defineProperty(exports, "__esModule", { value: true });var _jsx2 = __webpack_require__(327);var _jsx3 = _interopRequireDefault(_jsx2);var _getPrototypeOf = __webpack_require__(195);var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = __webpack_require__(125);var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = __webpack_require__(126);var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = __webpack_require__(199);var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = __webpack_require__(202);var _inherits3 = _interopRequireDefault(_inherits2);var _class;
//: @end-ignore
__webpack_require__(363);
var _jquery = __webpack_require__(203);var _jquery2 = _interopRequireDefault(_jquery);
var _react = __webpack_require__(32);var _react2 = _interopRequireDefault(_react);
var _reactDom = __webpack_require__(383);var _reactDom2 = _interopRequireDefault(_reactDom);

var _mjmlCore = __webpack_require__(26);

var _mjmlColumn = __webpack_require__(689);var _mjmlColumn2 = _interopRequireDefault(_mjmlColumn);
var _mjmlRaw = __webpack_require__(694);var _mjmlRaw2 = _interopRequireDefault(_mjmlRaw);
var _mjmlSection = __webpack_require__(695);var _mjmlSection2 = _interopRequireDefault(_mjmlSection);
var _mjmlText = __webpack_require__(696);var _mjmlText2 = _interopRequireDefault(_mjmlText);

var _booleanize = __webpack_require__(697);var _booleanize2 = _interopRequireDefault(_booleanize);
var _mtch = __webpack_require__(699);var _mtch2 = _interopRequireDefault(_mtch);
var _sxty = __webpack_require__(716);var _sxty2 = _interopRequireDefault(_sxty);
var _wichevr = __webpack_require__(722);var _wichevr2 = _interopRequireDefault(_wichevr);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var tagName = "mj-issue";

var parentTag = ["mj-container"];

var endingTag = false;

var defaultMJMLDefinition = {
	"content": "",
	"attributes": {
		"name": "",
		"error": "",
		"message": "Sorry, there's an error. Please report this immediately.",
		"tracked": true } };var




Issue = (0, _mjmlCore.MJMLElement)(_class = function (_PureComponent) {(0, _inherits3.default)(Issue, _PureComponent);function Issue() {(0, _classCallCheck3.default)(this, Issue);return (0, _possibleConstructorReturn3.default)(this, (Issue.__proto__ || (0, _getPrototypeOf2.default)(Issue)).apply(this, arguments));}(0, _createClass3.default)(Issue, [{ key: "resolve", value: function resolve(
		property) {var
			mjAttribute = property.mjAttribute;var

			name = property.name,error = property.error,message = property.message,tracked = property.tracked;

			name = (0, _wichevr2.default)(name, mjAttribute("name"));
			error = (0, _wichevr2.default)(error, mjAttribute("error"));
			message = (0, _wichevr2.default)(message, mjAttribute("message"));
			tracked = (0, _booleanize2.default)((0, _wichevr2.default)(tracked, mjAttribute("tracked")));

			if (error instanceof Error) {
				error = (0, _sxty2.default)(error.stack).encode();
			}

			if (typeof error == "string") {
				var pattern = new RegExp(".{1," + Math.floor(Math.sqrt(error.length)) + "}", "g");
				error = (0, _mtch2.default)(error, pattern).join("\t");
			}

			return {
				"name": name,
				"error": error,
				"message": message,
				"tracked": tracked };

		} }, { key: "componentWillMount", value: function componentWillMount()

		{
			this.setState({ "data": this.resolve(this.props) });
		} }, { key: "componentWillReceiveProps", value: function componentWillReceiveProps(

		property) {
			this.setState({ "data": this.resolve(property) });
		} }, { key: "render", value: function render()

		{var _state$data =
			this.state.data,error = _state$data.error,message = _state$data.message,tracked = _state$data.tracked;

			return (
				_react2.default.createElement(_mjmlSection2.default,
					this.props, (0, _jsx3.default)(_mjmlColumn2.default, {}, void 0,



					[(0, _jsx3.default)(_mjmlText2.default, {},

					"prompt",

					message), (0, _jsx3.default)(_mjmlText2.default, { "font-size":




						"11px" }, "error", "Error: " +

					error),


					tracked ? (0, _jsx3.default)(_mjmlText2.default, { "font-size":


						"11px" }, "timestamp", "Timestamp: " +

					new Date()) :

					null])));





		} }, { key: "componentDidMount", value: function componentDidMount()

		{
			(0, _jquery2.default)(_reactDom2.default.findDOMNode(this)).
			addClass("bh-mj-issue").
			addClass(this.state.data.name).
			append("\n\t\t\t\t<link\n\t\t\t\t\tclass=\"bh-mj-issue style\"\n\t\t\t\t\trel=\"stylesheet\"\n\t\t\t\t\ttype=\"text/css\"\n\t\t\t\t\thref=\"https://unpkg.com/bh-mj-issue/issue.css\"\n\t\t\t\t/>\n\t\t\t");







		} }, { key: "componentWillUnmount", value: function componentWillUnmount()

		{
			(0, _jquery2.default)(".bh-mj-issue.style").remove();
		} }]);return Issue;}(_react.PureComponent)) || _class;


Issue.tagName = tagName;
Issue.parentTag = parentTag;
Issue.endingTag = endingTag;
Issue.defaultMJMLDefinition = defaultMJMLDefinition;exports.default =

Issue;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlzc3VlLm1vZHVsZS5qc3giXSwibmFtZXMiOlsidGFnTmFtZSIsInBhcmVudFRhZyIsImVuZGluZ1RhZyIsImRlZmF1bHRNSk1MRGVmaW5pdGlvbiIsIklzc3VlIiwicHJvcGVydHkiLCJtakF0dHJpYnV0ZSIsIm5hbWUiLCJlcnJvciIsIm1lc3NhZ2UiLCJ0cmFja2VkIiwiRXJyb3IiLCJzdGFjayIsImVuY29kZSIsInBhdHRlcm4iLCJSZWdFeHAiLCJNYXRoIiwiZmxvb3IiLCJzcXJ0IiwibGVuZ3RoIiwiam9pbiIsInNldFN0YXRlIiwicmVzb2x2ZSIsInByb3BzIiwic3RhdGUiLCJkYXRhIiwiRGF0ZSIsImZpbmRET01Ob2RlIiwiYWRkQ2xhc3MiLCJhcHBlbmQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErREE7O0FBRUE7QUFEQTtBQUdBLGdDO0FBQ0EsOEI7QUFDQSxxQzs7QUFFQTs7QUFFQSx5QztBQUNBLG1DO0FBQ0EsMkM7QUFDQSxxQzs7QUFFQSx3QztBQUNBLDRCO0FBQ0EsNkI7QUFDQSxrQzs7QUFFQSxJQUFNQSxVQUFVLFVBQWhCOztBQUVBLElBQU1DLFlBQVksQ0FBRSxjQUFGLENBQWxCOztBQUVBLElBQU1DLFlBQVksS0FBbEI7O0FBRUEsSUFBTUMsd0JBQXdCO0FBQzdCLFlBQVcsRUFEa0I7QUFFN0IsZUFBYztBQUNiLFVBQVEsRUFESztBQUViLFdBQVMsRUFGSTtBQUdiLGFBQVcsMERBSEU7QUFJYixhQUFXLElBSkUsRUFGZSxFQUE5QixDOzs7OztBQVdNQyxLO0FBQ0lDLFUsRUFBVTtBQUNWQyxjQURVLEdBQ01ELFFBRE4sQ0FDVkMsV0FEVTs7QUFHWkMsT0FIWSxHQUdzQkYsUUFIdEIsQ0FHWkUsSUFIWSxDQUdOQyxLQUhNLEdBR3NCSCxRQUh0QixDQUdORyxLQUhNLENBR0NDLE9BSEQsR0FHc0JKLFFBSHRCLENBR0NJLE9BSEQsQ0FHVUMsT0FIVixHQUdzQkwsUUFIdEIsQ0FHVUssT0FIVjs7QUFLbEJILFVBQU8sdUJBQVNBLElBQVQsRUFBZUQsWUFBYSxNQUFiLENBQWYsQ0FBUDtBQUNBRSxXQUFRLHVCQUFTQSxLQUFULEVBQWdCRixZQUFhLE9BQWIsQ0FBaEIsQ0FBUjtBQUNBRyxhQUFVLHVCQUFTQSxPQUFULEVBQWtCSCxZQUFhLFNBQWIsQ0FBbEIsQ0FBVjtBQUNBSSxhQUFVLDBCQUFZLHVCQUFTQSxPQUFULEVBQWtCSixZQUFhLFNBQWIsQ0FBbEIsQ0FBWixDQUFWOztBQUVBLE9BQUlFLGlCQUFpQkcsS0FBckIsRUFBNEI7QUFDM0JILFlBQVEsb0JBQU9BLE1BQU1JLEtBQWIsRUFBcUJDLE1BQXJCLEVBQVI7QUFDQTs7QUFFRCxPQUFJLE9BQU9MLEtBQVAsSUFBZ0IsUUFBcEIsRUFBOEI7QUFDN0IsUUFBSU0sVUFBVSxJQUFJQyxNQUFKLFVBQW9CQyxLQUFLQyxLQUFMLENBQVlELEtBQUtFLElBQUwsQ0FBV1YsTUFBTVcsTUFBakIsQ0FBWixDQUFwQixRQUFpRSxHQUFqRSxDQUFkO0FBQ0FYLFlBQVEsb0JBQU1BLEtBQU4sRUFBYU0sT0FBYixFQUF1Qk0sSUFBdkIsQ0FBNkIsSUFBN0IsQ0FBUjtBQUNBOztBQUVELFVBQU87QUFDTixZQUFRYixJQURGO0FBRU4sYUFBU0MsS0FGSDtBQUdOLGVBQVdDLE9BSEw7QUFJTixlQUFXQyxPQUpMLEVBQVA7O0FBTUEsRzs7QUFFb0I7QUFDcEIsUUFBS1csUUFBTCxDQUFlLEVBQUUsUUFBUSxLQUFLQyxPQUFMLENBQWMsS0FBS0MsS0FBbkIsQ0FBVixFQUFmO0FBQ0EsRzs7QUFFMEJsQixVLEVBQVU7QUFDcEMsUUFBS2dCLFFBQUwsQ0FBZSxFQUFFLFFBQVEsS0FBS0MsT0FBTCxDQUFjakIsUUFBZCxDQUFWLEVBQWY7QUFDQSxHOztBQUVRO0FBQzBCLFFBQUttQixLQUFMLENBQVdDLElBRHJDLENBQ0ZqQixLQURFLGVBQ0ZBLEtBREUsQ0FDS0MsT0FETCxlQUNLQSxPQURMLENBQ2NDLE9BRGQsZUFDY0EsT0FEZDs7QUFHUjtBQUNDO0FBQ00sVUFBS2EsS0FEWDs7OztBQUtHOztBQUVNLGFBRk47O0FBSUlkLFlBSko7Ozs7O0FBU1ksWUFUWixJQVFNLE9BUk47O0FBV2VELFVBWGY7OztBQWNDRTs7O0FBR1ksWUFIWixJQUVNLFdBRk47O0FBS21CLFNBQUlnQixJQUFKLEVBTG5COztBQU9HLFNBckJKLENBTEgsRUFERDs7Ozs7O0FBaUNBLEc7O0FBRW1CO0FBQ25CLHlCQUFHLG1CQUFTQyxXQUFULENBQXNCLElBQXRCLENBQUg7QUFDRUMsV0FERixDQUNZLGFBRFo7QUFFRUEsV0FGRixDQUVZLEtBQUtKLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQmxCLElBRjVCO0FBR0VzQixTQUhGOzs7Ozs7OztBQVdBLEc7O0FBRXNCO0FBQ3RCLHlCQUFHLG9CQUFILEVBQTBCQyxNQUExQjtBQUNBLEc7OztBQUdGMUIsTUFBTUosT0FBTixHQUFnQkEsT0FBaEI7QUFDQUksTUFBTUgsU0FBTixHQUFrQkEsU0FBbEI7QUFDQUcsTUFBTUYsU0FBTixHQUFrQkEsU0FBbEI7QUFDQUUsTUFBTUQscUJBQU4sR0FBOEJBLHFCQUE5QixDOztBQUVlQyxLIiwiZmlsZSI6Imlzc3VlLm1vZHVsZS5qc3giLCJzb3VyY2VSb290IjoiL2hvbWUvcmljaGV2ZS9iaC9iaC1tai1pc3N1ZSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBCaXlhaGVyb2VzIERldmVsb3BlcnNcblx0XHRAZW1haWw6IGRldmVsb3BlcnNAYml5YWhlcm9lcy5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImlzc3VlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJpc3N1ZS9pc3N1ZS5qc3hcIixcblx0XHRcdFwiZmlsZVwiOiBcImlzc3VlLmpzeFwiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJpc3N1ZVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJCaXlhaGVyb2VzIERldmVsb3BlcnNcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJSb2JvdCBCaXlhaGVyb2VzIDxyb2JvdEBiaXlhaGVyb2VzLmNvbT5cIixcblx0XHRcdFx0XCJSaWNoZXZlIFMuIEJlYmVkb3IgPHJpY2hldmUuYmViZWRvckBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwiZGV2ZWxvcGVyc0BiaXlhaGVyb2VzLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0JpeWFoZXJvZXMvYmgtbWotaXNzdWUuZ2l0XCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEJpeWFoZXJvZXMgTUpNTCBJc3N1ZSBDb21wb25lbnQuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcIkNvbXBvbmVudFwiOiBcInJlYWN0LkNvbXBvbmVudFwiLFxuXHRcdFx0XCJDb2x1bW5cIjogXCJtam1sLWNvbHVtblwiLFxuXHRcdFx0XCJNSk1MRWxlbWVudFwiOiBcIm1qbWwtY29yZVwiLFxuXHRcdFx0XCJtdGNoXCI6IFwibXRjaFwiLFxuXHRcdFx0XCJSZWFjdFwiOiBcInJlYWN0XCIsXG5cdFx0XHRcIlNlY3Rpb25cIjogXCJtam1sLXNlY3Rpb25cIixcblx0XHRcdFwic3h0eTRcIjogXCJzeHR5NFwiLFxuXHRcdFx0XCJUZXh0XCI6IFwibWptbC10ZXh0XCIsXG5cdFx0XHRcIndpY2hldnJcIjogXCJ3aWNoZXZyXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuLy86IEBpZ25vcmU6XG5pbXBvcnQgXCIuL2lzc3VlLnNjc3NcIjtcbi8vOiBAZW5kLWlnbm9yZVxuXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIlxuXG5pbXBvcnQgeyBNSk1MRWxlbWVudCB9IGZyb20gXCJtam1sLWNvcmVcIjtcblxuaW1wb3J0IENvbHVtbiBmcm9tIFwibWptbC1jb2x1bW5cIjtcbmltcG9ydCBSYXcgZnJvbSBcIm1qbWwtcmF3XCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwibWptbC1zZWN0aW9uXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwibWptbC10ZXh0XCI7XG5cbmltcG9ydCBib29sZWFuaXplIGZyb20gXCJib29sZWFuaXplXCI7XG5pbXBvcnQgbXRjaCBmcm9tIFwibXRjaFwiO1xuaW1wb3J0IHN4dHk0IGZyb20gXCJzeHR5NFwiO1xuaW1wb3J0IHdpY2hldnIgZnJvbSBcIndpY2hldnJcIjtcblxuY29uc3QgdGFnTmFtZSA9IFwibWotaXNzdWVcIjtcblxuY29uc3QgcGFyZW50VGFnID0gWyBcIm1qLWNvbnRhaW5lclwiIF07XG5cbmNvbnN0IGVuZGluZ1RhZyA9IGZhbHNlO1xuXG5jb25zdCBkZWZhdWx0TUpNTERlZmluaXRpb24gPSB7XG5cdFwiY29udGVudFwiOiBcIlwiLFxuXHRcImF0dHJpYnV0ZXNcIjoge1xuXHRcdFwibmFtZVwiOiBcIlwiLFxuXHRcdFwiZXJyb3JcIjogXCJcIixcblx0XHRcIm1lc3NhZ2VcIjogXCJTb3JyeSwgdGhlcmUncyBhbiBlcnJvci4gUGxlYXNlIHJlcG9ydCB0aGlzIGltbWVkaWF0ZWx5LlwiLFxuXHRcdFwidHJhY2tlZFwiOiB0cnVlXG5cdH1cbn07XG5cbkBNSk1MRWxlbWVudFxuY2xhc3MgSXNzdWUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblx0cmVzb2x2ZSggcHJvcGVydHkgKXtcblx0XHRjb25zdCB7IG1qQXR0cmlidXRlIH0gPSBwcm9wZXJ0eTtcblxuXHRcdGxldCB7IG5hbWUsIGVycm9yLCBtZXNzYWdlLCB0cmFja2VkIH0gPSBwcm9wZXJ0eTtcblxuXHRcdG5hbWUgPSB3aWNoZXZyKCBuYW1lLCBtakF0dHJpYnV0ZSggXCJuYW1lXCIgKSApO1xuXHRcdGVycm9yID0gd2ljaGV2ciggZXJyb3IsIG1qQXR0cmlidXRlKCBcImVycm9yXCIgKSApO1xuXHRcdG1lc3NhZ2UgPSB3aWNoZXZyKCBtZXNzYWdlLCBtakF0dHJpYnV0ZSggXCJtZXNzYWdlXCIgKSApO1xuXHRcdHRyYWNrZWQgPSBib29sZWFuaXplKCB3aWNoZXZyKCB0cmFja2VkLCBtakF0dHJpYnV0ZSggXCJ0cmFja2VkXCIgKSApICk7XG5cblx0XHRpZiggZXJyb3IgaW5zdGFuY2VvZiBFcnJvciApe1xuXHRcdFx0ZXJyb3IgPSBzeHR5NCggZXJyb3Iuc3RhY2sgKS5lbmNvZGUoICk7XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBlcnJvciA9PSBcInN0cmluZ1wiICl7XG5cdFx0XHRsZXQgcGF0dGVybiA9IG5ldyBSZWdFeHAoIGAuezEsJHsgTWF0aC5mbG9vciggTWF0aC5zcXJ0KCBlcnJvci5sZW5ndGggKSApIH19YCwgXCJnXCIgKTtcblx0XHRcdGVycm9yID0gbXRjaCggZXJyb3IsIHBhdHRlcm4gKS5qb2luKCBcIlxcdFwiICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdFwibmFtZVwiOiBuYW1lLFxuXHRcdFx0XCJlcnJvclwiOiBlcnJvcixcblx0XHRcdFwibWVzc2FnZVwiOiBtZXNzYWdlLFxuXHRcdFx0XCJ0cmFja2VkXCI6IHRyYWNrZWRcblx0XHR9O1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCApe1xuXHRcdHRoaXMuc2V0U3RhdGUoIHsgXCJkYXRhXCI6IHRoaXMucmVzb2x2ZSggdGhpcy5wcm9wcyApIH0gKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoIHByb3BlcnR5ICl7XG5cdFx0dGhpcy5zZXRTdGF0ZSggeyBcImRhdGFcIjogdGhpcy5yZXNvbHZlKCBwcm9wZXJ0eSApIH0gKTtcblx0fVxuXG5cdHJlbmRlciggKXtcblx0XHRsZXQgeyBlcnJvciwgbWVzc2FnZSwgdHJhY2tlZCB9ID0gdGhpcy5zdGF0ZS5kYXRhO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxTZWN0aW9uXG5cdFx0XHRcdHsgLi4udGhpcy5wcm9wcyB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxDb2x1bW4+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHQ8VGV4dFxuXHRcdFx0XHRcdFx0XHRcdGtleT1cInByb21wdFwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7IG1lc3NhZ2UgfVxuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+LFxuXG5cdFx0XHRcdFx0XHRcdDxUZXh0XG5cdFx0XHRcdFx0XHRcdFx0a2V5PVwiZXJyb3JcIlxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZT1cIjExcHhcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0eyBgRXJyb3I6ICR7IGVycm9yIH1gIH1cblx0XHRcdFx0XHRcdFx0PC9UZXh0PixcblxuXHRcdFx0XHRcdFx0XHR0cmFja2VkP1xuXHRcdFx0XHRcdFx0XHRcdDxUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9XCJ0aW1lc3RhbXBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplPVwiMTFweFwiXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBgVGltZXN0YW1wOiAkeyBuZXcgRGF0ZSggKSB9YCB9XG5cdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdFx0XHRcdDogbnVsbFxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9Db2x1bW4+XG5cdFx0XHQ8L1NlY3Rpb24+XG5cdFx0KTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCApe1xuXHRcdCQoIFJlYWN0RE9NLmZpbmRET01Ob2RlKCB0aGlzICkgKVxuXHRcdFx0LmFkZENsYXNzKCBcImJoLW1qLWlzc3VlXCIgKVxuXHRcdFx0LmFkZENsYXNzKCB0aGlzLnN0YXRlLmRhdGEubmFtZSApXG5cdFx0XHQuYXBwZW5kKCBgXG5cdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0Y2xhc3M9XCJiaC1tai1pc3N1ZSBzdHlsZVwiXG5cdFx0XHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXG5cdFx0XHRcdFx0dHlwZT1cInRleHQvY3NzXCJcblx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vYmgtbWotaXNzdWUvaXNzdWUuY3NzXCJcblx0XHRcdFx0Lz5cblx0XHRcdGAgKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCApe1xuXHRcdCQoIFwiLmJoLW1qLWlzc3VlLnN0eWxlXCIgKS5yZW1vdmUoICk7XG5cdH1cbn1cblxuSXNzdWUudGFnTmFtZSA9IHRhZ05hbWU7XG5Jc3N1ZS5wYXJlbnRUYWcgPSBwYXJlbnRUYWc7XG5Jc3N1ZS5lbmRpbmdUYWcgPSBlbmRpbmdUYWc7XG5Jc3N1ZS5kZWZhdWx0TUpNTERlZmluaXRpb24gPSBkZWZhdWx0TUpNTERlZmluaXRpb247XG5cbmV4cG9ydCBkZWZhdWx0IElzc3VlO1xuIl19

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(364);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"singleton":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(366)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./node_modules/css-loader/index.js??ref--1-1!./node_modules/resolve-url-loader/index.js??ref--1-2!./node_modules/sass-loader/lib/loader.js??ref--1-3!./issue.scss", function() {
			var newContent = require("!!./node_modules/css-loader/index.js??ref--1-1!./node_modules/resolve-url-loader/index.js??ref--1-2!./node_modules/sass-loader/lib/loader.js??ref--1-3!./issue.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(365)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"issue.scss","sourceRoot":""}]);

// exports


/***/ }),

/***/ 463:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 533:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 593:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 617:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 629:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 640:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[326]);
});
//# sourceMappingURL=issue.support.js.map