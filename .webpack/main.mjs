/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

// NAMESPACE OBJECT: ./src/lib/math.ts
var math_namespaceObject = {};
__webpack_require__.r(math_namespaceObject);
__webpack_require__.d(math_namespaceObject, {
  doSubtraction: () => (doSubtraction),
  doSum: () => (doSum)
});

;// CONCATENATED MODULE: external "aws-sdk"
const external_aws_sdk_namespaceObject = require("aws-sdk");
var external_aws_sdk_default = /*#__PURE__*/__webpack_require__.n(external_aws_sdk_namespaceObject);
;// CONCATENATED MODULE: external "aws-sdk/clients/dynamodb"
const dynamodb_namespaceObject = require("aws-sdk/clients/dynamodb");
;// CONCATENATED MODULE: ./src/lib/aws/dynamo.ts

var dynamo = new dynamodb_namespaceObject.DocumentClient({});

;// CONCATENATED MODULE: external "aws-sdk/clients/s3"
const s3_namespaceObject = require("aws-sdk/clients/s3");
var s3_default = /*#__PURE__*/__webpack_require__.n(s3_namespaceObject);
;// CONCATENATED MODULE: ./src/lib/aws/s3.ts

var s3 = new (s3_default())({});

;// CONCATENATED MODULE: ./src/lib/aws/index.ts



var configuredClients = function(region) {
    external_aws_sdk_default().config.update({
        region: region
    });
    return {
        s3: s3,
        dynamodb: dynamo
    };
};

;// CONCATENATED MODULE: external "lodash"
const external_lodash_namespaceObject = require("lodash");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_namespaceObject);
;// CONCATENATED MODULE: ./src/lib/math.ts

var doSum = function(a, b) {
    return external_lodash_default().add(a, b);
};
var doSubtraction = function(a, b) {
    return external_lodash_default().subtract(a, b);
};

;// CONCATENATED MODULE: ./src/context.ts


var createContext = function() {
    var _aws_configuredClients = configuredClients("us-east-1"), s3 = _aws_configuredClients.s3, dynamodb = _aws_configuredClients.dynamodb;
    return {
        s3: s3,
        dynamodb: dynamodb,
        math: math_namespaceObject
    };
};

;// CONCATENATED MODULE: ./src/entry.ts

var _createContext = createContext(), dynamodb = _createContext.dynamodb, entry_s3 = _createContext.s3, math = _createContext.math;
math.doSubtraction(2, 1);
math.doSum(1, 2);
dynamodb.get({
    Key: {},
    TableName: ""
});

