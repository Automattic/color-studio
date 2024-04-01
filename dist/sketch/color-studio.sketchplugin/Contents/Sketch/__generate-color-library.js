var globalThis = this;
var global = this;
function __skpm_run (key, context) {
  globalThis.context = context;
  try {

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./extensions/sketch/generate-color-library.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/colors.meta.json":
/*!*******************************!*\
  !*** ./dist/colors.meta.json ***!
  \*******************************/
/*! exports provided: version, colors, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"version\":\"2.5.0\",\"colors\":[[{\"name\":\"White\",\"value\":\"#fff\",\"_meta\":{\"special\":true}},{\"name\":\"Black\",\"value\":\"#000\",\"_meta\":{\"special\":true}}],[{\"name\":\"Gray\",\"value\":\"#646970\",\"_meta\":{\"alias\":true,\"baseName\":\"Gray\",\"index\":50}},{\"name\":\"Gray 0\",\"value\":\"#f6f7f7\",\"_meta\":{\"baseName\":\"Gray\",\"index\":0}},{\"name\":\"Gray 5\",\"value\":\"#dcdcde\",\"_meta\":{\"baseName\":\"Gray\",\"index\":5}},{\"name\":\"Gray 10\",\"value\":\"#c3c4c7\",\"_meta\":{\"baseName\":\"Gray\",\"index\":10}},{\"name\":\"Gray 20\",\"value\":\"#a7aaad\",\"_meta\":{\"baseName\":\"Gray\",\"index\":20}},{\"name\":\"Gray 30\",\"value\":\"#8c8f94\",\"_meta\":{\"baseName\":\"Gray\",\"index\":30}},{\"name\":\"Gray 40\",\"value\":\"#787c82\",\"_meta\":{\"baseName\":\"Gray\",\"index\":40}},{\"name\":\"Gray 50\",\"value\":\"#646970\",\"_meta\":{\"baseName\":\"Gray\",\"index\":50}},{\"name\":\"Gray 60\",\"value\":\"#50575e\",\"_meta\":{\"baseName\":\"Gray\",\"index\":60}},{\"name\":\"Gray 70\",\"value\":\"#3c434a\",\"_meta\":{\"baseName\":\"Gray\",\"index\":70}},{\"name\":\"Gray 80\",\"value\":\"#2c3338\",\"_meta\":{\"baseName\":\"Gray\",\"index\":80}},{\"name\":\"Gray 90\",\"value\":\"#1d2327\",\"_meta\":{\"baseName\":\"Gray\",\"index\":90}},{\"name\":\"Gray 100\",\"value\":\"#101517\",\"_meta\":{\"baseName\":\"Gray\",\"index\":100}}],[{\"name\":\"Blue\",\"value\":\"#0675c4\",\"_meta\":{\"alias\":true,\"baseName\":\"Blue\",\"index\":50}},{\"name\":\"Blue 0\",\"value\":\"#e9f0f5\",\"_meta\":{\"baseName\":\"Blue\",\"index\":0}},{\"name\":\"Blue 5\",\"value\":\"#bbe0fa\",\"_meta\":{\"baseName\":\"Blue\",\"index\":5}},{\"name\":\"Blue 10\",\"value\":\"#91caf2\",\"_meta\":{\"baseName\":\"Blue\",\"index\":10}},{\"name\":\"Blue 20\",\"value\":\"#68b3e8\",\"_meta\":{\"baseName\":\"Blue\",\"index\":20}},{\"name\":\"Blue 30\",\"value\":\"#399ce3\",\"_meta\":{\"baseName\":\"Blue\",\"index\":30}},{\"name\":\"Blue 40\",\"value\":\"#1689db\",\"_meta\":{\"baseName\":\"Blue\",\"index\":40}},{\"name\":\"Blue 50\",\"value\":\"#0675c4\",\"_meta\":{\"baseName\":\"Blue\",\"index\":50}},{\"name\":\"Blue 60\",\"value\":\"#055d9c\",\"_meta\":{\"baseName\":\"Blue\",\"index\":60}},{\"name\":\"Blue 70\",\"value\":\"#044b7a\",\"_meta\":{\"baseName\":\"Blue\",\"index\":70}},{\"name\":\"Blue 80\",\"value\":\"#02395c\",\"_meta\":{\"baseName\":\"Blue\",\"index\":80}},{\"name\":\"Blue 90\",\"value\":\"#01283d\",\"_meta\":{\"baseName\":\"Blue\",\"index\":90}},{\"name\":\"Blue 100\",\"value\":\"#001621\",\"_meta\":{\"baseName\":\"Blue\",\"index\":100}}],[{\"name\":\"Purple\",\"value\":\"#984a9c\",\"_meta\":{\"alias\":true,\"baseName\":\"Purple\",\"index\":50}},{\"name\":\"Purple 0\",\"value\":\"#f2e9ed\",\"_meta\":{\"baseName\":\"Purple\",\"index\":0}},{\"name\":\"Purple 5\",\"value\":\"#ebcee0\",\"_meta\":{\"baseName\":\"Purple\",\"index\":5}},{\"name\":\"Purple 10\",\"value\":\"#e3afd5\",\"_meta\":{\"baseName\":\"Purple\",\"index\":10}},{\"name\":\"Purple 20\",\"value\":\"#d48fc8\",\"_meta\":{\"baseName\":\"Purple\",\"index\":20}},{\"name\":\"Purple 30\",\"value\":\"#c475bd\",\"_meta\":{\"baseName\":\"Purple\",\"index\":30}},{\"name\":\"Purple 40\",\"value\":\"#b35eb1\",\"_meta\":{\"baseName\":\"Purple\",\"index\":40}},{\"name\":\"Purple 50\",\"value\":\"#984a9c\",\"_meta\":{\"baseName\":\"Purple\",\"index\":50}},{\"name\":\"Purple 60\",\"value\":\"#7c3982\",\"_meta\":{\"baseName\":\"Purple\",\"index\":60}},{\"name\":\"Purple 70\",\"value\":\"#662c6e\",\"_meta\":{\"baseName\":\"Purple\",\"index\":70}},{\"name\":\"Purple 80\",\"value\":\"#4d2054\",\"_meta\":{\"baseName\":\"Purple\",\"index\":80}},{\"name\":\"Purple 90\",\"value\":\"#35163b\",\"_meta\":{\"baseName\":\"Purple\",\"index\":90}},{\"name\":\"Purple 100\",\"value\":\"#1e0c21\",\"_meta\":{\"baseName\":\"Purple\",\"index\":100}}],[{\"name\":\"Pink\",\"value\":\"#c9356e\",\"_meta\":{\"alias\":true,\"baseName\":\"Pink\",\"index\":50}},{\"name\":\"Pink 0\",\"value\":\"#f5e9ed\",\"_meta\":{\"baseName\":\"Pink\",\"index\":0}},{\"name\":\"Pink 5\",\"value\":\"#f2ceda\",\"_meta\":{\"baseName\":\"Pink\",\"index\":5}},{\"name\":\"Pink 10\",\"value\":\"#f7a8c3\",\"_meta\":{\"baseName\":\"Pink\",\"index\":10}},{\"name\":\"Pink 20\",\"value\":\"#f283aa\",\"_meta\":{\"baseName\":\"Pink\",\"index\":20}},{\"name\":\"Pink 30\",\"value\":\"#eb6594\",\"_meta\":{\"baseName\":\"Pink\",\"index\":30}},{\"name\":\"Pink 40\",\"value\":\"#e34c84\",\"_meta\":{\"baseName\":\"Pink\",\"index\":40}},{\"name\":\"Pink 50\",\"value\":\"#c9356e\",\"_meta\":{\"baseName\":\"Pink\",\"index\":50}},{\"name\":\"Pink 60\",\"value\":\"#ab235a\",\"_meta\":{\"baseName\":\"Pink\",\"index\":60}},{\"name\":\"Pink 70\",\"value\":\"#8c1749\",\"_meta\":{\"baseName\":\"Pink\",\"index\":70}},{\"name\":\"Pink 80\",\"value\":\"#700f3b\",\"_meta\":{\"baseName\":\"Pink\",\"index\":80}},{\"name\":\"Pink 90\",\"value\":\"#4f092a\",\"_meta\":{\"baseName\":\"Pink\",\"index\":90}},{\"name\":\"Pink 100\",\"value\":\"#260415\",\"_meta\":{\"baseName\":\"Pink\",\"index\":100}}],[{\"name\":\"Red\",\"value\":\"#d63638\",\"_meta\":{\"alias\":true,\"baseName\":\"Red\",\"index\":50}},{\"name\":\"Red 0\",\"value\":\"#f7ebec\",\"_meta\":{\"baseName\":\"Red\",\"index\":0}},{\"name\":\"Red 5\",\"value\":\"#facfd2\",\"_meta\":{\"baseName\":\"Red\",\"index\":5}},{\"name\":\"Red 10\",\"value\":\"#ffabaf\",\"_meta\":{\"baseName\":\"Red\",\"index\":10}},{\"name\":\"Red 20\",\"value\":\"#ff8085\",\"_meta\":{\"baseName\":\"Red\",\"index\":20}},{\"name\":\"Red 30\",\"value\":\"#f86368\",\"_meta\":{\"baseName\":\"Red\",\"index\":30}},{\"name\":\"Red 40\",\"value\":\"#e65054\",\"_meta\":{\"baseName\":\"Red\",\"index\":40}},{\"name\":\"Red 50\",\"value\":\"#d63638\",\"_meta\":{\"baseName\":\"Red\",\"index\":50}},{\"name\":\"Red 60\",\"value\":\"#b32d2e\",\"_meta\":{\"baseName\":\"Red\",\"index\":60}},{\"name\":\"Red 70\",\"value\":\"#8a2424\",\"_meta\":{\"baseName\":\"Red\",\"index\":70}},{\"name\":\"Red 80\",\"value\":\"#691c1c\",\"_meta\":{\"baseName\":\"Red\",\"index\":80}},{\"name\":\"Red 90\",\"value\":\"#451313\",\"_meta\":{\"baseName\":\"Red\",\"index\":90}},{\"name\":\"Red 100\",\"value\":\"#240a0a\",\"_meta\":{\"baseName\":\"Red\",\"index\":100}}],[{\"name\":\"Orange\",\"value\":\"#b26200\",\"_meta\":{\"alias\":true,\"baseName\":\"Orange\",\"index\":50}},{\"name\":\"Orange 0\",\"value\":\"#f5ece6\",\"_meta\":{\"baseName\":\"Orange\",\"index\":0}},{\"name\":\"Orange 5\",\"value\":\"#f7dcc6\",\"_meta\":{\"baseName\":\"Orange\",\"index\":5}},{\"name\":\"Orange 10\",\"value\":\"#ffbf86\",\"_meta\":{\"baseName\":\"Orange\",\"index\":10}},{\"name\":\"Orange 20\",\"value\":\"#faa754\",\"_meta\":{\"baseName\":\"Orange\",\"index\":20}},{\"name\":\"Orange 30\",\"value\":\"#e68b28\",\"_meta\":{\"baseName\":\"Orange\",\"index\":30}},{\"name\":\"Orange 40\",\"value\":\"#d67709\",\"_meta\":{\"baseName\":\"Orange\",\"index\":40}},{\"name\":\"Orange 50\",\"value\":\"#b26200\",\"_meta\":{\"baseName\":\"Orange\",\"index\":50}},{\"name\":\"Orange 60\",\"value\":\"#8a4d00\",\"_meta\":{\"baseName\":\"Orange\",\"index\":60}},{\"name\":\"Orange 70\",\"value\":\"#704000\",\"_meta\":{\"baseName\":\"Orange\",\"index\":70}},{\"name\":\"Orange 80\",\"value\":\"#543100\",\"_meta\":{\"baseName\":\"Orange\",\"index\":80}},{\"name\":\"Orange 90\",\"value\":\"#361f00\",\"_meta\":{\"baseName\":\"Orange\",\"index\":90}},{\"name\":\"Orange 100\",\"value\":\"#1f1200\",\"_meta\":{\"baseName\":\"Orange\",\"index\":100}}],[{\"name\":\"Yellow\",\"value\":\"#9d6e00\",\"_meta\":{\"alias\":true,\"baseName\":\"Yellow\",\"index\":50}},{\"name\":\"Yellow 0\",\"value\":\"#f5f1e1\",\"_meta\":{\"baseName\":\"Yellow\",\"index\":0}},{\"name\":\"Yellow 5\",\"value\":\"#f5e6b3\",\"_meta\":{\"baseName\":\"Yellow\",\"index\":5}},{\"name\":\"Yellow 10\",\"value\":\"#f2d76b\",\"_meta\":{\"baseName\":\"Yellow\",\"index\":10}},{\"name\":\"Yellow 20\",\"value\":\"#f0c930\",\"_meta\":{\"baseName\":\"Yellow\",\"index\":20}},{\"name\":\"Yellow 30\",\"value\":\"#deb100\",\"_meta\":{\"baseName\":\"Yellow\",\"index\":30}},{\"name\":\"Yellow 40\",\"value\":\"#c08c00\",\"_meta\":{\"baseName\":\"Yellow\",\"index\":40}},{\"name\":\"Yellow 50\",\"value\":\"#9d6e00\",\"_meta\":{\"baseName\":\"Yellow\",\"index\":50}},{\"name\":\"Yellow 60\",\"value\":\"#7d5600\",\"_meta\":{\"baseName\":\"Yellow\",\"index\":60}},{\"name\":\"Yellow 70\",\"value\":\"#674600\",\"_meta\":{\"baseName\":\"Yellow\",\"index\":70}},{\"name\":\"Yellow 80\",\"value\":\"#4f3500\",\"_meta\":{\"baseName\":\"Yellow\",\"index\":80}},{\"name\":\"Yellow 90\",\"value\":\"#320\",\"_meta\":{\"baseName\":\"Yellow\",\"index\":90}},{\"name\":\"Yellow 100\",\"value\":\"#1c1300\",\"_meta\":{\"baseName\":\"Yellow\",\"index\":100}}],[{\"name\":\"Green\",\"value\":\"#008a20\",\"_meta\":{\"alias\":true,\"baseName\":\"Green\",\"index\":50}},{\"name\":\"Green 0\",\"value\":\"#e6f2e8\",\"_meta\":{\"baseName\":\"Green\",\"index\":0}},{\"name\":\"Green 5\",\"value\":\"#b8e6bf\",\"_meta\":{\"baseName\":\"Green\",\"index\":5}},{\"name\":\"Green 10\",\"value\":\"#68de86\",\"_meta\":{\"baseName\":\"Green\",\"index\":10}},{\"name\":\"Green 20\",\"value\":\"#1ed15a\",\"_meta\":{\"baseName\":\"Green\",\"index\":20}},{\"name\":\"Green 30\",\"value\":\"#00ba37\",\"_meta\":{\"baseName\":\"Green\",\"index\":30}},{\"name\":\"Green 40\",\"value\":\"#00a32a\",\"_meta\":{\"baseName\":\"Green\",\"index\":40}},{\"name\":\"Green 50\",\"value\":\"#008a20\",\"_meta\":{\"baseName\":\"Green\",\"index\":50}},{\"name\":\"Green 60\",\"value\":\"#007017\",\"_meta\":{\"baseName\":\"Green\",\"index\":60}},{\"name\":\"Green 70\",\"value\":\"#005c12\",\"_meta\":{\"baseName\":\"Green\",\"index\":70}},{\"name\":\"Green 80\",\"value\":\"#00450c\",\"_meta\":{\"baseName\":\"Green\",\"index\":80}},{\"name\":\"Green 90\",\"value\":\"#003008\",\"_meta\":{\"baseName\":\"Green\",\"index\":90}},{\"name\":\"Green 100\",\"value\":\"#001c05\",\"_meta\":{\"baseName\":\"Green\",\"index\":100}}],[{\"name\":\"Celadon\",\"value\":\"#008763\",\"_meta\":{\"alias\":true,\"baseName\":\"Celadon\",\"index\":50}},{\"name\":\"Celadon 0\",\"value\":\"#e4f2ed\",\"_meta\":{\"baseName\":\"Celadon\",\"index\":0}},{\"name\":\"Celadon 5\",\"value\":\"#a7e8d3\",\"_meta\":{\"baseName\":\"Celadon\",\"index\":5}},{\"name\":\"Celadon 10\",\"value\":\"#66deb9\",\"_meta\":{\"baseName\":\"Celadon\",\"index\":10}},{\"name\":\"Celadon 20\",\"value\":\"#31cc9f\",\"_meta\":{\"baseName\":\"Celadon\",\"index\":20}},{\"name\":\"Celadon 30\",\"value\":\"#09b585\",\"_meta\":{\"baseName\":\"Celadon\",\"index\":30}},{\"name\":\"Celadon 40\",\"value\":\"#009e73\",\"_meta\":{\"baseName\":\"Celadon\",\"index\":40}},{\"name\":\"Celadon 50\",\"value\":\"#008763\",\"_meta\":{\"baseName\":\"Celadon\",\"index\":50}},{\"name\":\"Celadon 60\",\"value\":\"#007053\",\"_meta\":{\"baseName\":\"Celadon\",\"index\":60}},{\"name\":\"Celadon 70\",\"value\":\"#005c44\",\"_meta\":{\"baseName\":\"Celadon\",\"index\":70}},{\"name\":\"Celadon 80\",\"value\":\"#004533\",\"_meta\":{\"baseName\":\"Celadon\",\"index\":80}},{\"name\":\"Celadon 90\",\"value\":\"#003024\",\"_meta\":{\"baseName\":\"Celadon\",\"index\":90}},{\"name\":\"Celadon 100\",\"value\":\"#001c15\",\"_meta\":{\"baseName\":\"Celadon\",\"index\":100}}],[{\"name\":\"Automattic Blue\",\"value\":\"#24a3e0\",\"_meta\":{\"alias\":true,\"baseName\":\"Automattic Blue\",\"index\":30}},{\"name\":\"Automattic Blue 0\",\"value\":\"#ebf4fa\",\"_meta\":{\"baseName\":\"Automattic Blue\",\"index\":0}},{\"name\":\"Automattic Blue 5\",\"value\":\"#c4e2f5\",\"_meta\":{\"baseName\":\"Automattic Blue\",\"index\":5}},{\"name\":\"Automattic Blue 10\",\"value\":\"#88ccf2\",\"_meta\":{\"baseName\":\"Automattic Blue\",\"index\":10}},{\"name\":\"Automattic Blue 20\",\"value\":\"#5ab7e8\",\"_meta\":{\"baseName\":\"Automattic Blue\",\"index\":20}},{\"name\":\"Automattic Blue 30\",\"value\":\"#24a3e0\",\"_meta\":{\"baseName\":\"Automattic Blue\",\"index\":30}},{\"name\":\"Automattic Blue 40\",\"value\":\"#1490c7\",\"_meta\":{\"baseName\":\"Automattic Blue\",\"index\":40}},{\"name\":\"Automattic Blue 50\",\"value\":\"#0277a8\",\"_meta\":{\"baseName\":\"Automattic Blue\",\"index\":50}},{\"name\":\"Automattic Blue 60\",\"value\":\"#036085\",\"_meta\":{\"baseName\":\"Automattic Blue\",\"index\":60}},{\"name\":\"Automattic Blue 70\",\"value\":\"#02506e\",\"_meta\":{\"baseName\":\"Automattic Blue\",\"index\":70}},{\"name\":\"Automattic Blue 80\",\"value\":\"#02384d\",\"_meta\":{\"baseName\":\"Automattic Blue\",\"index\":80}},{\"name\":\"Automattic Blue 90\",\"value\":\"#022836\",\"_meta\":{\"baseName\":\"Automattic Blue\",\"index\":90}},{\"name\":\"Automattic Blue 100\",\"value\":\"#021b24\",\"_meta\":{\"baseName\":\"Automattic Blue\",\"index\":100}}],[{\"name\":\"WordPress Blue\",\"value\":\"#006088\",\"_meta\":{\"alias\":true,\"baseName\":\"WordPress Blue\",\"index\":50}},{\"name\":\"WordPress Blue 0\",\"value\":\"#e6f1f5\",\"_meta\":{\"baseName\":\"WordPress Blue\",\"index\":0}},{\"name\":\"WordPress Blue 5\",\"value\":\"#bedae6\",\"_meta\":{\"baseName\":\"WordPress Blue\",\"index\":5}},{\"name\":\"WordPress Blue 10\",\"value\":\"#98c6d9\",\"_meta\":{\"baseName\":\"WordPress Blue\",\"index\":10}},{\"name\":\"WordPress Blue 20\",\"value\":\"#6ab3d0\",\"_meta\":{\"baseName\":\"WordPress Blue\",\"index\":20}},{\"name\":\"WordPress Blue 30\",\"value\":\"#3895ba\",\"_meta\":{\"baseName\":\"WordPress Blue\",\"index\":30}},{\"name\":\"WordPress Blue 40\",\"value\":\"#187aa2\",\"_meta\":{\"baseName\":\"WordPress Blue\",\"index\":40}},{\"name\":\"WordPress Blue 50\",\"value\":\"#006088\",\"_meta\":{\"baseName\":\"WordPress Blue\",\"index\":50}},{\"name\":\"WordPress Blue 60\",\"value\":\"#004e6e\",\"_meta\":{\"baseName\":\"WordPress Blue\",\"index\":60}},{\"name\":\"WordPress Blue 70\",\"value\":\"#003c56\",\"_meta\":{\"baseName\":\"WordPress Blue\",\"index\":70}},{\"name\":\"WordPress Blue 80\",\"value\":\"#002c40\",\"_meta\":{\"baseName\":\"WordPress Blue\",\"index\":80}},{\"name\":\"WordPress Blue 90\",\"value\":\"#001d2d\",\"_meta\":{\"baseName\":\"WordPress Blue\",\"index\":90}},{\"name\":\"WordPress Blue 100\",\"value\":\"#00101c\",\"_meta\":{\"baseName\":\"WordPress Blue\",\"index\":100}}],[{\"name\":\"Simplenote Blue\",\"value\":\"#3361cc\",\"_meta\":{\"alias\":true,\"baseName\":\"Simplenote Blue\",\"index\":50}},{\"name\":\"Simplenote Blue 0\",\"value\":\"#e9ecf5\",\"_meta\":{\"baseName\":\"Simplenote Blue\",\"index\":0}},{\"name\":\"Simplenote Blue 5\",\"value\":\"#ced9f2\",\"_meta\":{\"baseName\":\"Simplenote Blue\",\"index\":5}},{\"name\":\"Simplenote Blue 10\",\"value\":\"#abc1f5\",\"_meta\":{\"baseName\":\"Simplenote Blue\",\"index\":10}},{\"name\":\"Simplenote Blue 20\",\"value\":\"#84a4f0\",\"_meta\":{\"baseName\":\"Simplenote Blue\",\"index\":20}},{\"name\":\"Simplenote Blue 30\",\"value\":\"#618df2\",\"_meta\":{\"baseName\":\"Simplenote Blue\",\"index\":30}},{\"name\":\"Simplenote Blue 40\",\"value\":\"#4678eb\",\"_meta\":{\"baseName\":\"Simplenote Blue\",\"index\":40}},{\"name\":\"Simplenote Blue 50\",\"value\":\"#3361cc\",\"_meta\":{\"baseName\":\"Simplenote Blue\",\"index\":50}},{\"name\":\"Simplenote Blue 60\",\"value\":\"#1d4fc4\",\"_meta\":{\"baseName\":\"Simplenote Blue\",\"index\":60}},{\"name\":\"Simplenote Blue 70\",\"value\":\"#113ead\",\"_meta\":{\"baseName\":\"Simplenote Blue\",\"index\":70}},{\"name\":\"Simplenote Blue 80\",\"value\":\"#0d2f85\",\"_meta\":{\"baseName\":\"Simplenote Blue\",\"index\":80}},{\"name\":\"Simplenote Blue 90\",\"value\":\"#09205c\",\"_meta\":{\"baseName\":\"Simplenote Blue\",\"index\":90}},{\"name\":\"Simplenote Blue 100\",\"value\":\"#05102e\",\"_meta\":{\"baseName\":\"Simplenote Blue\",\"index\":100}}],[{\"name\":\"WooCommerce Purple\",\"value\":\"#7f54b3\",\"_meta\":{\"alias\":true,\"baseName\":\"WooCommerce Purple\",\"index\":50}},{\"name\":\"WooCommerce Purple 0\",\"value\":\"#f7edf7\",\"_meta\":{\"baseName\":\"WooCommerce Purple\",\"index\":0}},{\"name\":\"WooCommerce Purple 5\",\"value\":\"#e5cfe8\",\"_meta\":{\"baseName\":\"WooCommerce Purple\",\"index\":5}},{\"name\":\"WooCommerce Purple 10\",\"value\":\"#d6b4e0\",\"_meta\":{\"baseName\":\"WooCommerce Purple\",\"index\":10}},{\"name\":\"WooCommerce Purple 20\",\"value\":\"#c792e0\",\"_meta\":{\"baseName\":\"WooCommerce Purple\",\"index\":20}},{\"name\":\"WooCommerce Purple 30\",\"value\":\"#af7dd1\",\"_meta\":{\"baseName\":\"WooCommerce Purple\",\"index\":30}},{\"name\":\"WooCommerce Purple 40\",\"value\":\"#9a69c7\",\"_meta\":{\"baseName\":\"WooCommerce Purple\",\"index\":40}},{\"name\":\"WooCommerce Purple 50\",\"value\":\"#7f54b3\",\"_meta\":{\"baseName\":\"WooCommerce Purple\",\"index\":50}},{\"name\":\"WooCommerce Purple 60\",\"value\":\"#674399\",\"_meta\":{\"baseName\":\"WooCommerce Purple\",\"index\":60}},{\"name\":\"WooCommerce Purple 70\",\"value\":\"#533582\",\"_meta\":{\"baseName\":\"WooCommerce Purple\",\"index\":70}},{\"name\":\"WooCommerce Purple 80\",\"value\":\"#3c2861\",\"_meta\":{\"baseName\":\"WooCommerce Purple\",\"index\":80}},{\"name\":\"WooCommerce Purple 90\",\"value\":\"#271b3d\",\"_meta\":{\"baseName\":\"WooCommerce Purple\",\"index\":90}},{\"name\":\"WooCommerce Purple 100\",\"value\":\"#140e1f\",\"_meta\":{\"baseName\":\"WooCommerce Purple\",\"index\":100}}],[{\"name\":\"Jetpack Green\",\"value\":\"#069e08\",\"_meta\":{\"alias\":true,\"baseName\":\"Jetpack Green\",\"index\":40}},{\"name\":\"Jetpack Green 0\",\"value\":\"#f0f2eb\",\"_meta\":{\"baseName\":\"Jetpack Green\",\"index\":0}},{\"name\":\"Jetpack Green 5\",\"value\":\"#d0e6b8\",\"_meta\":{\"baseName\":\"Jetpack Green\",\"index\":5}},{\"name\":\"Jetpack Green 10\",\"value\":\"#9dd977\",\"_meta\":{\"baseName\":\"Jetpack Green\",\"index\":10}},{\"name\":\"Jetpack Green 20\",\"value\":\"#64ca43\",\"_meta\":{\"baseName\":\"Jetpack Green\",\"index\":20}},{\"name\":\"Jetpack Green 30\",\"value\":\"#2fb41f\",\"_meta\":{\"baseName\":\"Jetpack Green\",\"index\":30}},{\"name\":\"Jetpack Green 40\",\"value\":\"#069e08\",\"_meta\":{\"baseName\":\"Jetpack Green\",\"index\":40}},{\"name\":\"Jetpack Green 50\",\"value\":\"#008710\",\"_meta\":{\"baseName\":\"Jetpack Green\",\"index\":50}},{\"name\":\"Jetpack Green 60\",\"value\":\"#007117\",\"_meta\":{\"baseName\":\"Jetpack Green\",\"index\":60}},{\"name\":\"Jetpack Green 70\",\"value\":\"#005b18\",\"_meta\":{\"baseName\":\"Jetpack Green\",\"index\":70}},{\"name\":\"Jetpack Green 80\",\"value\":\"#004515\",\"_meta\":{\"baseName\":\"Jetpack Green\",\"index\":80}},{\"name\":\"Jetpack Green 90\",\"value\":\"#003010\",\"_meta\":{\"baseName\":\"Jetpack Green\",\"index\":90}},{\"name\":\"Jetpack Green 100\",\"value\":\"#001c09\",\"_meta\":{\"baseName\":\"Jetpack Green\",\"index\":100}}]]}");

/***/ }),

