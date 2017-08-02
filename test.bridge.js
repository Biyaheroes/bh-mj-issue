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
			same(renderBase, renderShot, { "tolerance": 1 }, function (error, equal) {
				if (error instanceof Error) {
					done(error);

				} else if (equal) {
					done();

				} else {
					done(new Error("render image test not equal"));
				}
			});
		});

		after(function () {return fs.unlinkSync(renderShot);});
	});

	var componentBase = path.resolve(__dirname, "component.base.png");
	var componentShot = path.resolve(__dirname, "component.test.png");
	describe("component based comparison", function () {
		it("should be equal", function (done) {
			same(componentBase, componentShot, { "tolerance": 1 }, function (error, equal) {
				if (error instanceof Error) {
					done(error);

				} else if (equal) {
					done();

				} else {
					done(new Error("component image test not equal"));
				}
			});
		});

		after(function () {return fs.unlinkSync(componentShot);});
	});
});
//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJmcyIsInBhdGgiLCJzYW1lIiwic2Nyc2hvdCIsImRlc2NyaWJlIiwicmVuZGVyQmFzZSIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJyZW5kZXJTaG90IiwiaXQiLCJkb25lIiwiZXJyb3IiLCJlcXVhbCIsIkVycm9yIiwiYWZ0ZXIiLCJ1bmxpbmtTeW5jIiwiY29tcG9uZW50QmFzZSIsImNvbXBvbmVudFNob3QiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7O0FBRUE7QUFDQSxJQUFNQyxLQUFLRCxRQUFTLElBQVQsQ0FBWDtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUcsT0FBT0gsUUFBUyxZQUFULENBQWI7QUFDQSxJQUFNSSxVQUFVSixRQUFTLFNBQVQsQ0FBaEI7QUFDQTs7QUFFQTtBQUNBSyxTQUFVLGFBQVYsRUFBeUIsWUFBTztBQUMvQixLQUFJQyxhQUFhSixLQUFLSyxPQUFMLENBQWNDLFNBQWQsRUFBeUIsaUJBQXpCLENBQWpCO0FBQ0EsS0FBSUMsYUFBYVAsS0FBS0ssT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGlCQUF6QixDQUFqQjtBQUNBSCxVQUFVLHlCQUFWLEVBQXFDLFlBQU87QUFDM0NLLEtBQUksaUJBQUosRUFBdUIsVUFBRUMsSUFBRixFQUFZO0FBQ2xDUixRQUFNRyxVQUFOLEVBQWtCRyxVQUFsQixFQUE4QixFQUFFLGFBQWEsQ0FBZixFQUE5QixFQUFrRCxVQUFFRyxLQUFGLEVBQVNDLEtBQVQsRUFBb0I7QUFDckUsUUFBSUQsaUJBQWlCRSxLQUFyQixFQUE0QjtBQUMzQkgsVUFBTUMsS0FBTjs7QUFFQSxLQUhELE1BR00sSUFBSUMsS0FBSixFQUFXO0FBQ2hCRjs7QUFFQSxLQUhLLE1BR0Q7QUFDSkEsVUFBTSxJQUFJRyxLQUFKLENBQVcsNkJBQVgsQ0FBTjtBQUNBO0FBQ0QsSUFWRDtBQVdBLEdBWkQ7O0FBY0FDLFFBQU8sb0JBQU9kLEdBQUdlLFVBQUgsQ0FBZVAsVUFBZixDQUFQLEVBQVA7QUFDQSxFQWhCRDs7QUFrQkEsS0FBSVEsZ0JBQWdCZixLQUFLSyxPQUFMLENBQWNDLFNBQWQsRUFBeUIsb0JBQXpCLENBQXBCO0FBQ0EsS0FBSVUsZ0JBQWdCaEIsS0FBS0ssT0FBTCxDQUFjQyxTQUFkLEVBQXlCLG9CQUF6QixDQUFwQjtBQUNBSCxVQUFVLDRCQUFWLEVBQXdDLFlBQU87QUFDOUNLLEtBQUksaUJBQUosRUFBdUIsVUFBRUMsSUFBRixFQUFZO0FBQ2xDUixRQUFNYyxhQUFOLEVBQXFCQyxhQUFyQixFQUFvQyxFQUFFLGFBQWEsQ0FBZixFQUFwQyxFQUF3RCxVQUFFTixLQUFGLEVBQVNDLEtBQVQsRUFBb0I7QUFDM0UsUUFBSUQsaUJBQWlCRSxLQUFyQixFQUE0QjtBQUMzQkgsVUFBTUMsS0FBTjs7QUFFQSxLQUhELE1BR00sSUFBSUMsS0FBSixFQUFXO0FBQ2hCRjs7QUFFQSxLQUhLLE1BR0Q7QUFDSkEsVUFBTSxJQUFJRyxLQUFKLENBQVcsZ0NBQVgsQ0FBTjtBQUNBO0FBQ0QsSUFWRDtBQVdBLEdBWkQ7O0FBY0FDLFFBQU8sb0JBQU9kLEdBQUdlLFVBQUgsQ0FBZUUsYUFBZixDQUFQLEVBQVA7QUFDQSxFQWhCRDtBQWlCQSxDQXhDRDtBQXlDQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiYmgtbWotaXNzdWVcIixcblx0XHRcdFwicGF0aFwiOiBcImJoLW1qLWlzc3VlL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIkJpeWFoZXJvZXMgRGV2ZWxvcGVyc1wiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIlJvYm90IEJpeWFoZXJvZXMgPHJvYm90QGJpeWFoZXJvZXMuY29tPlwiLFxuXHRcdFx0XHRcIlJpY2hldmUgUy4gQmViZWRvciA8cmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwiZU1haWxcIjogXCJkZXZlbG9wZXJzQGJpeWFoZXJvZXMuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vQml5YWhlcm9lcy9iaC1tai1pc3N1ZS5naXRcIixcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcInBhdGhcIjogXCJwYXRoXCIsXG5cdFx0XHRcInNhbWVcIjogXCJsb29rcy1zYW1lXCIsXG5cdFx0XHRcInNjcnNob3RcIjogXCJzY3JzaG90XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG4vLzogQGJyaWRnZTpcbmNvbnN0IGZzID0gcmVxdWlyZSggXCJmc1wiICk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSggXCJwYXRoXCIgKTtcbmNvbnN0IHNhbWUgPSByZXF1aXJlKCBcImxvb2tzLXNhbWVcIiApO1xuY29uc3Qgc2Nyc2hvdCA9IHJlcXVpcmUoIFwic2Nyc2hvdFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuLy86IEBicmlkZ2U6XG5kZXNjcmliZSggXCJiaC1tai1pc3N1ZVwiLCAoICkgPT4ge1xuXHRsZXQgcmVuZGVyQmFzZSA9IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcInJlbmRlci5iYXNlLnBuZ1wiICk7XG5cdGxldCByZW5kZXJTaG90ID0gcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwicmVuZGVyLnRlc3QucG5nXCIgKTtcblx0ZGVzY3JpYmUoIFwicmVuZGVyIGJhc2VkIGNvbXBhcmlzb25cIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWxcIiwgKCBkb25lICkgPT4ge1xuXHRcdFx0c2FtZSggcmVuZGVyQmFzZSwgcmVuZGVyU2hvdCwgeyBcInRvbGVyYW5jZVwiOiAxIH0sICggZXJyb3IsIGVxdWFsICkgPT4ge1xuXHRcdFx0XHRpZiggZXJyb3IgaW5zdGFuY2VvZiBFcnJvciApe1xuXHRcdFx0XHRcdGRvbmUoIGVycm9yICk7XG5cblx0XHRcdFx0fWVsc2UgaWYoIGVxdWFsICl7XG5cdFx0XHRcdFx0ZG9uZSggKTtcblxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRkb25lKCBuZXcgRXJyb3IoIFwicmVuZGVyIGltYWdlIHRlc3Qgbm90IGVxdWFsXCIgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXG5cdFx0YWZ0ZXIoICggKSA9PiBmcy51bmxpbmtTeW5jKCByZW5kZXJTaG90ICkgKTtcblx0fSApO1xuXG5cdGxldCBjb21wb25lbnRCYXNlID0gcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiY29tcG9uZW50LmJhc2UucG5nXCIgKTtcblx0bGV0IGNvbXBvbmVudFNob3QgPSBwYXRoLnJlc29sdmUoIF9fZGlybmFtZSwgXCJjb21wb25lbnQudGVzdC5wbmdcIiApO1xuXHRkZXNjcmliZSggXCJjb21wb25lbnQgYmFzZWQgY29tcGFyaXNvblwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbFwiLCAoIGRvbmUgKSA9PiB7XG5cdFx0XHRzYW1lKCBjb21wb25lbnRCYXNlLCBjb21wb25lbnRTaG90LCB7IFwidG9sZXJhbmNlXCI6IDEgfSwgKCBlcnJvciwgZXF1YWwgKSA9PiB7XG5cdFx0XHRcdGlmKCBlcnJvciBpbnN0YW5jZW9mIEVycm9yICl7XG5cdFx0XHRcdFx0ZG9uZSggZXJyb3IgKTtcblxuXHRcdFx0XHR9ZWxzZSBpZiggZXF1YWwgKXtcblx0XHRcdFx0XHRkb25lKCApO1xuXG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdGRvbmUoIG5ldyBFcnJvciggXCJjb21wb25lbnQgaW1hZ2UgdGVzdCBub3QgZXF1YWxcIiApICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cblx0XHRhZnRlciggKCApID0+IGZzLnVubGlua1N5bmMoIGNvbXBvbmVudFNob3QgKSApO1xuXHR9ICk7XG59ICk7XG4vLzogQGVuZC1icmlkZ2VcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
