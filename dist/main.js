/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleFormSubmit: () => (/* binding */ handleFormSubmit),\n/* harmony export */   loadContactForm: () => (/* binding */ loadContactForm),\n/* harmony export */   setupEventListeners: () => (/* binding */ setupEventListeners)\n/* harmony export */ });\nfunction setupEventListeners() {\n  var contactForm = document.getElementById(\"form\");\n  contactForm.addEventListener('submit', handleFormSubmit);\n}\nfunction handleFormSubmit(event) {\n  event.preventDefault();\n  var formName = document.getElementById(\"formName\").value;\n  var formDate = document.getElementById(\"formDate\").value;\n  event.target.reset();\n  // Add any additional logic or validation here\n}\nfunction loadContactForm() {\n  var content = document.getElementById('content');\n  var contactDiv = document.createElement('div');\n  contactDiv.classList.add('contact');\n  var title = document.createElement('h1');\n  title.textContent = 'Reserve your event';\n  var description = document.createElement('p');\n  description.textContent = 'We will get in touch with you within 24 hours';\n  var form = document.createElement('form');\n  form.id = 'form';\n  var nameInput = document.createElement('input');\n  nameInput.id = 'formName';\n  nameInput.placeholder = 'Name';\n  var dateInput = document.createElement('input');\n  dateInput.id = 'formDate';\n  dateInput.type = 'date';\n  var submitButton = document.createElement('button');\n  submitButton.type = 'submit';\n  submitButton.textContent = 'Submit';\n  form.appendChild(nameInput);\n  form.appendChild(dateInput);\n  form.appendChild(submitButton);\n  contactDiv.appendChild(title);\n  contactDiv.appendChild(description);\n  contactDiv.appendChild(form);\n  content.appendChild(contactDiv);\n  setupEventListeners();\n}\n\n//# sourceURL=webpack://webpack-demo/./src/components/contact.js?");

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\n  var content = document.getElementById('content');\n  var homeDiv = document.createElement('div');\n  homeDiv.classList.add('home');\n  var title = document.createElement('h1');\n  title.textContent = 'Welcome to Our Restaurant';\n  var description = document.createElement('p');\n  description.textContent = 'Enjoy our delicious meals in a cozy atmosphere.';\n  homeDiv.appendChild(title);\n  homeDiv.appendChild(description);\n  content.appendChild(homeDiv);\n}\n\n//# sourceURL=webpack://webpack-demo/./src/components/home.js?");

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenuCard: () => (/* binding */ createMenuCard),\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction createMenuCard(menu, index) {\n  var menuCard = document.createElement(\"div\");\n  menuCard.classList.add(\"menu\");\n  menuCard.dataset.index = index;\n  menuCard.innerHTML = \"\\n    <h3 class=\\\"menu__title\\\">\".concat(menu.title, \"</h3>\\n    <p class=\\\"menu__description\\\">by \").concat(menu.description, \"</p>\\n  \");\n  return menuCard;\n}\nfunction loadMenu() {\n  var menu = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultMenu;\n  var menuElement = document.getElementById(\"menu\");\n  if (menuElement) {\n    menuElement.innerHTML = ''; // Clear existing content\n    menu.forEach(function (item, index) {\n      var menuCard = createMenuCard(item, index);\n      menuElement.appendChild(menuCard);\n    });\n  }\n}\n\n// Define a default menu\nvar defaultMenu = [{\n  title: 'Burger',\n  description: 'Delicious beef patty'\n}, {\n  title: 'Salad',\n  description: 'Fresh greens'\n}, {\n  title: 'Pizza',\n  description: 'Homemade dough'\n}];\n\n//# sourceURL=webpack://webpack-demo/./src/components/menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home */ \"./src/components/home.js\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu */ \"./src/components/menu.js\");\n/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/contact */ \"./src/components/contact.js\");\n\n\n\nfunction setActiveButton(button) {\n  var buttons = document.querySelectorAll('button');\n  buttons.forEach(function (btn) {\n    return btn.classList.remove('active');\n  });\n  button.classList.add('active');\n}\nfunction clearContent() {\n  var content = document.getElementById('content');\n  content.innerHTML = '';\n}\nfunction switchTab(newTab) {\n  clearContent();\n  newTab();\n}\ndocument.addEventListener('DOMContentLoaded', function () {\n  var homeButton = document.getElementById('home');\n  var menuButton = document.getElementById('menu');\n  var contactButton = document.getElementById('contact');\n  homeButton.addEventListener('click', function () {\n    setActiveButton(homeButton);\n    switchTab(_components_home__WEBPACK_IMPORTED_MODULE_0__.loadHome);\n  });\n  menuButton.addEventListener('click', function () {\n    setActiveButton(menuButton);\n    switchTab(_components_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenu);\n  });\n  contactButton.addEventListener('click', function () {\n    setActiveButton(contactButton);\n    switchTab(loadContact);\n  });\n\n  // Load home page by default\n  (0,_components_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n  setActiveButton(homeButton);\n});\nconsole.log(\"Restaurant Page\");\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

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