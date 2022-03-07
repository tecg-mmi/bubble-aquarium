/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Models/Bubble.ts":
/*!*********************************!*\
  !*** ./src/js/Models/Bubble.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nexports.__esModule = true;\nexports.Bubble = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../Settings/settings */ \"./src/js/Settings/settings.ts\");\n\nvar Circle_1 = __webpack_require__(/*! ./Circle */ \"./src/js/Models/Circle.ts\");\n\nvar Bubble = function (_super) {\n  __extends(Bubble, _super);\n\n  function Bubble(canvas, ctx, mousePosition) {\n    var _this = _super.call(this, canvas, ctx, mousePosition) || this;\n\n    _this.generate();\n\n    return _this;\n  }\n\n  Bubble.prototype.generate = function () {\n    this.radius = Math.floor(settings_1.settings.circleRadius.min + Math.random() * (settings_1.settings.circleRadius.max - settings_1.settings.circleRadius.min));\n    this.color = settings_1.settings.colors[Math.floor(Math.random() * settings_1.settings.colors.length)].toString();\n    this.alpha = this.radius / settings_1.settings.circleRadius.max;\n    this.angle = Math.PI / 2;\n    this.speed = {\n      y: this.radius / settings_1.settings.circleRadius.max * settings_1.settings.circleRadius.min,\n      x: Math.random() - 0.5\n    };\n    this.origin = {\n      x: Math.floor(this.radius + Math.random() * (this.canvas.width - this.radius * 4)),\n      y: this.canvas.height + this.radius * 2 + Math.random() * (this.canvas.height * 1.5 - this.canvas.height - this.radius * 2)\n    };\n  };\n\n  Bubble.prototype.draw = function () {\n    _super.prototype.draw.call(this);\n\n    return this;\n  };\n\n  Bubble.prototype.update = function () {\n    if (this.origin.y <= -this.radius) {\n      this.generate();\n    }\n\n    var hypotenuse;\n    hypotenuse = Math.sqrt(Math.pow(this.origin.x - this.mousePosition.x, 2) + Math.pow(this.origin.y - this.mousePosition.y, 2));\n\n    if (hypotenuse <= this.radius + settings_1.settings.pointer.radius) {\n      this.alpha = 0;\n    }\n\n    this.origin.y -= this.speed.y;\n    this.origin.x -= this.speed.x;\n    return this.draw();\n  };\n\n  return Bubble;\n}(Circle_1.Circle);\n\nexports.Bubble = Bubble;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvTW9kZWxzL0J1YmJsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTtBQUE0QkE7O0FBSXhCLGtCQUFZQyxNQUFaLEVBQXVDQyxHQUF2QyxFQUFzRUMsYUFBdEUsRUFBNkc7QUFBN0csZ0JBQ0lDLGtCQUFNSCxNQUFOLEVBQWNDLEdBQWQsRUFBbUJDLGFBQW5CLEtBQWlDLElBRHJDOztBQUVJRSxTQUFJLENBQUNDLFFBQUw7OztBQUNIOztBQUVTQyw4QkFBVjtBQUNJLFNBQUtDLE1BQUwsR0FBY0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLG9CQUFTQyxZQUFULENBQXNCQyxHQUF0QixHQUE0QkosSUFBSSxDQUFDSyxNQUFMLE1BQWlCSCxvQkFBU0MsWUFBVCxDQUFzQkcsR0FBdEIsR0FBNEJKLG9CQUFTQyxZQUFULENBQXNCQyxHQUFuRSxDQUF2QyxDQUFkO0FBQ0EsU0FBS0csS0FBTCxHQUFhTCxvQkFBU00sTUFBVCxDQUFnQlIsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0ssTUFBTCxLQUFnQkgsb0JBQVNNLE1BQVQsQ0FBZ0JDLE1BQTNDLENBQWhCLEVBQW9FQyxRQUFwRSxFQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFjLEtBQUtaLE1BQUwsR0FBY0csb0JBQVNDLFlBQVQsQ0FBc0JHLEdBQWxEO0FBQ0EsU0FBS00sS0FBTCxHQUFhWixJQUFJLENBQUNhLEVBQUwsR0FBVSxDQUF2QjtBQUVBLFNBQUtDLEtBQUwsR0FBYTtBQUFDQyxPQUFDLEVBQUcsS0FBS2hCLE1BQUwsR0FBY0csb0JBQVNDLFlBQVQsQ0FBc0JHLEdBQXJDLEdBQTRDSixvQkFBU0MsWUFBVCxDQUFzQkMsR0FBdEU7QUFBMkVZLE9BQUMsRUFBRWhCLElBQUksQ0FBQ0ssTUFBTCxLQUFnQjtBQUE5RixLQUFiO0FBQ0EsU0FBS1ksTUFBTCxHQUFjO0FBQ1ZELE9BQUMsRUFBRWhCLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtGLE1BQUwsR0FBY0MsSUFBSSxDQUFDSyxNQUFMLE1BQWlCLEtBQUtiLE1BQUwsQ0FBWTBCLEtBQVosR0FBb0IsS0FBS25CLE1BQUwsR0FBYyxDQUFuRCxDQUF6QixDQURPO0FBRVZnQixPQUFDLEVBQUUsS0FBS3ZCLE1BQUwsQ0FBWTJCLE1BQVosR0FBcUIsS0FBS3BCLE1BQUwsR0FBYyxDQUFuQyxHQUF1Q0MsSUFBSSxDQUFDSyxNQUFMLE1BQWlCLEtBQUtiLE1BQUwsQ0FBWTJCLE1BQVosR0FBcUIsR0FBckIsR0FBMkIsS0FBSzNCLE1BQUwsQ0FBWTJCLE1BQXZDLEdBQWdELEtBQUtwQixNQUFMLEdBQWMsQ0FBL0U7QUFGaEMsS0FBZDtBQUlILEdBWFM7O0FBYVZEO0FBQ0lILHFCQUFNeUIsSUFBTixDQUFVQyxJQUFWLENBQVUsSUFBVjs7QUFDQSxXQUFPLElBQVA7QUFDSCxHQUhEOztBQUtBdkI7QUFDSSxRQUFJLEtBQUttQixNQUFMLENBQVlGLENBQVosSUFBaUIsQ0FBQyxLQUFLaEIsTUFBM0IsRUFBbUM7QUFDL0IsV0FBS0YsUUFBTDtBQUNIOztBQUNELFFBQUl5QixVQUFKO0FBQ0FBLGNBQVUsR0FBR3RCLElBQUksQ0FBQ3VCLElBQUwsQ0FBVXZCLElBQUksQ0FBQ3dCLEdBQUwsQ0FBVSxLQUFLUCxNQUFMLENBQVlELENBQVosR0FBZ0IsS0FBS3RCLGFBQUwsQ0FBbUJzQixDQUE3QyxFQUFpRCxDQUFqRCxJQUFzRGhCLElBQUksQ0FBQ3dCLEdBQUwsQ0FBVSxLQUFLUCxNQUFMLENBQVlGLENBQVosR0FBZ0IsS0FBS3JCLGFBQUwsQ0FBbUJxQixDQUE3QyxFQUFpRCxDQUFqRCxDQUFoRSxDQUFiOztBQUVBLFFBQUlPLFVBQVUsSUFBSSxLQUFLdkIsTUFBTCxHQUFjRyxvQkFBU3VCLE9BQVQsQ0FBaUIxQixNQUFqRCxFQUF5RDtBQUNyRCxXQUFLWSxLQUFMLEdBQWEsQ0FBYjtBQUNIOztBQUNELFNBQUtNLE1BQUwsQ0FBWUYsQ0FBWixJQUFpQixLQUFLRCxLQUFMLENBQVdDLENBQTVCO0FBQ0EsU0FBS0UsTUFBTCxDQUFZRCxDQUFaLElBQWlCLEtBQUtGLEtBQUwsQ0FBV0UsQ0FBNUI7QUFFQSxXQUFPLEtBQUtJLElBQUwsRUFBUDtBQUNILEdBZEQ7O0FBZUo7QUExQ0EsRUFBNEJNLGVBQTVCOztBQUFhQyxjQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2J1YmJsZS1hcXVhcml1bS8uL3NyYy9qcy9Nb2RlbHMvQnViYmxlLnRzPzg4MWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4uL1NldHRpbmdzL3NldHRpbmdzXCI7XG5pbXBvcnQge0NpcmNsZX0gZnJvbSBcIi4vQ2lyY2xlXCI7XG5cbmV4cG9ydCBjbGFzcyBCdWJibGUgZXh0ZW5kcyBDaXJjbGUge1xuICAgIHByaXZhdGUgYW5nbGU6IG51bWJlcjtcbiAgICBwcml2YXRlIHNwZWVkOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH07XG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgbW91c2VQb3NpdGlvbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KSB7XG4gICAgICAgIHN1cGVyKGNhbnZhcywgY3R4LCBtb3VzZVBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZW5lcmF0ZSgpIHtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBNYXRoLmZsb29yKHNldHRpbmdzLmNpcmNsZVJhZGl1cy5taW4gKyBNYXRoLnJhbmRvbSgpICogKHNldHRpbmdzLmNpcmNsZVJhZGl1cy5tYXggLSBzZXR0aW5ncy5jaXJjbGVSYWRpdXMubWluKSk7XG4gICAgICAgIHRoaXMuY29sb3IgPSBzZXR0aW5ncy5jb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2V0dGluZ3MuY29sb3JzLmxlbmd0aCldLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuYWxwaGEgPSAodGhpcy5yYWRpdXMgLyBzZXR0aW5ncy5jaXJjbGVSYWRpdXMubWF4KTtcbiAgICAgICAgdGhpcy5hbmdsZSA9IE1hdGguUEkgLyAyO1xuICAgICAgICAvLyBUaGUgc3BlZWQgaXMgY2FsY3VsYXRlZCBmcm9tIHRoZSByYWRpdXMuIExhcmdlIGJ1YmJsZXMgcmlzZSBmYXN0ZXIgdGhhbiBzbWFsbCBvbmVzLlxuICAgICAgICB0aGlzLnNwZWVkID0ge3k6ICh0aGlzLnJhZGl1cyAvIHNldHRpbmdzLmNpcmNsZVJhZGl1cy5tYXgpICogc2V0dGluZ3MuY2lyY2xlUmFkaXVzLm1pbiwgeDogTWF0aC5yYW5kb20oKSAtIDAuNX07XG4gICAgICAgIHRoaXMub3JpZ2luID0ge1xuICAgICAgICAgICAgeDogTWF0aC5mbG9vcih0aGlzLnJhZGl1cyArIE1hdGgucmFuZG9tKCkgKiAodGhpcy5jYW52YXMud2lkdGggLSB0aGlzLnJhZGl1cyAqIDQpKSxcbiAgICAgICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCArIHRoaXMucmFkaXVzICogMiArIE1hdGgucmFuZG9tKCkgKiAodGhpcy5jYW52YXMuaGVpZ2h0ICogMS41IC0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5yYWRpdXMgKiAyKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhdygpOiBCdWJibGUge1xuICAgICAgICBzdXBlci5kcmF3KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpOiBCdWJibGUge1xuICAgICAgICBpZiAodGhpcy5vcmlnaW4ueSA8PSAtdGhpcy5yYWRpdXMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaHlwb3RlbnVzZTogbnVtYmVyO1xuICAgICAgICBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KE1hdGgucG93KCh0aGlzLm9yaWdpbi54IC0gdGhpcy5tb3VzZVBvc2l0aW9uLngpLCAyKSArIE1hdGgucG93KCh0aGlzLm9yaWdpbi55IC0gdGhpcy5tb3VzZVBvc2l0aW9uLnkpLCAyKSk7XG5cbiAgICAgICAgaWYgKGh5cG90ZW51c2UgPD0gdGhpcy5yYWRpdXMgKyBzZXR0aW5ncy5wb2ludGVyLnJhZGl1cykge1xuICAgICAgICAgICAgdGhpcy5hbHBoYSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcmlnaW4ueSAtPSB0aGlzLnNwZWVkLnk7XG4gICAgICAgIHRoaXMub3JpZ2luLnggLT0gdGhpcy5zcGVlZC54O1xuXG4gICAgICAgIHJldHVybiB0aGlzLmRyYXcoKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIl9fZXh0ZW5kcyIsImNhbnZhcyIsImN0eCIsIm1vdXNlUG9zaXRpb24iLCJfc3VwZXIiLCJfdGhpcyIsImdlbmVyYXRlIiwiQnViYmxlIiwicmFkaXVzIiwiTWF0aCIsImZsb29yIiwic2V0dGluZ3NfMSIsImNpcmNsZVJhZGl1cyIsIm1pbiIsInJhbmRvbSIsIm1heCIsImNvbG9yIiwiY29sb3JzIiwibGVuZ3RoIiwidG9TdHJpbmciLCJhbHBoYSIsImFuZ2xlIiwiUEkiLCJzcGVlZCIsInkiLCJ4Iiwib3JpZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3IiwiY2FsbCIsImh5cG90ZW51c2UiLCJzcXJ0IiwicG93IiwicG9pbnRlciIsIkNpcmNsZV8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/Models/Bubble.ts\n");

