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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/app.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/app.jsx":
/*!************************!*\
  !*** ./client/app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/shannonconnolly/Downloads/Repos/budgetHackathon/client/app.jsx: Unexpected token (50:1)\\n\\n\\u001b[0m \\u001b[90m 48 | \\u001b[39m      \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"app\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 49 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mp\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"title\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33mB\\u001b[39m \\u001b[33mU\\u001b[39m \\u001b[33mD\\u001b[39m \\u001b[33mG\\u001b[39m \\u001b[33mE\\u001b[39m \\u001b[33mT\\u001b[39m \\u001b[33mA\\u001b[39m \\u001b[33mP\\u001b[39m \\u001b[33mP\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mp\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 50 | \\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<\\u001b[39m \\u001b[33mHEAD\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 51 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"input-income\\\"\\u001b[39m\\u001b[33m>\\u001b[39m{\\u001b[90m/* <IncomeInput /> */\\u001b[39m}\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 52 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"input-transaction\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33mTransactionInput\\u001b[39m handleSubmit\\u001b[33m=\\u001b[39m{\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mhandleSubmit}\\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 53 | \\u001b[39m\\u001b[33m===\\u001b[39m\\u001b[33m===\\u001b[39m\\u001b[33m=\\u001b[39m\\u001b[0m\\n    at Object._raise (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:746:17)\\n    at Object.raiseWithData (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:739:17)\\n    at Object.raise (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:733:17)\\n    at Object.unexpected (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:8807:16)\\n    at Object.jsxParseIdentifier (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:4412:12)\\n    at Object.jsxParseNamespacedName (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:4422:23)\\n    at Object.jsxParseElementName (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:4433:21)\\n    at Object.jsxParseOpeningElementAt (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:4519:22)\\n    at Object.jsxParseElementAt (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:4552:33)\\n    at Object.jsxParseElementAt (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:4568:32)\\n    at Object.jsxParseElement (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:4626:17)\\n    at Object.parseExprAtom (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:4633:19)\\n    at Object.parseExprSubscripts (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:9656:23)\\n    at Object.parseMaybeUnary (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:9636:21)\\n    at Object.parseExprOps (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:9506:23)\\n    at Object.parseMaybeConditional (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:9479:23)\\n    at Object.parseMaybeAssign (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:9434:21)\\n    at Object.parseParenAndDistinguishExpression (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:10267:28)\\n    at Object.parseExprAtom (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:10007:21)\\n    at Object.parseExprAtom (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:4638:20)\\n    at Object.parseExprSubscripts (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:9656:23)\\n    at Object.parseMaybeUnary (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:9636:21)\\n    at Object.parseExprOps (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:9506:23)\\n    at Object.parseMaybeConditional (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:9479:23)\\n    at Object.parseMaybeAssign (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:9434:21)\\n    at Object.parseExpression (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:9386:23)\\n    at Object.parseReturnStatement (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:11523:28)\\n    at Object.parseStatementContent (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:11204:21)\\n    at Object.parseStatement (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:11156:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/shannonconnolly/Downloads/Repos/budgetHackathon/node_modules/@babel/parser/lib/index.js:11731:25)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvYXBwLmpzeC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/app.jsx\n");

/***/ })

/******/ });