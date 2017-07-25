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

var assert = require("should");

//: @bridge:
var fs = require("fs");
var path = require("path");
var same = require("looks-same");
var scrshot = require("scrshot");
//: @end-bridge

//: @bridge:
describe("bh-mj-issue", function () {
	var renderBase = path.resolve(__dirname, "render.base.png");
	var renderShot = path.resolve(__dirname, "render.test.png");
	describe("render based comparison", function () {
		it("should be equal", function (done) {
			same(renderBase, renderShot, { "strict": true }, function (error, equal) {
				if (error instanceof Error) {
					done(error);

				} else {
					assert.equal(equal, true);

					done();
				}
			});
		});

		after(function () {return fs.unlinkSync(renderShot);});
	});

	var componentBase = path.resolve(__dirname, "component.base.png");
	var componentShot = path.resolve(__dirname, "component.test.png");
	describe("component based comparison", function () {
		it("should be equal", function (done) {
			same(componentBase, componentShot, { "strict": true }, function (error, equal) {
				if (error instanceof Error) {
					done(error);

				} else {
					assert.equal(equal, true);

					done();
				}
			});
		});

		after(function () {return fs.unlinkSync(componentShot);});
	});
});
//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJmcyIsInBhdGgiLCJzYW1lIiwic2Nyc2hvdCIsImRlc2NyaWJlIiwicmVuZGVyQmFzZSIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJyZW5kZXJTaG90IiwiaXQiLCJkb25lIiwiZXJyb3IiLCJlcXVhbCIsIkVycm9yIiwiYWZ0ZXIiLCJ1bmxpbmtTeW5jIiwiY29tcG9uZW50QmFzZSIsImNvbXBvbmVudFNob3QiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7O0FBRUE7QUFDQSxJQUFNQyxLQUFLRCxRQUFTLElBQVQsQ0FBWDtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUcsT0FBT0gsUUFBUyxZQUFULENBQWI7QUFDQSxJQUFNSSxVQUFVSixRQUFTLFNBQVQsQ0FBaEI7QUFDQTs7QUFFQTtBQUNBSyxTQUFVLGFBQVYsRUFBeUIsWUFBTztBQUMvQixLQUFJQyxhQUFhSixLQUFLSyxPQUFMLENBQWNDLFNBQWQsRUFBeUIsaUJBQXpCLENBQWpCO0FBQ0EsS0FBSUMsYUFBYVAsS0FBS0ssT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGlCQUF6QixDQUFqQjtBQUNBSCxVQUFVLHlCQUFWLEVBQXFDLFlBQU87QUFDM0NLLEtBQUksaUJBQUosRUFBdUIsVUFBRUMsSUFBRixFQUFZO0FBQ2xDUixRQUFNRyxVQUFOLEVBQWtCRyxVQUFsQixFQUE4QixFQUFFLFVBQVUsSUFBWixFQUE5QixFQUFrRCxVQUFFRyxLQUFGLEVBQVNDLEtBQVQsRUFBb0I7QUFDckUsUUFBSUQsaUJBQWlCRSxLQUFyQixFQUE0QjtBQUMzQkgsVUFBTUMsS0FBTjs7QUFFQSxLQUhELE1BR0s7QUFDSmIsWUFBT2MsS0FBUCxDQUFjQSxLQUFkLEVBQXFCLElBQXJCOztBQUVBRjtBQUNBO0FBQ0QsSUFURDtBQVVBLEdBWEQ7O0FBYUFJLFFBQU8sb0JBQU9kLEdBQUdlLFVBQUgsQ0FBZVAsVUFBZixDQUFQLEVBQVA7QUFDQSxFQWZEOztBQWlCQSxLQUFJUSxnQkFBZ0JmLEtBQUtLLE9BQUwsQ0FBY0MsU0FBZCxFQUF5QixvQkFBekIsQ0FBcEI7QUFDQSxLQUFJVSxnQkFBZ0JoQixLQUFLSyxPQUFMLENBQWNDLFNBQWQsRUFBeUIsb0JBQXpCLENBQXBCO0FBQ0FILFVBQVUsNEJBQVYsRUFBd0MsWUFBTztBQUM5Q0ssS0FBSSxpQkFBSixFQUF1QixVQUFFQyxJQUFGLEVBQVk7QUFDbENSLFFBQU1jLGFBQU4sRUFBcUJDLGFBQXJCLEVBQW9DLEVBQUUsVUFBVSxJQUFaLEVBQXBDLEVBQXdELFVBQUVOLEtBQUYsRUFBU0MsS0FBVCxFQUFvQjtBQUMzRSxRQUFJRCxpQkFBaUJFLEtBQXJCLEVBQTRCO0FBQzNCSCxVQUFNQyxLQUFOOztBQUVBLEtBSEQsTUFHSztBQUNKYixZQUFPYyxLQUFQLENBQWNBLEtBQWQsRUFBcUIsSUFBckI7O0FBRUFGO0FBQ0E7QUFDRCxJQVREO0FBVUEsR0FYRDs7QUFhQUksUUFBTyxvQkFBT2QsR0FBR2UsVUFBSCxDQUFlRSxhQUFmLENBQVAsRUFBUDtBQUNBLEVBZkQ7QUFnQkEsQ0F0Q0Q7QUF1Q0EiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImJoLW1qLWlzc3VlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJiaC1tai1pc3N1ZS90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJCaXlhaGVyb2VzIERldmVsb3BlcnNcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJSb2JvdCBCaXlhaGVyb2VzIDxyb2JvdEBiaXlhaGVyb2VzLmNvbT5cIixcblx0XHRcdFx0XCJSaWNoZXZlIFMuIEJlYmVkb3IgPHJpY2hldmUuYmViZWRvckBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwiZGV2ZWxvcGVyc0BiaXlhaGVyb2VzLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0JpeWFoZXJvZXMvYmgtbWotaXNzdWUuZ2l0XCIsXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwicGF0aFwiLFxuXHRcdFx0XCJzYW1lXCI6IFwibG9va3Mtc2FtZVwiLFxuXHRcdFx0XCJzY3JzaG90XCI6IFwic2Nyc2hvdFwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuLy86IEBicmlkZ2U6XG5jb25zdCBmcyA9IHJlcXVpcmUoIFwiZnNcIiApO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG5jb25zdCBzYW1lID0gcmVxdWlyZSggXCJsb29rcy1zYW1lXCIgKTtcbmNvbnN0IHNjcnNob3QgPSByZXF1aXJlKCBcInNjcnNob3RcIiApO1xuLy86IEBlbmQtYnJpZGdlXG5cbi8vOiBAYnJpZGdlOlxuZGVzY3JpYmUoIFwiYmgtbWotaXNzdWVcIiwgKCApID0+IHtcblx0bGV0IHJlbmRlckJhc2UgPSBwYXRoLnJlc29sdmUoIF9fZGlybmFtZSwgXCJyZW5kZXIuYmFzZS5wbmdcIiApO1xuXHRsZXQgcmVuZGVyU2hvdCA9IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcInJlbmRlci50ZXN0LnBuZ1wiICk7XG5cdGRlc2NyaWJlKCBcInJlbmRlciBiYXNlZCBjb21wYXJpc29uXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsXCIsICggZG9uZSApID0+IHtcblx0XHRcdHNhbWUoIHJlbmRlckJhc2UsIHJlbmRlclNob3QsIHsgXCJzdHJpY3RcIjogdHJ1ZSB9LCAoIGVycm9yLCBlcXVhbCApID0+IHtcblx0XHRcdFx0aWYoIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgKXtcblx0XHRcdFx0XHRkb25lKCBlcnJvciApO1xuXG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdGFzc2VydC5lcXVhbCggZXF1YWwsIHRydWUgKTtcblxuXHRcdFx0XHRcdGRvbmUoICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cblx0XHRhZnRlciggKCApID0+IGZzLnVubGlua1N5bmMoIHJlbmRlclNob3QgKSApO1xuXHR9ICk7XG5cblx0bGV0IGNvbXBvbmVudEJhc2UgPSBwYXRoLnJlc29sdmUoIF9fZGlybmFtZSwgXCJjb21wb25lbnQuYmFzZS5wbmdcIiApO1xuXHRsZXQgY29tcG9uZW50U2hvdCA9IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcImNvbXBvbmVudC50ZXN0LnBuZ1wiICk7XG5cdGRlc2NyaWJlKCBcImNvbXBvbmVudCBiYXNlZCBjb21wYXJpc29uXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsXCIsICggZG9uZSApID0+IHtcblx0XHRcdHNhbWUoIGNvbXBvbmVudEJhc2UsIGNvbXBvbmVudFNob3QsIHsgXCJzdHJpY3RcIjogdHJ1ZSB9LCAoIGVycm9yLCBlcXVhbCApID0+IHtcblx0XHRcdFx0aWYoIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgKXtcblx0XHRcdFx0XHRkb25lKCBlcnJvciApO1xuXG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdGFzc2VydC5lcXVhbCggZXF1YWwsIHRydWUgKTtcblxuXHRcdFx0XHRcdGRvbmUoICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cblx0XHRhZnRlciggKCApID0+IGZzLnVubGlua1N5bmMoIGNvbXBvbmVudFNob3QgKSApO1xuXHR9ICk7XG59ICk7XG4vLzogQGVuZC1icmlkZ2VcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