/***/ }),

/***/ "./src/js/Models/Circle.ts":
/*!*********************************!*\
  !*** ./src/js/Models/Circle.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Circle = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../Settings/settings */ \"./src/js/Settings/settings.ts\");\n\nvar Circle = function () {\n  function Circle(canvas, ctx, mousePosition, radius, color, alpha) {\n    if (radius === void 0) {\n      radius = settings_1.settings.circleRadius[\"default\"];\n    }\n\n    if (color === void 0) {\n      color = settings_1.settings.defaultColor;\n    }\n\n    if (alpha === void 0) {\n      alpha = 0;\n    }\n\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.alpha = alpha;\n    this.mousePosition = mousePosition;\n    this.radius = radius;\n    this.color = color;\n    this.origin = {\n      x: this.mousePosition.x,\n      y: this.mousePosition.y\n    };\n  }\n\n  Circle.prototype.draw = function () {\n    this.ctx.globalAlpha = this.alpha;\n    this.ctx.fillStyle = this.color;\n    this.ctx.beginPath();\n    this.ctx.arc(this.origin.x, this.origin.y, this.radius, 0, 2 * Math.PI);\n    this.ctx.fill();\n    this.ctx.closePath();\n    this.ctx.globalAlpha = 1;\n  };\n\n  Circle.prototype.update = function () {\n    this.origin.x = this.mousePosition.x;\n    this.origin.y = this.mousePosition.y;\n    this.draw();\n  };\n\n  return Circle;\n}();\n\nexports.Circle = Circle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvTW9kZWxzL0NpcmNsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBVUksa0JBQVlBLE1BQVosRUFBdUNDLEdBQXZDLEVBQXNFQyxhQUF0RSxFQUErR0MsTUFBL0csRUFBK0pDLEtBQS9KLEVBQXNNQyxLQUF0TSxFQUF1TjtBQUF4RztBQUFBRixlQUFpQkcsb0JBQVNDLFlBQVQsQ0FBc0IsU0FBdEIsQ0FBakI7QUFBOEM7O0FBQUU7QUFBQUgsY0FBZ0JFLG9CQUFTRSxZQUF6QjtBQUFxQzs7QUFBRTtBQUFBSDtBQUFpQjs7QUFDbk4sU0FBS0wsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0ksS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0gsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLSyxNQUFMLEdBQWM7QUFDVkMsT0FBQyxFQUFFLEtBQUtSLGFBQUwsQ0FBbUJRLENBRFo7QUFFVkMsT0FBQyxFQUFFLEtBQUtULGFBQUwsQ0FBbUJTO0FBRlosS0FBZDtBQUlIOztBQUVTQywwQkFBVjtBQUNJLFNBQUtYLEdBQUwsQ0FBU1ksV0FBVCxHQUF1QixLQUFLUixLQUE1QjtBQUNBLFNBQUtKLEdBQUwsQ0FBU2EsU0FBVCxHQUFxQixLQUFLVixLQUExQjtBQUNBLFNBQUtILEdBQUwsQ0FBU2MsU0FBVDtBQUNBLFNBQUtkLEdBQUwsQ0FBU2UsR0FBVCxDQUFhLEtBQUtQLE1BQUwsQ0FBWUMsQ0FBekIsRUFBNEIsS0FBS0QsTUFBTCxDQUFZRSxDQUF4QyxFQUEyQyxLQUFLUixNQUFoRCxFQUF3RCxDQUF4RCxFQUEyRCxJQUFJYyxJQUFJLENBQUNDLEVBQXBFO0FBQ0EsU0FBS2pCLEdBQUwsQ0FBU2tCLElBQVQ7QUFDQSxTQUFLbEIsR0FBTCxDQUFTbUIsU0FBVDtBQUNBLFNBQUtuQixHQUFMLENBQVNZLFdBQVQsR0FBdUIsQ0FBdkI7QUFDSCxHQVJTOztBQVVBRCw0QkFBVjtBQUNJLFNBQUtILE1BQUwsQ0FBWUMsQ0FBWixHQUFnQixLQUFLUixhQUFMLENBQW1CUSxDQUFuQztBQUNBLFNBQUtELE1BQUwsQ0FBWUUsQ0FBWixHQUFnQixLQUFLVCxhQUFMLENBQW1CUyxDQUFuQztBQUNBLFNBQUtVLElBQUw7QUFDSCxHQUpTOztBQUtkO0FBQUMsQ0F0Q0Q7O0FBQWFDLGNBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnViYmxlLWFxdWFyaXVtLy4vc3JjL2pzL01vZGVscy9DaXJjbGUudHM/ZmVjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi4vU2V0dGluZ3Mvc2V0dGluZ3NcIjtcblxuZXhwb3J0IGNsYXNzIENpcmNsZSB7XG4gICAgcHJvdGVjdGVkIHJhZGl1czogbnVtYmVyO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByb3RlY3RlZCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcm90ZWN0ZWQgY29sb3I6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgbW91c2VQb3NpdGlvbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xuICAgIHByb3RlY3RlZCBvcmlnaW46IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfTtcbiAgICBwcm90ZWN0ZWQgYWxwaGE6IG51bWJlcjtcblxuXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIG1vdXNlUG9zaXRpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgcmFkaXVzOiBudW1iZXIgPSBzZXR0aW5ncy5jaXJjbGVSYWRpdXMuZGVmYXVsdCwgY29sb3I6IHN0cmluZyA9IHNldHRpbmdzLmRlZmF1bHRDb2xvciwgYWxwaGE6IG51bWJlciA9IDApIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmFscGhhID0gYWxwaGE7XG4gICAgICAgIHRoaXMubW91c2VQb3NpdGlvbiA9IG1vdXNlUG9zaXRpb247XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMub3JpZ2luID0ge1xuICAgICAgICAgICAgeDogdGhpcy5tb3VzZVBvc2l0aW9uLngsXG4gICAgICAgICAgICB5OiB0aGlzLm1vdXNlUG9zaXRpb24ueVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gdGhpcy5hbHBoYTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKClcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMub3JpZ2luLngsIHRoaXMub3JpZ2luLnksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gMTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLm9yaWdpbi54ID0gdGhpcy5tb3VzZVBvc2l0aW9uLng7XG4gICAgICAgIHRoaXMub3JpZ2luLnkgPSB0aGlzLm1vdXNlUG9zaXRpb24ueTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJjYW52YXMiLCJjdHgiLCJtb3VzZVBvc2l0aW9uIiwicmFkaXVzIiwiY29sb3IiLCJhbHBoYSIsInNldHRpbmdzXzEiLCJjaXJjbGVSYWRpdXMiLCJkZWZhdWx0Q29sb3IiLCJvcmlnaW4iLCJ4IiwieSIsIkNpcmNsZSIsImdsb2JhbEFscGhhIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCIsImNsb3NlUGF0aCIsImRyYXciLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Models/Circle.ts\n");

