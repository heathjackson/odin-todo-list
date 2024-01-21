/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTask */ \"./src/newTask.js\");\n/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_newTask__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProject */ \"./src/newProject.js\");\n\n\n\nconst newTask1 = (0,_newTask__WEBPACK_IMPORTED_MODULE_0__.newTask)(\"get my lunch\", \"eat lunch\", \"10 / 5 / 2022\", \"high\");\nnewTask1.toggleStaus();\n\nconsole.log(newTask1, newTask1.status);\n\nconst newProject1 = (0,_newProject__WEBPACK_IMPORTED_MODULE_1__.newProject)(\"house\");\nnewProject1.addTask(newTask1);\n\nconsole.log(newProject1.getNewList());\n\nnewProject1.deleteTask(newTask1);\n\nconsole.log(newProject1.getNewList());\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newProject: () => (/* binding */ newProject)\n/* harmony export */ });\nconst newProject = (title) => {\n  let newList = [];\n  const addTask = (task) => {\n    newList.push(task);\n  };\n  const deleteTask = (task) => {\n    newList = newList.filter((e) => e !== task);\n  };\n\n  const getNewList = () => newList;\n\n  return { title, addTask, deleteTask, getNewList };\n};\n\n\n//# sourceURL=webpack://todo-list/./src/newProject.js?");

/***/ }),

/***/ "./src/newTask.js":
/*!************************!*\
  !*** ./src/newTask.js ***!
  \************************/
/***/ (() => {

eval("class PriorityLevels {\n  static LOW = 0;\n  static MEDIUM = 1;\n  static HIGH = 2;\n}\n\nObject.freeze(PriorityLevels);\n\nclass Priority {\n  constructor(priority) {\n    this.priority = priority;\n  }\n\n  get priority() {\n    return this._priority;\n  }\n\n  set priority(level) {\n    this._priority = level;\n  }\n}\n\nclass NewTask {\n  constructor(title, description, dueDate) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.status = false;\n  }\n\n  get status() {\n    return this.status;\n  }\n\n  toggleStatus() {\n    this.status = !this.status;\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/newTask.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;