/***/ "./extensions/sketch/generate-color-library.js":
/*!*****************************************************!*\
  !*** ./extensions/sketch/generate-color-library.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _require = __webpack_require__(/*! sketch */ "sketch"),
  getSelectedDocument = _require.getSelectedDocument;
var _require2 = __webpack_require__(/*! sketch/dom */ "sketch/dom"),
  Artboard = _require2.Artboard,
  Rectangle = _require2.Rectangle,
  Shape = _require2.Shape,
  SharedStyle = _require2.SharedStyle,
  Style = _require2.Style,
  SymbolMaster = _require2.SymbolMaster;
var padStart = __webpack_require__(/*! lodash/padStart */ "./node_modules/lodash/padStart.js");
var PALETTE = __webpack_require__(/*! ../../dist/colors.meta.json */ "./dist/colors.meta.json");
var SWATCH_WIDTH = 48;
var SWATCH_HEIGHT = 48;
var SWATCH_MARGIN = 12;
var SWATCH_INITIAL_X = 0;
var SWATCH_INITIAL_Y = 240;
var cachedArtboards = {};
var cachedSharedStyles = {};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var document = getSelectedDocument();
  var page = document.selectedPage;
  cacheArtboards(page);
  cacheSharedStyles(document);
  PALETTE.colors.forEach(function (colorObjects, rowIndex) {
    var sourceColorObjects = colorObjects.filter(function (colorObject) {
      return !colorObject._meta.alias;
    });
    sourceColorObjects.forEach(function (colorObject, columnIndex) {
      var colorStyle = createColorStyle(document, colorObject);
      createColorSymbol(page, colorObject, colorStyle, rowIndex, columnIndex);
    });
  });
});
function cacheArtboards(parent) {
  parent.layers.forEach(function (artboard) {
    cachedArtboards[artboard.name] = artboard;
  });
}
function cacheSharedStyles(document) {
  document.getSharedLayerStyles().forEach(function (style) {
    cachedSharedStyles[style.name] = style;
  });
}
function createColorStyle(document, colorObject) {
  var name = normalizeColorName(colorObject);
  var style = ensureSharedStyle(document, name);
  style.style = {
    type: Style,
    fills: [{
      color: colorObject.value,
      fillType: Style.FillType.Color
    }]
  };
  return style;
}
function normalizeColorName(colorObject) {
  if (colorObject._meta.special) {
    return colorObject.name;
  }
  var base = colorObject._meta.baseName;
  var index = padStart(colorObject._meta.index, 3, 0);
  return "".concat(base, "/").concat(base, " ").concat(index);
}
function ensureSharedStyle(document, name) {
  return cachedSharedStyles[name] || SharedStyle.fromStyle({
    document: document,
    name: name,
    style: {
      type: Style
    }
  });
}
function createColorSymbol(parent, colorObject, colorStyle) {
  var rowIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var columnIndex = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var name = normalizeColorName(colorObject);
  var x = SWATCH_INITIAL_X + columnIndex * (SWATCH_WIDTH + SWATCH_MARGIN);
  var y = SWATCH_INITIAL_Y + rowIndex * (SWATCH_HEIGHT + SWATCH_MARGIN);
  var colorArtboard = ensureArtboardWith(parent, name, x, y, SWATCH_WIDTH, SWATCH_HEIGHT);
  var colorFill = new Shape({
    parent: empty(colorArtboard),
    name: 'bg',
    frame: new Rectangle(0, 0, SWATCH_WIDTH, SWATCH_HEIGHT),
    sharedStyleId: colorStyle.id,
    locked: true
  });
  colorFill.style.syncWithSharedStyle(colorStyle);
  return SymbolMaster.fromArtboard(colorArtboard);
}
function ensureArtboardWith(parent, name, x, y, width, height) {
  var artboard = cachedArtboards[name] || new Artboard({
    parent: parent,
    name: name
  });
  artboard.frame = new Rectangle(x, y, width, height);
  return artboard;
}
function empty(parent) {
  if (parent.layers.length >= 0) {
    parent.layers.forEach(function (layer) {
      layer.remove();
    });
  }
  return parent;
}

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_asciiSize.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_asciiSize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js");