/***/ }),

/***/ "./src/js/Settings/Color.ts":
/*!**********************************!*\
  !*** ./src/js/Settings/Color.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Color = void 0;\n\nvar Color = function () {\n  function Color(hue, saturation, lightness) {\n    this.hue = hue;\n    this.saturation = saturation;\n    this.lightness = lightness;\n  }\n\n  Color.prototype.toString = function () {\n    return \"hsla(\".concat(this.hue, \", \").concat(this.saturation, \"%, \").concat(this.lightness, \"%)\");\n  };\n\n  return Color;\n}();\n\nexports.Color = Color;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvU2V0dGluZ3MvQ29sb3IudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUtJLGlCQUFZQSxHQUFaLEVBQXlCQyxVQUF6QixFQUE2Q0MsU0FBN0MsRUFBOEQ7QUFDMUQsU0FBS0YsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNIOztBQUVEQztBQUNJLFdBQU8sZUFBUSxLQUFLSCxHQUFiLEVBQWdCLElBQWhCLEVBQWdCSSxNQUFoQixDQUFxQixLQUFLSCxVQUExQixFQUFvQyxLQUFwQyxFQUFvQ0csTUFBcEMsQ0FBMEMsS0FBS0YsU0FBL0MsRUFBd0QsSUFBeEQsQ0FBUDtBQUNILEdBRkQ7O0FBR0o7QUFBQyxDQWREOztBQUFhRyxhQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2J1YmJsZS1hcXVhcml1bS8uL3NyYy9qcy9TZXR0aW5ncy9Db2xvci50cz81ODBhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb2xvciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBodWU6IG51bWJlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNhdHVyYXRpb246IG51bWJlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxpZ2h0bmVzczogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoaHVlOiBudW1iZXIsIHNhdHVyYXRpb246IG51bWJlciwgbGlnaHRuZXNzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5odWUgPSBodWU7XG4gICAgICAgIHRoaXMuc2F0dXJhdGlvbiA9IHNhdHVyYXRpb247XG4gICAgICAgIHRoaXMubGlnaHRuZXNzID0gbGlnaHRuZXNzO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgaHNsYSgke3RoaXMuaHVlfSwgJHt0aGlzLnNhdHVyYXRpb259JSwgJHt0aGlzLmxpZ2h0bmVzc30lKWA7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJodWUiLCJzYXR1cmF0aW9uIiwibGlnaHRuZXNzIiwiQ29sb3IiLCJjb25jYXQiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Settings/Color.ts\n");

/***/ }),

