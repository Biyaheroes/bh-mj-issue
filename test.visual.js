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

//: @visual:
var fs = require("fs");
var kept = require("kept");
var path = require("path");
var same = require("looks-same");
var scrshot = require("scrshot");
//: @end-visual

//: @visual:
describe("bh-mj-issue", function () {
	var renderBase = path.resolve(__dirname, "render.base.png");
	var renderShot = path.resolve(__dirname, "render.test.png");
	describe("render based comparison", function () {
		it("should be equal", function (done) {
			same(renderBase, renderShot, { "strict": true }, function (error, equal) {
				if (error instanceof Error) {
					done(error);

				} else if (equal) {
					done();

				} else {
					done(new Error("render image test not equal"));
				}
			});
		});
	});

	var componentBase = path.resolve(__dirname, "component.base.png");
	var componentShot = path.resolve(__dirname, "component.test.png");
	describe("component based comparison", function () {
		it("should be equal", function (done) {
			same(componentBase, componentShot, { "strict": true }, function (error, equal) {
				if (error instanceof Error) {
					done(error);

				} else if (equal) {
					done();

				} else {
					done(new Error("component image test not equal"));
				}
			});
		});
	});
});
//: @end-visual
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudmlzdWFsLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJmcyIsImtlcHQiLCJwYXRoIiwic2FtZSIsInNjcnNob3QiLCJkZXNjcmliZSIsInJlbmRlckJhc2UiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwicmVuZGVyU2hvdCIsIml0IiwiZG9uZSIsImVycm9yIiwiZXF1YWwiLCJFcnJvciIsImNvbXBvbmVudEJhc2UiLCJjb21wb25lbnRTaG90Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOztBQUVBO0FBQ0EsSUFBTUMsS0FBS0QsUUFBUyxJQUFULENBQVg7QUFDQSxJQUFNRSxPQUFPRixRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1HLE9BQU9ILFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUksT0FBT0osUUFBUyxZQUFULENBQWI7QUFDQSxJQUFNSyxVQUFVTCxRQUFTLFNBQVQsQ0FBaEI7QUFDQTs7QUFFQTtBQUNBTSxTQUFVLGFBQVYsRUFBeUIsWUFBTztBQUMvQixLQUFJQyxhQUFhSixLQUFLSyxPQUFMLENBQWNDLFNBQWQsRUFBeUIsaUJBQXpCLENBQWpCO0FBQ0EsS0FBSUMsYUFBYVAsS0FBS0ssT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGlCQUF6QixDQUFqQjtBQUNBSCxVQUFVLHlCQUFWLEVBQXFDLFlBQU87QUFDM0NLLEtBQUksaUJBQUosRUFBdUIsVUFBRUMsSUFBRixFQUFZO0FBQ2xDUixRQUFNRyxVQUFOLEVBQWtCRyxVQUFsQixFQUE4QixFQUFFLFVBQVUsSUFBWixFQUE5QixFQUFrRCxVQUFFRyxLQUFGLEVBQVNDLEtBQVQsRUFBb0I7QUFDckUsUUFBSUQsaUJBQWlCRSxLQUFyQixFQUE0QjtBQUMzQkgsVUFBTUMsS0FBTjs7QUFFQSxLQUhELE1BR00sSUFBSUMsS0FBSixFQUFXO0FBQ2hCRjs7QUFFQSxLQUhLLE1BR0Q7QUFDSkEsVUFBTSxJQUFJRyxLQUFKLENBQVcsNkJBQVgsQ0FBTjtBQUNBO0FBQ0QsSUFWRDtBQVdBLEdBWkQ7QUFhQSxFQWREOztBQWdCQSxLQUFJQyxnQkFBZ0JiLEtBQUtLLE9BQUwsQ0FBY0MsU0FBZCxFQUF5QixvQkFBekIsQ0FBcEI7QUFDQSxLQUFJUSxnQkFBZ0JkLEtBQUtLLE9BQUwsQ0FBY0MsU0FBZCxFQUF5QixvQkFBekIsQ0FBcEI7QUFDQUgsVUFBVSw0QkFBVixFQUF3QyxZQUFPO0FBQzlDSyxLQUFJLGlCQUFKLEVBQXVCLFVBQUVDLElBQUYsRUFBWTtBQUNsQ1IsUUFBTVksYUFBTixFQUFxQkMsYUFBckIsRUFBb0MsRUFBRSxVQUFVLElBQVosRUFBcEMsRUFBd0QsVUFBRUosS0FBRixFQUFTQyxLQUFULEVBQW9CO0FBQzNFLFFBQUlELGlCQUFpQkUsS0FBckIsRUFBNEI7QUFDM0JILFVBQU1DLEtBQU47O0FBRUEsS0FIRCxNQUdNLElBQUlDLEtBQUosRUFBVztBQUNoQkY7O0FBRUEsS0FISyxNQUdEO0FBQ0pBLFVBQU0sSUFBSUcsS0FBSixDQUFXLGdDQUFYLENBQU47QUFDQTtBQUNELElBVkQ7QUFXQSxHQVpEO0FBYUEsRUFkRDtBQWVBLENBcENEO0FBcUNBIiwiZmlsZSI6InRlc3QudmlzdWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJiaC1tai1pc3N1ZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiYmgtbWotaXNzdWUvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiQml5YWhlcm9lcyBEZXZlbG9wZXJzXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiUm9ib3QgQml5YWhlcm9lcyA8cm9ib3RAYml5YWhlcm9lcy5jb20+XCIsXG5cdFx0XHRcdFwiUmljaGV2ZSBTLiBCZWJlZG9yIDxyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJlTWFpbFwiOiBcImRldmVsb3BlcnNAYml5YWhlcm9lcy5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9CaXlhaGVyb2VzL2JoLW1qLWlzc3VlLmdpdFwiLFxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwicGF0aFwiOiBcInBhdGhcIixcblx0XHRcdFwic2FtZVwiOiBcImxvb2tzLXNhbWVcIixcblx0XHRcdFwic2Nyc2hvdFwiOiBcInNjcnNob3RcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cbi8vOiBAdmlzdWFsOlxuY29uc3QgZnMgPSByZXF1aXJlKCBcImZzXCIgKTtcbmNvbnN0IGtlcHQgPSByZXF1aXJlKCBcImtlcHRcIiApO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG5jb25zdCBzYW1lID0gcmVxdWlyZSggXCJsb29rcy1zYW1lXCIgKTtcbmNvbnN0IHNjcnNob3QgPSByZXF1aXJlKCBcInNjcnNob3RcIiApO1xuLy86IEBlbmQtdmlzdWFsXG5cbi8vOiBAdmlzdWFsOlxuZGVzY3JpYmUoIFwiYmgtbWotaXNzdWVcIiwgKCApID0+IHtcblx0bGV0IHJlbmRlckJhc2UgPSBwYXRoLnJlc29sdmUoIF9fZGlybmFtZSwgXCJyZW5kZXIuYmFzZS5wbmdcIiApO1xuXHRsZXQgcmVuZGVyU2hvdCA9IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcInJlbmRlci50ZXN0LnBuZ1wiICk7XG5cdGRlc2NyaWJlKCBcInJlbmRlciBiYXNlZCBjb21wYXJpc29uXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsXCIsICggZG9uZSApID0+IHtcblx0XHRcdHNhbWUoIHJlbmRlckJhc2UsIHJlbmRlclNob3QsIHsgXCJzdHJpY3RcIjogdHJ1ZSB9LCAoIGVycm9yLCBlcXVhbCApID0+IHtcblx0XHRcdFx0aWYoIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgKXtcblx0XHRcdFx0XHRkb25lKCBlcnJvciApO1xuXG5cdFx0XHRcdH1lbHNlIGlmKCBlcXVhbCApe1xuXHRcdFx0XHRcdGRvbmUoICk7XG5cblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0ZG9uZSggbmV3IEVycm9yKCBcInJlbmRlciBpbWFnZSB0ZXN0IG5vdCBlcXVhbFwiICkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGxldCBjb21wb25lbnRCYXNlID0gcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiY29tcG9uZW50LmJhc2UucG5nXCIgKTtcblx0bGV0IGNvbXBvbmVudFNob3QgPSBwYXRoLnJlc29sdmUoIF9fZGlybmFtZSwgXCJjb21wb25lbnQudGVzdC5wbmdcIiApO1xuXHRkZXNjcmliZSggXCJjb21wb25lbnQgYmFzZWQgY29tcGFyaXNvblwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbFwiLCAoIGRvbmUgKSA9PiB7XG5cdFx0XHRzYW1lKCBjb21wb25lbnRCYXNlLCBjb21wb25lbnRTaG90LCB7IFwic3RyaWN0XCI6IHRydWUgfSwgKCBlcnJvciwgZXF1YWwgKSA9PiB7XG5cdFx0XHRcdGlmKCBlcnJvciBpbnN0YW5jZW9mIEVycm9yICl7XG5cdFx0XHRcdFx0ZG9uZSggZXJyb3IgKTtcblxuXHRcdFx0XHR9ZWxzZSBpZiggZXF1YWwgKXtcblx0XHRcdFx0XHRkb25lKCApO1xuXG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdGRvbmUoIG5ldyBFcnJvciggXCJjb21wb25lbnQgaW1hZ2UgdGVzdCBub3QgZXF1YWxcIiApICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH0gKTtcbn0gKTtcbi8vOiBAZW5kLXZpc3VhbFxuIl19
//# sourceMappingURL=test.visual.js.map