/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize = baseProperty('length');

module.exports = asciiSize;


/***/ }),

/***/ "./node_modules/lodash/_asciiToArray.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_asciiToArray.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_baseRepeat.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseRepeat.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor;

/**
 * The base implementation of `_.repeat` which doesn't coerce arguments.
 *
 * @private
 * @param {string} string The string to repeat.
 * @param {number} n The number of times to repeat the string.
 * @returns {string} Returns the repeated string.
 */
function baseRepeat(string, n) {
  var result = '';
  if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
    return result;
  }
  // Leverage the exponentiation by squaring algorithm for a faster repeat.
  // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
  do {
    if (n % 2) {
      result += string;
    }
    n = nativeFloor(n / 2);
    if (n) {
      string += string;
    }
  } while (n);

  return result;
}

module.exports = baseRepeat;


/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/lodash/_castSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_castSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(/*! ./_baseSlice */ "./node_modules/lodash/_baseSlice.js");

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),

/***/ "./node_modules/lodash/_createPadding.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createPadding.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRepeat = __webpack_require__(/*! ./_baseRepeat */ "./node_modules/lodash/_baseRepeat.js"),
    baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js"),
    castSlice = __webpack_require__(/*! ./_castSlice */ "./node_modules/lodash/_castSlice.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    stringSize = __webpack_require__(/*! ./_stringSize */ "./node_modules/lodash/_stringSize.js"),
    stringToArray = __webpack_require__(/*! ./_stringToArray */ "./node_modules/lodash/_stringToArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil;

/**
 * Creates the padding for `string` based on `length`. The `chars` string
 * is truncated if the number of characters exceeds `length`.
 *
 * @private
 * @param {number} length The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padding for `string`.
 */
function createPadding(length, chars) {
  chars = chars === undefined ? ' ' : baseToString(chars);

  var charsLength = chars.length;
  if (charsLength < 2) {
    return charsLength ? baseRepeat(chars, length) : chars;
  }
  var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
  return hasUnicode(chars)
    ? castSlice(stringToArray(result), 0, length).join('')
    : result.slice(0, length);
}

module.exports = createPadding;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_hasUnicode.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hasUnicode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_stringSize.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stringSize.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var asciiSize = __webpack_require__(/*! ./_asciiSize */ "./node_modules/lodash/_asciiSize.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    unicodeSize = __webpack_require__(/*! ./_unicodeSize */ "./node_modules/lodash/_unicodeSize.js");

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return hasUnicode(string)
    ? unicodeSize(string)
    : asciiSize(string);
}

module.exports = stringSize;


/***/ }),