/***/ "./src/js/Settings/settings.ts":
/*!*************************************!*\
  !*** ./src/js/Settings/settings.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\n\nvar Color_1 = __webpack_require__(/*! ./Color */ \"./src/js/Settings/Color.ts\");\n\nvar color1 = new Color_1.Color(201, 20, 23);\nvar color2 = new Color_1.Color(186, 21, 26);\nvar color3 = new Color_1.Color(165, 19, 40);\nvar color4 = new Color_1.Color(133, 18, 59);\nvar color5 = new Color_1.Color(97, 13, 80);\nexports.settings = {\n  canvasHeightRatio: 0.6,\n  canvasWidthRatio: 0.8,\n  circleRadius: {\n    min: 2,\n    max: 30,\n    \"default\": 15\n  },\n  pointer: {\n    color: \"red\",\n    alpha: 0,\n    radius: 30\n  },\n  gradientColor: [color3, color4],\n  colors: [color1, color2, color3, color4, color5],\n  defaultColor: \"pink\"\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvU2V0dGluZ3Mvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsSUFBSUMsYUFBSixDQUFVLEdBQVYsRUFBZSxFQUFmLEVBQW1CLEVBQW5CLENBQWY7QUFDQSxJQUFNQyxNQUFNLEdBQUcsSUFBSUQsYUFBSixDQUFVLEdBQVYsRUFBZSxFQUFmLEVBQW1CLEVBQW5CLENBQWY7QUFDQSxJQUFNRSxNQUFNLEdBQUcsSUFBSUYsYUFBSixDQUFVLEdBQVYsRUFBZSxFQUFmLEVBQW1CLEVBQW5CLENBQWY7QUFDQSxJQUFNRyxNQUFNLEdBQUcsSUFBSUgsYUFBSixDQUFVLEdBQVYsRUFBZSxFQUFmLEVBQW1CLEVBQW5CLENBQWY7QUFDQSxJQUFNSSxNQUFNLEdBQUcsSUFBSUosYUFBSixDQUFVLEVBQVYsRUFBYyxFQUFkLEVBQWtCLEVBQWxCLENBQWY7QUFHYUssZ0JBQUFBLEdBQVc7QUFDcEJDLG1CQUFpQixFQUFFLEdBREM7QUFFcEJDLGtCQUFnQixFQUFFLEdBRkU7QUFHcEJDLGNBQVksRUFBRTtBQUFDQyxPQUFHLEVBQUUsQ0FBTjtBQUFTQyxPQUFHLEVBQUUsRUFBZDtBQUFrQixlQUFTO0FBQTNCLEdBSE07QUFJcEJDLFNBQU8sRUFBRTtBQUFDQyxTQUFLLEVBQUUsS0FBUjtBQUFlQyxTQUFLLEVBQUUsQ0FBdEI7QUFBeUJDLFVBQU0sRUFBRTtBQUFqQyxHQUpXO0FBS3BCQyxlQUFhLEVBQUUsQ0FBQ2IsTUFBRCxFQUFTQyxNQUFULENBTEs7QUFNcEJhLFFBQU0sRUFBRSxDQUFDakIsTUFBRCxFQUFTRSxNQUFULEVBQWlCQyxNQUFqQixFQUF5QkMsTUFBekIsRUFBaUNDLE1BQWpDLENBTlk7QUFPcEJhLGNBQVksRUFBRTtBQVBNLENBQVgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWJibGUtYXF1YXJpdW0vLi9zcmMvanMvU2V0dGluZ3Mvc2V0dGluZ3MudHM/ZTE3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbG9yfSBmcm9tIFwiLi9Db2xvclwiO1xuXG5jb25zdCBjb2xvcjEgPSBuZXcgQ29sb3IoMjAxLCAyMCwgMjMpO1xuY29uc3QgY29sb3IyID0gbmV3IENvbG9yKDE4NiwgMjEsIDI2KTtcbmNvbnN0IGNvbG9yMyA9IG5ldyBDb2xvcigxNjUsIDE5LCA0MCk7XG5jb25zdCBjb2xvcjQgPSBuZXcgQ29sb3IoMTMzLCAxOCwgNTkpO1xuY29uc3QgY29sb3I1ID0gbmV3IENvbG9yKDk3LCAxMywgODApO1xuXG5cbmV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBjYW52YXNIZWlnaHRSYXRpbzogMC42LFxuICAgIGNhbnZhc1dpZHRoUmF0aW86IDAuOCxcbiAgICBjaXJjbGVSYWRpdXM6IHttaW46IDIsIG1heDogMzAsIGRlZmF1bHQ6IDE1fSxcbiAgICBwb2ludGVyOiB7Y29sb3I6IFwicmVkXCIsIGFscGhhOiAwLCByYWRpdXM6IDMwfSxcbiAgICBncmFkaWVudENvbG9yOiBbY29sb3IzLCBjb2xvcjRdLFxuICAgIGNvbG9yczogW2NvbG9yMSwgY29sb3IyLCBjb2xvcjMsIGNvbG9yNCwgY29sb3I1XSxcbiAgICBkZWZhdWx0Q29sb3I6IFwicGlua1wiXG59XG4iXSwibmFtZXMiOlsiY29sb3IxIiwiQ29sb3JfMSIsImNvbG9yMiIsImNvbG9yMyIsImNvbG9yNCIsImNvbG9yNSIsImV4cG9ydHMiLCJjYW52YXNIZWlnaHRSYXRpbyIsImNhbnZhc1dpZHRoUmF0aW8iLCJjaXJjbGVSYWRpdXMiLCJtaW4iLCJtYXgiLCJwb2ludGVyIiwiY29sb3IiLCJhbHBoYSIsInJhZGl1cyIsImdyYWRpZW50Q29sb3IiLCJjb2xvcnMiLCJkZWZhdWx0Q29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/Settings/settings.ts\n");

