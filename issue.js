"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _jsx2=require("babel-runtime/helpers/jsx"),_jsx3=_interopRequireDefault(_jsx2),_getPrototypeOf=require("babel-runtime/core-js/object/get-prototype-of"),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=require("babel-runtime/helpers/classCallCheck"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=require("babel-runtime/helpers/createClass"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=require("babel-runtime/helpers/possibleConstructorReturn"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=require("babel-runtime/helpers/inherits"),_inherits3=_interopRequireDefault(_inherits2),_class,_react=require("react"),_react2=_interopRequireDefault(_react),_mjmlCore=require("mjml-core"),_mjmlColumn=require("mjml-column"),_mjmlColumn2=_interopRequireDefault(_mjmlColumn),_mjmlSection=require("mjml-section"),_mjmlSection2=_interopRequireDefault(_mjmlSection),_mjmlText=require("mjml-text"),_mjmlText2=_interopRequireDefault(_mjmlText),_mtch=require("mtch"),_mtch2=_interopRequireDefault(_mtch),_sxty=require("sxty4"),_sxty2=_interopRequireDefault(_sxty),_wichevr=require("wichevr"),_wichevr2=_interopRequireDefault(_wichevr),tagName="mj-issue",parentTag=["mj-container"],endingTag=!1,defaultMJMLDefinition={content:"",attributes:{error:"",message:"Sorry, there's an error. Please report this immediately."}},Issue=(0,_mjmlCore.MJMLElement)(_class=function(_Component){function Issue(){return(0,_classCallCheck3.default)(this,Issue),(0,_possibleConstructorReturn3.default)(this,(Issue.__proto__||(0,_getPrototypeOf2.default)(Issue)).apply(this,arguments))}return(0,_inherits3.default)(Issue,_Component),(0,_createClass3.default)(Issue,[{key:"render",value:function render(){var mjAttribute=this.props.mjAttribute,_props=this.props,error=_props.error,message=_props.message;if(error=(0,_wichevr2.default)(error,mjAttribute("error")),message=(0,_wichevr2.default)(message,mjAttribute("message")),error instanceof Error&&(error=(0,_sxty2.default)(error.stack).encode()),"string"==typeof error){var pattern=new RegExp(".{1,"+Math.floor(Math.sqrt(error.length))+"}","g");error=(0,_mtch2.default)(error,pattern).join("\t")}return _react2.default.createElement(_mjmlSection2.default,this.props,(0,_jsx3.default)(_mjmlColumn2.default,{},void 0,[(0,_jsx3.default)(_mjmlText2.default,{},"prompt",message),(0,_jsx3.default)(_mjmlText2.default,{"font-size":"11px"},"error","Error: "+error),(0,_jsx3.default)(_mjmlText2.default,{"font-size":"11px"},"timestamp","Timestamp: "+new Date)]))}}]),Issue}(_react.Component))||_class;Issue.tagName=tagName,Issue.parentTag=parentTag,Issue.endingTag=endingTag,Issue.defaultMJMLDefinition=defaultMJMLDefinition,exports.default=Issue;
//# sourceMappingURL=issue.js.map
