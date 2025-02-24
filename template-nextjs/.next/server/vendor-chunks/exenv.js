/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/exenv";
exports.ids = ["vendor-chunks/exenv"];
exports.modules = {

/***/ "(ssr)/./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2015 Jed Watson.\n  Based on code that is Copyright 2013-2015, Facebook, Inc.\n  All rights reserved.\n*/ /* global define */ (function() {\n    \"use strict\";\n    var canUseDOM = !!( false && 0);\n    var ExecutionEnvironment = {\n        canUseDOM: canUseDOM,\n        canUseWorkers: typeof Worker !== \"undefined\",\n        canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),\n        canUseViewport: canUseDOM && !!window.screen\n    };\n    if (true) {\n        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {\n            return ExecutionEnvironment;\n        }).call(exports, __webpack_require__, exports, module),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    } else {}\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZXhlbnYvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFJQSxHQUNBLGlCQUFpQixHQUVoQjtJQUNBO0lBRUEsSUFBSUEsWUFBWSxDQUFDLENBQ2hCLE9BQ2UsSUFDZkMsQ0FBNkI7SUFHOUIsSUFBSUcsdUJBQXVCO1FBRTFCSixXQUFXQTtRQUVYSyxlQUFlLE9BQU9DLFdBQVc7UUFFakNDLHNCQUNDUCxhQUFhLENBQUMsQ0FBRUMsQ0FBQUEsT0FBT08sZ0JBQWdCLElBQUlQLE9BQU9RLFdBQVc7UUFFOURDLGdCQUFnQlYsYUFBYSxDQUFDLENBQUNDLE9BQU9VLE1BQU07SUFFN0M7SUFFQSxJQUFJLElBQTRFLEVBQUU7UUFDakZDLG1DQUFPO1lBQ04sT0FBT1I7UUFDUixDQUFDO0FBQUEsa0dBQUM7SUFDSCxPQUFPLEVBSU47QUFFRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Ymljby1ib25pay8uL25vZGVfbW9kdWxlcy9leGVudi9pbmRleC5qcz9jYzE2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTUgSmVkIFdhdHNvbi5cbiAgQmFzZWQgb24gY29kZSB0aGF0IGlzIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGNhblVzZURPTSA9ICEhKFxuXHRcdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG5cdFx0d2luZG93LmRvY3VtZW50ICYmXG5cdFx0d2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnRcblx0KTtcblxuXHR2YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSB7XG5cblx0XHRjYW5Vc2VET006IGNhblVzZURPTSxcblxuXHRcdGNhblVzZVdvcmtlcnM6IHR5cGVvZiBXb3JrZXIgIT09ICd1bmRlZmluZWQnLFxuXG5cdFx0Y2FuVXNlRXZlbnRMaXN0ZW5lcnM6XG5cdFx0XHRjYW5Vc2VET00gJiYgISEod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgfHwgd2luZG93LmF0dGFjaEV2ZW50KSxcblxuXHRcdGNhblVzZVZpZXdwb3J0OiBjYW5Vc2VET00gJiYgISF3aW5kb3cuc2NyZWVuXG5cblx0fTtcblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5FeGVjdXRpb25FbnZpcm9ubWVudCA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9XG5cbn0oKSk7XG4iXSwibmFtZXMiOlsiY2FuVXNlRE9NIiwid2luZG93IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiRXhlY3V0aW9uRW52aXJvbm1lbnQiLCJjYW5Vc2VXb3JrZXJzIiwiV29ya2VyIiwiY2FuVXNlRXZlbnRMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJjYW5Vc2VWaWV3cG9ydCIsInNjcmVlbiIsImRlZmluZSIsImFtZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/exenv/index.js\n");

/***/ })

};
;