/***/ }),

/***/ "./src/js/canvas.ts":
/*!**************************!*\
  !*** ./src/js/canvas.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.canvas = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./Settings/settings */ \"./src/js/Settings/settings.ts\");\n\nexports.canvas = {\n  init: function init(canvas) {\n    this.canvas = canvas;\n    this.ctx = this.canvas.getContext(\"2d\");\n    this.updateCanvasSize();\n    this.createLinearGradient();\n    return this;\n  },\n  updateCanvasSize: function updateCanvasSize() {\n    this.canvas.width = window.innerWidth * settings_1.settings.canvasWidthRatio;\n    this.canvas.height = window.innerHeight * settings_1.settings.canvasHeightRatio;\n    this.createLinearGradient();\n    return this;\n  },\n  createLinearGradient: function createLinearGradient() {\n    this.gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);\n    this.gradient.addColorStop(0, settings_1.settings.gradientColor[0].toString());\n    this.gradient.addColorStop(1, settings_1.settings.gradientColor[1].toString());\n    return this;\n  },\n  draw: function draw() {\n    this.ctx.fillStyle = this.gradient;\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    return this;\n  },\n  update: function update() {\n    return this.draw();\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY2FudmFzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRWFBLGNBQUFBLEdBQVM7QUFDbEJDLE1BQUksRUFBSixjQUFLQyxNQUFMLEVBQThCO0FBQzFCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFLRCxNQUFMLENBQVlFLFVBQVosQ0FBdUIsSUFBdkIsQ0FBWDtBQUNBLFNBQUtDLGdCQUFMO0FBQ0EsU0FBS0Msb0JBQUw7QUFDQSxXQUFPLElBQVA7QUFFSCxHQVJpQjtBQVNsQkQsa0JBQWdCO0FBQ1osU0FBS0gsTUFBTCxDQUFZSyxLQUFaLEdBQW9CQyxNQUFNLENBQUNDLFVBQVAsR0FBb0JDLG9CQUFTQyxnQkFBakQ7QUFDQSxTQUFLVCxNQUFMLENBQVlVLE1BQVosR0FBcUJKLE1BQU0sQ0FBQ0ssV0FBUCxHQUFxQkgsb0JBQVNJLGlCQUFuRDtBQUNBLFNBQUtSLG9CQUFMO0FBQ0EsV0FBTyxJQUFQO0FBQ0gsR0FkaUI7QUFlbEJBLHNCQUFvQixFQUFwQjtBQUNJLFNBQUtTLFFBQUwsR0FBZ0IsS0FBS1osR0FBTCxDQUFTRyxvQkFBVCxDQUE4QixDQUE5QixFQUFpQyxDQUFqQyxFQUFvQyxLQUFLSixNQUFMLENBQVlLLEtBQWhELEVBQXVELEtBQUtMLE1BQUwsQ0FBWVUsTUFBbkUsQ0FBaEI7QUFDQSxTQUFLRyxRQUFMLENBQWNDLFlBQWQsQ0FBMkIsQ0FBM0IsRUFBOEJOLG9CQUFTTyxhQUFULENBQXVCLENBQXZCLEVBQTBCQyxRQUExQixFQUE5QjtBQUNBLFNBQUtILFFBQUwsQ0FBY0MsWUFBZCxDQUEyQixDQUEzQixFQUE4Qk4sb0JBQVNPLGFBQVQsQ0FBdUIsQ0FBdkIsRUFBMEJDLFFBQTFCLEVBQTlCO0FBQ0EsV0FBTyxJQUFQO0FBQ0gsR0FwQmlCO0FBcUJsQkMsTUFBSTtBQUNBLFNBQUtoQixHQUFMLENBQVNpQixTQUFULEdBQXFCLEtBQUtMLFFBQTFCO0FBQ0EsU0FBS1osR0FBTCxDQUFTa0IsUUFBVCxDQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixLQUFLbkIsTUFBTCxDQUFZSyxLQUFwQyxFQUEyQyxLQUFLTCxNQUFMLENBQVlVLE1BQXZEO0FBQ0EsV0FBTyxJQUFQO0FBQ0gsR0F6QmlCO0FBMEJsQlUsUUFBTTtBQUNGLFdBQU8sS0FBS0gsSUFBTCxFQUFQO0FBQ0g7QUE1QmlCLENBQVQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWJibGUtYXF1YXJpdW0vLi9zcmMvanMvY2FudmFzLnRzPzZiZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4vU2V0dGluZ3Mvc2V0dGluZ3NcIjtcblxuZXhwb3J0IGNvbnN0IGNhbnZhcyA9IHtcbiAgICBpbml0KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICAgICAgdGhpcy51cGRhdGVDYW52YXNTaXplKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlTGluZWFyR3JhZGllbnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9LFxuICAgIHVwZGF0ZUNhbnZhc1NpemUoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiBzZXR0aW5ncy5jYW52YXNXaWR0aFJhdGlvO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiBzZXR0aW5ncy5jYW52YXNIZWlnaHRSYXRpbztcbiAgICAgICAgdGhpcy5jcmVhdGVMaW5lYXJHcmFkaWVudCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGNyZWF0ZUxpbmVhckdyYWRpZW50KCk6IENhbnZhc0dyYWRpZW50IHtcbiAgICAgICAgdGhpcy5ncmFkaWVudCA9IHRoaXMuY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBzZXR0aW5ncy5ncmFkaWVudENvbG9yWzBdLnRvU3RyaW5nKCkpO1xuICAgICAgICB0aGlzLmdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBzZXR0aW5ncy5ncmFkaWVudENvbG9yWzFdLnRvU3RyaW5nKCkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZ3JhZGllbnQ7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgdXBkYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kcmF3KCk7XG4gICAgfSxcbn0iXSwibmFtZXMiOlsiZXhwb3J0cyIsImluaXQiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwidXBkYXRlQ2FudmFzU2l6ZSIsImNyZWF0ZUxpbmVhckdyYWRpZW50Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic2V0dGluZ3NfMSIsImNhbnZhc1dpZHRoUmF0aW8iLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImNhbnZhc0hlaWdodFJhdGlvIiwiZ3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJncmFkaWVudENvbG9yIiwidG9TdHJpbmciLCJkcmF3IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ1cGRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/canvas.ts\n");