/***/ "./node_modules/lodash/_stringToArray.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_stringToArray.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(/*! ./_asciiToArray */ "./node_modules/lodash/_asciiToArray.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    unicodeToArray = __webpack_require__(/*! ./_unicodeToArray */ "./node_modules/lodash/_unicodeToArray.js");

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/lodash/_unicodeSize.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_unicodeSize.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}

module.exports = unicodeSize;


/***/ }),

/***/ "./node_modules/lodash/_unicodeToArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_unicodeToArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/padStart.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/padStart.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createPadding = __webpack_require__(/*! ./_createPadding */ "./node_modules/lodash/_createPadding.js"),
    stringSize = __webpack_require__(/*! ./_stringSize */ "./node_modules/lodash/_stringSize.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Pads `string` on the left side if it's shorter than `length`. Padding
 * characters are truncated if they exceed `length`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * _.padStart('abc', 6);
 * // => '   abc'
 *
 * _.padStart('abc', 6, '_-');
 * // => '_-_abc'
 *
 * _.padStart('abc', 3);
 * // => 'abc'
 */
function padStart(string, length, chars) {
  string = toString(string);
  length = toInteger(length);

  var strLength = length ? stringSize(string) : 0;
  return (length && strLength < length)
    ? (createPadding(length - strLength, chars) + string)
    : string;
}

module.exports = padStart;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ })

/******/ });
    if (key === 'default' && typeof exports === 'function') {
      exports(context);
    } else if (typeof exports[key] !== 'function') {
      throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
    } else {
      exports[key](context);
    }
  } catch (err) {
    if (typeof process !== 'undefined' && process.listenerCount && process.listenerCount('uncaughtException')) {
      process.emit("uncaughtException", err, "uncaughtException");
    } else {
      throw err
    }
  }
}
globalThis['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=__generate-color-library.js.map