/***/ }),

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar canvas_1 = __webpack_require__(/*! ./canvas */ \"./src/js/canvas.ts\");\n\nvar Bubble_1 = __webpack_require__(/*! ./Models/Bubble */ \"./src/js/Models/Bubble.ts\");\n\nvar settings_1 = __webpack_require__(/*! ./Settings/settings */ \"./src/js/Settings/settings.ts\");\n\nvar Circle_1 = __webpack_require__(/*! ./Models/Circle */ \"./src/js/Models/Circle.ts\");\n\nvar App = {\n  bubbles: [],\n  mousePosition: {\n    x: 0,\n    y: 0\n  },\n  mousePointer: Circle_1.Circle,\n  init: function init() {\n    this.canvasElement = document.getElementById(\"my-canvas\");\n    this.canvas = canvas_1.canvas.init(this.canvasElement).draw();\n    this.ctx = this.canvas.ctx;\n    this.mousePointer = new Circle_1.Circle(this.canvas, this.ctx, this.mousePosition, settings_1.settings.pointer.radius, settings_1.settings.pointer.color, settings_1.settings.pointer.alpha);\n    this.canvasPosition = {\n      x: this.canvas.canvas.getBoundingClientRect().x + parseInt(getComputedStyle(this.canvas.canvas).borderWidth),\n      y: this.canvas.canvas.getBoundingClientRect().y + parseInt(getComputedStyle(this.canvas.canvas).borderWidth)\n    };\n    this.calculateMaxBubbles();\n    this.animate();\n    this.addEventListeners();\n  },\n  calculateMaxBubbles: function calculateMaxBubbles() {\n    this.maxBubble = Math.floor(this.canvas.canvas.width / settings_1.settings.circleRadius.min);\n  },\n  animate: function animate() {\n    if (this.bubbles.length < this.maxBubble) {\n      this.bubbles.push(new Bubble_1.Bubble(this.canvas.canvas, this.ctx, this.mousePosition));\n    } else if (this.bubbles.length > this.maxBubble) {\n      this.bubbles = this.bubbles.slice(0, this.maxBubble);\n    }\n\n    this.ctx.clearRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height);\n    this.canvas.update();\n    this.bubbles.forEach(function (bubble) {\n      bubble.update();\n    });\n    this.mousePointer.update();\n    requestAnimationFrame(this.animate.bind(this));\n  },\n  addEventListeners: function addEventListeners() {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.canvas.updateCanvasSize();\n\n      _this.calculateMaxBubbles();\n\n      _this.canvasPosition = _this.canvas.getBoundingClientRect();\n    });\n    this.canvas.canvas.addEventListener('mousemove', function (event) {\n      _this.mousePosition.x = event.clientX - _this.canvasPosition.x;\n      _this.mousePosition.y = event.clientY - _this.canvasPosition.y;\n    });\n    return this;\n  }\n};\nApp.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNILEdBakNPO0FBa0NSakIsbUJBQWlCLEVBQWpCO0FBQUE7O0FBQ0lrQixVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDO0FBQzlCQyxXQUFJLENBQUNwQyxNQUFMLENBQVlxQyxnQkFBWjs7QUFDQUQsV0FBSSxDQUFDdEIsbUJBQUw7O0FBQ0FzQixXQUFJLENBQUMzQixjQUFMLEdBQXNCMkIsS0FBSSxDQUFDcEMsTUFBTCxDQUFZVSxxQkFBWixFQUF0QjtBQUNILEtBSkQ7QUFLQSxTQUFLVixNQUFMLENBQVlBLE1BQVosQ0FBbUJtQyxnQkFBbkIsQ0FBb0MsV0FBcEMsRUFBaUQsVUFBQ0csS0FBRCxFQUFrQjtBQUMvREYsV0FBSSxDQUFDN0MsYUFBTCxDQUFtQkMsQ0FBbkIsR0FBdUI4QyxLQUFLLENBQUNDLE9BQU4sR0FBZ0JILEtBQUksQ0FBQzNCLGNBQUwsQ0FBb0JqQixDQUEzRDtBQUNBNEMsV0FBSSxDQUFDN0MsYUFBTCxDQUFtQkUsQ0FBbkIsR0FBdUI2QyxLQUFLLENBQUNFLE9BQU4sR0FBZ0JKLEtBQUksQ0FBQzNCLGNBQUwsQ0FBb0JoQixDQUEzRDtBQUNILEtBSEQ7QUFJQSxXQUFPLElBQVA7QUFDSDtBQTdDTyxDQUFaO0FBZ0RBSixHQUFHLENBQUNPLElBQUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWJibGUtYXF1YXJpdW0vLi9zcmMvanMvbWFpbi50cz80YjcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y2FudmFzfSBmcm9tIFwiLi9jYW52YXNcIjtcbmltcG9ydCB7QnViYmxlfSBmcm9tIFwiLi9Nb2RlbHMvQnViYmxlXCI7XG5pbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9TZXR0aW5ncy9zZXR0aW5nc1wiO1xuaW1wb3J0IHtDaXJjbGV9IGZyb20gXCIuL01vZGVscy9DaXJjbGVcIjtcblxuXG5jb25zdCBBcHAgPSB7XG4gICAgYnViYmxlczogW10gYXMgQnViYmxlW10sXG4gICAgbW91c2VQb3NpdGlvbjoge3g6IDAsIHk6IDB9LFxuICAgIG1vdXNlUG9pbnRlcjogQ2lyY2xlLFxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXktY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcy5pbml0KHRoaXMuY2FudmFzRWxlbWVudCkuZHJhdygpO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICAgICAgdGhpcy5tb3VzZVBvaW50ZXIgPSBuZXcgQ2lyY2xlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcy5tb3VzZVBvc2l0aW9uLCBzZXR0aW5ncy5wb2ludGVyLnJhZGl1cywgc2V0dGluZ3MucG9pbnRlci5jb2xvciwgc2V0dGluZ3MucG9pbnRlci5hbHBoYSk7XG4gICAgICAgIHRoaXMuY2FudmFzUG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmNhbnZhcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueCArIHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUodGhpcy5jYW52YXMuY2FudmFzKS5ib3JkZXJXaWR0aCksXG4gICAgICAgICAgICB5OiB0aGlzLmNhbnZhcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSArIHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUodGhpcy5jYW52YXMuY2FudmFzKS5ib3JkZXJXaWR0aClcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVNYXhCdWJibGVzKCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB9LFxuICAgIGNhbGN1bGF0ZU1heEJ1YmJsZXMoKSB7XG4gICAgICAgIHRoaXMubWF4QnViYmxlID0gTWF0aC5mbG9vcih0aGlzLmNhbnZhcy5jYW52YXMud2lkdGggLyBzZXR0aW5ncy5jaXJjbGVSYWRpdXMubWluKTtcbiAgICB9LFxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1YmJsZXMubGVuZ3RoIDwgdGhpcy5tYXhCdWJibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYnViYmxlcy5wdXNoKG5ldyBCdWJibGUodGhpcy5jYW52YXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcy5tb3VzZVBvc2l0aW9uKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5idWJibGVzLmxlbmd0aCA+IHRoaXMubWF4QnViYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmJ1YmJsZXMgPSB0aGlzLmJ1YmJsZXMuc2xpY2UoMCwgdGhpcy5tYXhCdWJibGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNhbnZhcy51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5idWJibGVzLmZvckVhY2goKGJ1YmJsZTogQnViYmxlKSA9PiB7XG4gICAgICAgICAgICBidWJibGUudXBkYXRlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMubW91c2VQb2ludGVyLnVwZGF0ZSgpXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfSxcbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnVwZGF0ZUNhbnZhc1NpemUoKTtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlTWF4QnViYmxlcygpO1xuICAgICAgICAgICAgdGhpcy5jYW52YXNQb3NpdGlvbiA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLmNhbnZhcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vdXNlUG9zaXRpb24ueCA9IGV2ZW50LmNsaWVudFggLSB0aGlzLmNhbnZhc1Bvc2l0aW9uLng7XG4gICAgICAgICAgICB0aGlzLm1vdXNlUG9zaXRpb24ueSA9IGV2ZW50LmNsaWVudFkgLSB0aGlzLmNhbnZhc1Bvc2l0aW9uLnk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG59XG5cbkFwcC5pbml0KCk7Il0sIm5hbWVzIjpbIkFwcCIsImJ1YmJsZXMiLCJtb3VzZVBvc2l0aW9uIiwieCIsInkiLCJtb3VzZVBvaW50ZXIiLCJDaXJjbGVfMSIsImluaXQiLCJjYW52YXNFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbnZhcyIsImNhbnZhc18xIiwiZHJhdyIsImN0eCIsInNldHRpbmdzXzEiLCJwb2ludGVyIiwicmFkaXVzIiwiY29sb3IiLCJhbHBoYSIsImNhbnZhc1Bvc2l0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyc2VJbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiYm9yZGVyV2lkdGgiLCJjYWxjdWxhdGVNYXhCdWJibGVzIiwiYW5pbWF0ZSIsImFkZEV2ZW50TGlzdGVuZXJzIiwibWF4QnViYmxlIiwiTWF0aCIsImZsb29yIiwid2lkdGgiLCJjaXJjbGVSYWRpdXMiLCJtaW4iLCJsZW5ndGgiLCJwdXNoIiwiQnViYmxlXzEiLCJzbGljZSIsImNsZWFyUmVjdCIsImhlaWdodCIsInVwZGF0ZSIsImZvckVhY2giLCJidWJibGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl90aGlzIiwidXBkYXRlQ2FudmFzU2l6ZSIsImV2ZW50IiwiY2xpZW50WCIsImNsaWVudFkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/main.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnViYmxlLWFxdWFyaXVtLy4vc3JjL3Njc3MvbWFpbi5zY3NzP2Y3ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbubble_aquarium"] = self["webpackChunkbubble_aquarium"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;