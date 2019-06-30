(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@reach/router"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.to-string"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/web.dom.iterable"), require("crypto"), require("fs"), require("lodash"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["@reach/router", "core-js/modules/es6.array.iterator", "core-js/modules/es6.array.sort", "core-js/modules/es6.function.name", "core-js/modules/es6.map", "core-js/modules/es6.object.assign", "core-js/modules/es6.object.to-string", "core-js/modules/es6.regexp.constructor", "core-js/modules/es6.regexp.split", "core-js/modules/es6.regexp.to-string", "core-js/modules/es6.string.ends-with", "core-js/modules/es6.string.iterator", "core-js/modules/web.dom.iterable", "crypto", "fs", "lodash", "path", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("@reach/router"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.to-string"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/web.dom.iterable"), require("crypto"), require("fs"), require("lodash"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["@reach/router"], root["core-js/modules/es6.array.iterator"], root["core-js/modules/es6.array.sort"], root["core-js/modules/es6.function.name"], root["core-js/modules/es6.map"], root["core-js/modules/es6.object.assign"], root["core-js/modules/es6.object.to-string"], root["core-js/modules/es6.regexp.constructor"], root["core-js/modules/es6.regexp.split"], root["core-js/modules/es6.regexp.to-string"], root["core-js/modules/es6.string.ends-with"], root["core-js/modules/es6.string.iterator"], root["core-js/modules/web.dom.iterable"], root["crypto"], root["fs"], root["lodash"], root["path"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__, __WEBPACK_EXTERNAL_MODULE_crypto__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins = [{
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}, {
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-manifest/gatsby-ssr */ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "name": "gatsby-starter-default",
    "short_name": "starter",
    "start_url": "/",
    "background_color": "#663399",
    "theme_color": "#663399",
    "display": "minimal-ui",
    "icon": "src/assets/images/website-icon.png"
  }
}]; // During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

var apis = __webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js"); // Run the specified API in any plugins that have implemented it


module.exports = function (api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log("This API doesn't exist", api);
  } // Run each plugin in series.
  // eslint-disable-next-line no-undef


  var results = plugins.map(function (plugin) {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    var result = plugin.plugin[api](args, plugin.options);

    if (result && argTransform) {
      args = argTransform({
        args: args,
        result: result
      });
    }

    return result;
  }); // Filter out undefined results.

  results = results.filter(function (result) {
    return typeof result !== "undefined";
  });

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {Object} $0
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */
exports.replaceRenderer = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {Object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * const { Helmet } = require("react-helmet")
 *
 * exports.onRenderBody = (
 *   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
 *   pluginOptions
 * ) => {
 *   const helmet = Helmet.renderStatic()
 *   setHtmlAttributes(helmet.htmlAttributes.toComponent())
 *   setBodyAttributes(helmet.bodyAttributes.toComponent())
 *   setHeadComponents([
 *     helmet.title.toComponent(),
 *     helmet.link.toComponent(),
 *     helmet.meta.toComponent(),
 *     helmet.noscript.toComponent(),
 *     helmet.script.toComponent(),
 *     helmet.style.toComponent(),
 *   ])
 * }
 */

exports.onRenderBody = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {Object} $0
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Object} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */

exports.onPreRenderHTML = true;
/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper component around pages that won't get
 * unmounted on page change. For setting Provider components use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapPageElement)
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @example
 * import React from "react"
 * import Layout from "./src/components/layout"
 *
 * export const wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */

exports.wrapPageElement = true;
/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to setup any Providers component that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapRootElement)
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @example
 * import React from "react"
 * import { Provider } from "react-redux"
 *
 * import createStore from "./src/state/createStore"
 * const store = createStore()
 *
 * export const wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */

exports.wrapRootElement = true;

/***/ }),

/***/ "./.cache/data.json":
/*!**************************!*\
  !*** ./.cache/data.json ***!
  \**************************/
/*! exports provided: pages, dataPaths, default */
/***/ (function(module) {

module.exports = {"pages":[{"componentChunkName":"component---src-pages-index-js","jsonName":"index","path":"/"},{"componentChunkName":"component---src-pages-404-js","jsonName":"404-html-516","path":"/404.html"},{"componentChunkName":"component---src-pages-404-js","jsonName":"404-22d","path":"/404/"},{"componentChunkName":"component---node-modules-gatsby-plugin-offline-app-shell-js","jsonName":"offline-plugin-app-shell-fallback-a30","path":"/offline-plugin-app-shell-fallback/"}],"dataPaths":{"404-22d":"820/path---404-22-d-bce-0SUcWyAf8ecbYDsMhQkEfPzV8","404-html-516":"285/path---404-html-516-62a-0SUcWyAf8ecbYDsMhQkEfPzV8","dev-404-page-5f9":"386/path---dev-404-page-5-f-9-fab-0SUcWyAf8ecbYDsMhQkEfPzV8","index":"140/path---index-6a9-0SUcWyAf8ecbYDsMhQkEfPzV8","offline-plugin-app-shell-fallback-a30":"604/path---offline-plugin-app-shell-fallback-a-30-c5a-BawJvyh36KKFwbrWPg4a4aYuc8"}};

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function HTML(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", props.htmlAttributes, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), props.headComponents), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", props.bodyAttributes, props.preBodyComponents, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("noscript", {
    key: "noscript",
    id: "gatsby-noscript"
  }, "This app works best with JavaScript enabled."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: "body",
    id: "___gatsby",
    dangerouslySetInnerHTML: {
      __html: props.body
    }
  }), props.postBodyComponents));
}
HTML.propTypes = {
  htmlAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  headComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  bodyAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  preBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  postBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, StaticQueryContext, StaticQuery, PageRenderer, useStaticQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticQuery", function() { return useStaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });




var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

var useStaticQuery = function useStaticQuery(query) {
  if (typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext !== "function" && "production" === "development") {
    throw new Error("You're likely using a version of React that doesn't support Hooks\n" + "Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.");
  }

  var context = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);

  if (context[query] && context[query].data) {
    return context[query].data;
  } else {
    throw new Error("The result of this StaticQuery could not be fetched.\n\n" + "This is likely a bug in Gatsby and if refreshing the page does not fix it, " + "please open an issue in https://github.com/gatsbyjs/gatsby/issues");
  }
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away,. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n." + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (false) {} else {
  module.exports = function () {
    return null;
  };
}

/***/ }),

/***/ "./.cache/static-entry.js":
/*!********************************!*\
  !*** ./.cache/static-entry.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.ends-with */ "core-js/modules/es6.string.ends-with");
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "core-js/modules/es6.array.sort");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "core-js/modules/es6.regexp.to-string");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "core-js/modules/es6.regexp.split");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "core-js/modules/es6.regexp.constructor");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "core-js/modules/es6.array.iterator");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "core-js/modules/es6.object.to-string");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "core-js/modules/es6.string.iterator");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.map */ "core-js/modules/es6.map");
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12__);














var React = __webpack_require__(/*! react */ "react");

var fs = __webpack_require__(/*! fs */ "fs");

var _require = __webpack_require__(/*! path */ "path"),
    join = _require.join;

var _require2 = __webpack_require__(/*! react-dom/server */ "react-dom/server"),
    renderToString = _require2.renderToString,
    renderToStaticMarkup = _require2.renderToStaticMarkup;

var _require3 = __webpack_require__(/*! @reach/router */ "@reach/router"),
    ServerLocation = _require3.ServerLocation,
    Router = _require3.Router,
    isRedirect = _require3.isRedirect;

var _require4 = __webpack_require__(/*! lodash */ "lodash"),
    get = _require4.get,
    merge = _require4.merge,
    isObject = _require4.isObject,
    flatten = _require4.flatten,
    uniqBy = _require4.uniqBy;

var apiRunner = __webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");

var syncRequires = __webpack_require__(/*! ./sync-requires */ "./.cache/sync-requires.js");

var _require5 = __webpack_require__(/*! ./data.json */ "./.cache/data.json"),
    dataPaths = _require5.dataPaths,
    pages = _require5.pages;

var _require6 = __webpack_require__(/*! gatsby/package.json */ "./node_modules/gatsby/package.json"),
    gatsbyVersion = _require6.version; // Speed up looking up pages.


var pagesObjectMap = new Map();
pages.forEach(function (p) {
  return pagesObjectMap.set(p.path, p);
});
var stats = JSON.parse(fs.readFileSync(process.cwd() + "/public/webpack.stats.json", "utf-8"));
var chunkMapping = JSON.parse(fs.readFileSync(process.cwd() + "/public/chunk-map.json", "utf-8")); // const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.

var testRequireError = function testRequireError(moduleName, err) {
  var regex = new RegExp("Error: Cannot find module\\s." + moduleName);
  var firstLine = err.toString().split("\n")[0];
  return regex.test(firstLine);
};

var Html;

try {
  Html = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
} catch (err) {
  if (testRequireError("../src/html", err)) {
    Html = __webpack_require__(/*! ./default-html */ "./.cache/default-html.js");
  } else {
    throw err;
  }
}

Html = Html && Html.__esModule ? Html.default : Html;

var getPage = function getPage(path) {
  return pagesObjectMap.get(path);
};

var createElement = React.createElement;

var sanitizeComponents = function sanitizeComponents(components) {
  if (Array.isArray(components)) {
    // remove falsy items
    return components.filter(function (val) {
      return Array.isArray(val) ? val.length > 0 : val;
    });
  } else {
    // we also accept single components, so we need to handle this case as well
    return components ? [components] : [];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function (pagePath, callback) {
  var _postBodyComponents;

  var bodyHtml = "";
  var headComponents = [React.createElement("meta", {
    name: "generator",
    content: "Gatsby " + gatsbyVersion,
    key: "generator-" + gatsbyVersion
  })];
  var htmlAttributes = {};
  var bodyAttributes = {};
  var preBodyComponents = [];
  var postBodyComponents = [];
  var bodyProps = {};

  var replaceBodyHTMLString = function replaceBodyHTMLString(body) {
    bodyHtml = body;
  };

  var setHeadComponents = function setHeadComponents(components) {
    headComponents = headComponents.concat(sanitizeComponents(components));
  };

  var setHtmlAttributes = function setHtmlAttributes(attributes) {
    htmlAttributes = merge(htmlAttributes, attributes);
  };

  var setBodyAttributes = function setBodyAttributes(attributes) {
    bodyAttributes = merge(bodyAttributes, attributes);
  };

  var setPreBodyComponents = function setPreBodyComponents(components) {
    preBodyComponents = preBodyComponents.concat(sanitizeComponents(components));
  };

  var setPostBodyComponents = function setPostBodyComponents(components) {
    postBodyComponents = postBodyComponents.concat(sanitizeComponents(components));
  };

  var setBodyProps = function setBodyProps(props) {
    bodyProps = merge({}, bodyProps, props);
  };

  var getHeadComponents = function getHeadComponents() {
    return headComponents;
  };

  var replaceHeadComponents = function replaceHeadComponents(components) {
    headComponents = sanitizeComponents(components);
  };

  var getPreBodyComponents = function getPreBodyComponents() {
    return preBodyComponents;
  };

  var replacePreBodyComponents = function replacePreBodyComponents(components) {
    preBodyComponents = sanitizeComponents(components);
  };

  var getPostBodyComponents = function getPostBodyComponents() {
    return postBodyComponents;
  };

  var replacePostBodyComponents = function replacePostBodyComponents(components) {
    postBodyComponents = sanitizeComponents(components);
  };

  var page = getPage(pagePath);
  var dataAndContext = {};

  if (page.jsonName in dataPaths) {
    var pathToJsonData = join(process.cwd(), "/public/static/d", dataPaths[page.jsonName] + ".json");

    try {
      dataAndContext = JSON.parse(fs.readFileSync(pathToJsonData));
    } catch (e) {
      console.log("error", pathToJsonData, e);
      process.exit();
    }
  }

  var RouteHandler =
  /*#__PURE__*/
  function (_React$Component) {
    _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default()(RouteHandler, _React$Component);

    function RouteHandler() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = RouteHandler.prototype;

    _proto.render = function render() {
      var props = Object.assign({}, this.props, dataAndContext, {
        pathContext: dataAndContext.pageContext
      });
      var pageElement = createElement(syncRequires.components[page.componentChunkName], props);
      var wrappedPage = apiRunner("wrapPageElement", {
        element: pageElement,
        props: props
      }, pageElement, function (_ref) {
        var result = _ref.result;
        return {
          element: result,
          props: props
        };
      }).pop();
      return wrappedPage;
    };

    return RouteHandler;
  }(React.Component);

  var routerElement = createElement(ServerLocation, {
    url: "" + "" + pagePath
  }, createElement(Router, {
    baseuri: "" + ""
  }, createElement(RouteHandler, {
    path: "/*"
  })));
  var bodyComponent = apiRunner("wrapRootElement", {
    element: routerElement,
    pathname: pagePath
  }, routerElement, function (_ref2) {
    var result = _ref2.result;
    return {
      element: result,
      pathname: pagePath
    };
  }).pop(); // Let the site or plugin render the page component.

  apiRunner("replaceRenderer", {
    bodyComponent: bodyComponent,
    replaceBodyHTMLString: replaceBodyHTMLString,
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    pathPrefix: ""
  }); // If no one stepped up, we'll handle it.

  if (!bodyHtml) {
    try {
      bodyHtml = renderToString(bodyComponent);
    } catch (e) {
      // ignore @reach/router redirect errors
      if (!isRedirect(e)) throw e;
    }
  } // Create paths to scripts


  var scriptsAndStyles = flatten(["app", page.componentChunkName].map(function (s) {
    var fetchKey = "assetsByChunkName[" + s + "]";
    var chunks = get(stats, fetchKey);
    var namedChunkGroups = get(stats, "namedChunkGroups");

    if (!chunks) {
      return null;
    }

    chunks = chunks.map(function (chunk) {
      if (chunk === "/") {
        return null;
      }

      return {
        rel: "preload",
        name: chunk
      };
    });
    namedChunkGroups[s].assets.forEach(function (asset) {
      return chunks.push({
        rel: "preload",
        name: asset
      });
    });
    var childAssets = namedChunkGroups[s].childAssets;

    var _loop = function _loop(rel) {
      chunks = merge(chunks, childAssets[rel].map(function (chunk) {
        return {
          rel: rel,
          name: chunk
        };
      }));
    };

    for (var rel in childAssets) {
      _loop(rel);
    }

    return chunks;
  })).filter(function (s) {
    return isObject(s);
  }).sort(function (s1, s2) {
    return s1.rel == "preload" ? -1 : 1;
  }); // given priority to preload

  scriptsAndStyles = uniqBy(scriptsAndStyles, function (item) {
    return item.name;
  });
  var scripts = scriptsAndStyles.filter(function (script) {
    return script.name && script.name.endsWith(".js");
  });
  var styles = scriptsAndStyles.filter(function (style) {
    return style.name && style.name.endsWith(".css");
  });
  apiRunner("onRenderBody", {
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    bodyHtml: bodyHtml,
    scripts: scripts,
    styles: styles,
    pathPrefix: ""
  });
  scripts.slice(0).reverse().forEach(function (script) {
    // Add preload/prefetch <link>s for scripts.
    headComponents.push(React.createElement("link", {
      as: "script",
      rel: script.rel,
      key: script.name,
      href: "" + "/" + script.name
    }));
  });

  if (page.jsonName in dataPaths) {
    var dataPath = "" + "/static/d/" + dataPaths[page.jsonName] + ".json";
    headComponents.push(React.createElement("link", {
      as: "fetch",
      rel: "preload",
      key: dataPath,
      href: dataPath,
      crossOrigin: "use-credentials"
    }));
  }

  styles.slice(0).reverse().forEach(function (style) {
    // Add <link>s for styles that should be prefetched
    // otherwise, inline as a <style> tag
    if (style.rel === "prefetch") {
      headComponents.push(React.createElement("link", {
        as: "style",
        rel: style.rel,
        key: style.name,
        href: "" + "/" + style.name
      }));
    } else {
      headComponents.unshift(React.createElement("style", {
        "data-href": "" + "/" + style.name,
        dangerouslySetInnerHTML: {
          __html: fs.readFileSync(join(process.cwd(), "public", style.name), "utf-8")
        }
      }));
    }
  }); // Add page metadata for the current page

  var windowData = "/*<![CDATA[*/window.page=" + JSON.stringify(page) + ";" + (page.jsonName in dataPaths ? "window.dataPath=\"" + dataPaths[page.jsonName] + "\";" : "") + "/*]]>*/";
  postBodyComponents.push(React.createElement("script", {
    key: "script-loader",
    id: "gatsby-script-loader",
    dangerouslySetInnerHTML: {
      __html: windowData
    }
  })); // Add chunk mapping metadata

  var scriptChunkMapping = "/*<![CDATA[*/window.___chunkMapping=" + JSON.stringify(chunkMapping) + ";/*]]>*/";
  postBodyComponents.push(React.createElement("script", {
    key: "chunk-mapping",
    id: "gatsby-chunk-mapping",
    dangerouslySetInnerHTML: {
      __html: scriptChunkMapping
    }
  })); // Filter out prefetched bundles as adding them as a script tag
  // would force high priority fetching.

  var bodyScripts = scripts.filter(function (s) {
    return s.rel !== "prefetch";
  }).map(function (s) {
    var scriptPath = "" + "/" + JSON.stringify(s.name).slice(1, -1);
    return React.createElement("script", {
      key: scriptPath,
      src: scriptPath,
      async: true
    });
  });

  (_postBodyComponents = postBodyComponents).push.apply(_postBodyComponents, bodyScripts);

  apiRunner("onPreRenderHTML", {
    getHeadComponents: getHeadComponents,
    replaceHeadComponents: replaceHeadComponents,
    getPreBodyComponents: getPreBodyComponents,
    replacePreBodyComponents: replacePreBodyComponents,
    getPostBodyComponents: getPostBodyComponents,
    replacePostBodyComponents: replacePostBodyComponents,
    pathname: pagePath,
    pathPrefix: ""
  });
  var html = "<!DOCTYPE html>" + renderToStaticMarkup(React.createElement(Html, Object.assign({}, bodyProps, {
    headComponents: headComponents,
    htmlAttributes: htmlAttributes,
    bodyAttributes: bodyAttributes,
    preBodyComponents: preBodyComponents,
    postBodyComponents: postBodyComponents,
    body: bodyHtml,
    path: pagePath
  })));
  callback(null, html);
});

/***/ }),

/***/ "./.cache/sync-requires.js":
/*!*********************************!*\
  !*** ./.cache/sync-requires.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js"),
    hot = _require.hot; // prefer default export if available


var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(__webpack_require__(/*! ./node_modules/gatsby-plugin-offline/app-shell.js */ "./node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/404.js */ "./src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js")))
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

var _parsePath = __webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");

exports.parsePath = _parsePath.parsePath;

/*global __PATH_PREFIX__ */
function withPrefix(path) {
  return normalizePath("" + "/" + path);
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object,
  partiallyActive: _propTypes.default.bool // Set up IntersectionObserver

};

var handleIntersection = function handleIntersection(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
};

var GatsbyLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "defaultGetProps", function (_ref) {
      var isPartiallyCurrent = _ref.isPartiallyCurrent,
          isCurrent = _ref.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && this.props.innerRef.hasOwnProperty("current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      handleIntersection(ref, function () {
        ___loader.enqueue((0, _parsePath.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace"]);
    var LOCAL_URL = /^\/(?!\/)/;

    if (false) {}

    var prefixedTo = withPrefix(to);
    return _react.default.createElement(_router.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        ___loader.hovering((0, _parsePath.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault(); // Make sure the necessary scripts and data are
          // loaded before continuing.

          navigate(to, {
            state: state,
            replace: replace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool
});

var _default = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(GatsbyLink, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(withPrefix(to), options);
};

exports.navigate = navigate;

var push = function push(to) {
  console.warn("The \"push\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___push(withPrefix(to));
};

exports.push = push;

var replace = function replace(to) {
  console.warn("The \"replace\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___replace(withPrefix(to));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  console.warn("The \"navigateTo\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),

/***/ "./node_modules/gatsby-link/parse-path.js":
/*!************************************************!*\
  !*** ./node_modules/gatsby-link/parse-path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/common.js":
/*!*******************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/common.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _fs = _interopRequireDefault(__webpack_require__(/*! fs */ "fs"));

var _path = _interopRequireDefault(__webpack_require__(/*! path */ "path"));

var _crypto = _interopRequireDefault(__webpack_require__(/*! crypto */ "crypto"));

// default icons for generating icons
exports.defaultIcons = [{
  src: "icons/icon-48x48.png",
  sizes: "48x48",
  type: "image/png"
}, {
  src: "icons/icon-72x72.png",
  sizes: "72x72",
  type: "image/png"
}, {
  src: "icons/icon-96x96.png",
  sizes: "96x96",
  type: "image/png"
}, {
  src: "icons/icon-144x144.png",
  sizes: "144x144",
  type: "image/png"
}, {
  src: "icons/icon-192x192.png",
  sizes: "192x192",
  type: "image/png"
}, {
  src: "icons/icon-256x256.png",
  sizes: "256x256",
  type: "image/png"
}, {
  src: "icons/icon-384x384.png",
  sizes: "384x384",
  type: "image/png"
}, {
  src: "icons/icon-512x512.png",
  sizes: "512x512",
  type: "image/png"
}];
/**
 * Check if the icon exists on the filesystem
 *
 * @param {String} srcIcon Path of the icon
 */

exports.doesIconExist = function doesIconExist(srcIcon) {
  try {
    return _fs.default.statSync(srcIcon).isFile();
  } catch (e) {
    if (e.code !== "ENOENT") {
      throw e;
    }

    return false;
  }
};

exports.createContentDigest = function createContentDigest(content) {
  var digest = _crypto.default.createHash("sha1").update(content).digest("hex");

  return digest;
};
/**
 * @param {string} path The generic path to an icon
 * @param {string} digest The digest of the icon provided in the plugin's options.
 */


exports.addDigestToPath = function (path, digest, method) {
  if (method === "name") {
    var parsedPath = _path.default.parse(path);

    return parsedPath.dir + "/" + parsedPath.name + "-" + digest + parsedPath.ext;
  }

  if (method === "query") {
    return path + "?v=" + digest;
  }

  return path;
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js":
/*!***********************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/gatsby-ssr.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

var _common = __webpack_require__(/*! ./common.js */ "./node_modules/gatsby-plugin-manifest/common.js");

var _fs = _interopRequireDefault(__webpack_require__(/*! fs */ "fs"));

var iconDigest = null;

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;
  // We use this to build a final array to pass as the argument to setHeadComponents at the end of onRenderBody.
  var headComponents = [];
  var icons = pluginOptions.icons || _common.defaultIcons;
  var legacy = typeof pluginOptions.legacy !== "undefined" ? pluginOptions.legacy : true;
  var cacheBusting = typeof pluginOptions.cache_busting_mode !== "undefined" ? pluginOptions.cache_busting_mode : "query"; // If icons were generated, also add a favicon link.

  if (pluginOptions.icon) {
    var favicon = icons && icons.length ? icons[0].src : null;

    if (cacheBusting !== "none") {
      iconDigest = (0, _common.createContentDigest)(_fs.default.readFileSync(pluginOptions.icon));
    }

    var insertFaviconLinkTag = typeof pluginOptions.include_favicon !== "undefined" ? pluginOptions.include_favicon : true;

    if (favicon && insertFaviconLinkTag) {
      headComponents.push(_react.default.createElement("link", {
        key: "gatsby-plugin-manifest-icon-link",
        rel: "shortcut icon",
        href: (0, _gatsby.withPrefix)((0, _common.addDigestToPath)(favicon, iconDigest, cacheBusting))
      }));
    }
  } // Add manifest link tag.


  headComponents.push(_react.default.createElement("link", {
    key: "gatsby-plugin-manifest-link",
    rel: "manifest",
    href: (0, _gatsby.withPrefix)("/manifest.webmanifest"),
    crossOrigin: pluginOptions.crossOrigin
  })); // The user has an option to opt out of the theme_color meta tag being inserted into the head.

  if (pluginOptions.theme_color) {
    var insertMetaTag = typeof pluginOptions.theme_color_in_head !== "undefined" ? pluginOptions.theme_color_in_head : true;

    if (insertMetaTag) {
      headComponents.push(_react.default.createElement("meta", {
        key: "gatsby-plugin-manifest-meta",
        name: "theme-color",
        content: pluginOptions.theme_color
      }));
    }
  }

  if (legacy) {
    var iconLinkTags = icons.map(function (icon) {
      return _react.default.createElement("link", {
        key: "gatsby-plugin-manifest-apple-touch-icon-" + icon.sizes,
        rel: "apple-touch-icon",
        sizes: icon.sizes,
        href: (0, _gatsby.withPrefix)((0, _common.addDigestToPath)(icon.src, iconDigest, cacheBusting))
      });
    });
    headComponents = headComponents.concat(iconLinkTags);
  }

  setHeadComponents(headComponents);
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-offline/app-shell.js":
/*!*********************************************************!*\
  !*** ./node_modules/gatsby-plugin-offline/app-shell.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var AppShell =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(AppShell, _React$Component);

  function AppShell() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AppShell.prototype;

  _proto.render = function render() {
    return _react.default.createElement(_react.default.Fragment, null);
  };

  return AppShell;
}(_react.default.Component);

var _default = AppShell;
exports.default = _default;

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.onRenderBody = void 0;

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var onRenderBody = function onRenderBody(_ref) {
  var setHeadComponents = _ref.setHeadComponents,
      setHtmlAttributes = _ref.setHtmlAttributes,
      setBodyAttributes = _ref.setBodyAttributes;

  var helmet = _reactHelmet.Helmet.renderStatic(); // These action functions were added partway through the Gatsby 1.x cycle.


  if (setHtmlAttributes) {
    setHtmlAttributes(helmet.htmlAttributes.toComponent());
  }

  if (setBodyAttributes) {
    setBodyAttributes(helmet.bodyAttributes.toComponent());
  }

  setHeadComponents([helmet.title.toComponent(), helmet.link.toComponent(), helmet.meta.toComponent(), helmet.noscript.toComponent(), helmet.script.toComponent(), helmet.style.toComponent()]);
};

exports.onRenderBody = onRenderBody;

/***/ }),

/***/ "./node_modules/gatsby/package.json":
/*!******************************************!*\
  !*** ./node_modules/gatsby/package.json ***!
  \******************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bin, bugs, bundleDependencies, dependencies, deprecated, description, devDependencies, engines, files, gitHead, homepage, keywords, license, main, module, name, peerDependencies, repository, resolutions, scripts, types, version, yargs, default */
/***/ (function(module) {

module.exports = {"_from":"gatsby@2.3.12","_id":"gatsby@2.3.12","_inBundle":false,"_integrity":"sha512-bHqlP0qP8AZt/W6nBE+N9YVgG/BYTlmVt5HgY2uqq5rj3Y9JKRuyUjtGxyxfM4Q5cpKIOfDJ7wBqdTWxjNiSkw==","_location":"/gatsby","_phantomChildren":{"@babel/code-frame":"7.0.0","@babel/runtime":"7.4.3","address":"1.0.3","bluebird":"3.5.4","common-tags":"1.8.0","convert-hrtime":"2.0.0","core-js":"2.6.5","cross-spawn":"5.1.0","decamelize":"1.2.0","envinfo":"5.12.1","fs-exists-cached":"1.0.0","gatsby-telemetry":"1.0.4","get-caller-file":"1.0.3","get-stream":"3.0.0","graceful-fs":"4.2.0","hosted-git-info":"2.7.1","is-stream":"1.1.0","jsonfile":"4.0.0","lodash":"4.17.11","map-age-cleaner":"0.1.3","meant":"1.0.1","nice-try":"1.0.5","npm-run-path":"2.0.2","opentracing":"0.14.3","p-finally":"1.0.0","p-is-promise":"2.1.0","path-exists":"3.0.0","path-key":"2.0.1","pretty-error":"2.1.1","pump":"3.0.0","require-directory":"2.1.1","require-main-filename":"1.0.1","resolve-cwd":"2.0.0","semver":"5.7.0","set-blocking":"2.0.0","shebang-command":"1.2.0","signal-exit":"3.0.2","source-map":"0.5.7","stack-trace":"0.0.10","string-width":"2.1.1","strip-eof":"1.0.0","universalify":"0.1.2","update-notifier":"2.5.0","uuid":"3.3.2","which":"1.3.1","which-module":"2.0.0","wrap-ansi":"2.1.0","y18n":"3.2.1","yurnalist":"1.0.5"},"_requested":{"type":"version","registry":true,"raw":"gatsby@2.3.12","name":"gatsby","escapedName":"gatsby","rawSpec":"2.3.12","saveSpec":null,"fetchSpec":"2.3.12"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/gatsby/-/gatsby-2.3.12.tgz","_shasum":"22f1eda449723b4afb3c12ca379fa17d9b19e300","_spec":"gatsby@2.3.12","_where":"/Users/alidemirci/Desktop/aff-charge-poc/gatsby-starter-photon","author":{"name":"Kyle Mathews","email":"mathews.kyle@gmail.com"},"bin":{"gatsby":"./dist/bin/gatsby.js"},"bugs":{"url":"https://github.com/gatsbyjs/gatsby/issues"},"bundleDependencies":false,"dependencies":{"@babel/code-frame":"^7.0.0","@babel/core":"^7.0.0","@babel/parser":"^7.0.0","@babel/polyfill":"^7.0.0","@babel/runtime":"^7.0.0","@babel/traverse":"^7.0.0","@gatsbyjs/relay-compiler":"2.0.0-printer-fix.2","@mikaelkristiansson/domready":"^1.0.9","@pieh/friendly-errors-webpack-plugin":"1.7.0-chalk-2","@reach/router":"^1.1.1","@stefanprobst/lokijs":"^1.5.6-b","address":"1.0.3","autoprefixer":"^9.4.3","babel-core":"7.0.0-bridge.0","babel-eslint":"^9.0.0","babel-loader":"^8.0.0","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-dynamic-import-node":"^1.2.0","babel-plugin-remove-graphql-queries":"^2.6.3","babel-preset-gatsby":"^0.1.11","better-opn":"0.1.4","better-queue":"^3.8.6","bluebird":"^3.5.0","browserslist":"3.2.8","cache-manager":"^2.9.0","cache-manager-fs-hash":"^0.0.6","chalk":"^2.3.2","chokidar":"2.1.2","common-tags":"^1.4.0","compression":"^1.7.3","convert-hrtime":"^2.0.0","copyfiles":"^1.2.0","core-js":"^2.5.0","css-loader":"^1.0.0","debug":"^3.1.0","del":"^3.0.0","detect-port":"^1.2.1","devcert-san":"^0.3.3","dotenv":"^4.0.0","eslint":"^5.6.0","eslint-config-react-app":"^3.0.0","eslint-loader":"^2.1.0","eslint-plugin-flowtype":"^2.46.1","eslint-plugin-graphql":"^2.0.0","eslint-plugin-import":"^2.9.0","eslint-plugin-jsx-a11y":"^6.0.3","eslint-plugin-react":"^7.8.2","event-source-polyfill":"^1.0.5","express":"^4.16.3","express-graphql":"^0.6.12","fast-levenshtein":"~2.0.4","file-loader":"^1.1.11","flat":"^4.0.0","fs-exists-cached":"1.0.0","fs-extra":"^5.0.0","gatsby-cli":"^2.5.4","gatsby-link":"^2.0.16","gatsby-plugin-page-creator":"^2.0.12","gatsby-react-router-scroll":"^2.0.7","gatsby-telemetry":"^1.0.4","glob":"^7.1.1","graphql":"^14.1.1","graphql-compose":"^6.0.3","graphql-playground-middleware-express":"^1.7.10","graphql-relay":"^0.6.0","graphql-tools":"^3.0.4","hash-mod":"^0.0.5","invariant":"^2.2.4","is-relative":"^1.0.0","is-relative-url":"^2.0.0","is-wsl":"^1.1.0","jest-worker":"^23.2.0","joi":"12.x.x","json-loader":"^0.5.7","json-stringify-safe":"^5.0.1","kebab-hash":"^0.1.2","lodash":"^4.17.10","md5":"^2.2.1","md5-file":"^3.1.1","mime":"^2.2.0","mini-css-extract-plugin":"^0.4.0","mitt":"^1.1.2","mkdirp":"^0.5.1","moment":"^2.21.0","name-all-modules-plugin":"^1.0.1","normalize-path":"^2.1.1","null-loader":"^0.1.1","opentracing":"^0.14.3","optimize-css-assets-webpack-plugin":"^5.0.1","parseurl":"^1.3.2","physical-cpu-count":"^2.0.0","pnp-webpack-plugin":"^1.4.1","postcss-flexbugs-fixes":"^3.0.0","postcss-loader":"^2.1.3","prop-types":"^15.6.1","raw-loader":"^0.5.1","react-dev-utils":"^4.2.1","react-error-overlay":"^3.0.0","react-hot-loader":"^4.6.2","redux":"^4.0.0","request":"^2.85.0","semver":"^5.6.0","shallow-compare":"^1.2.2","sift":"^5.1.0","signal-exit":"^3.0.2","slash":"^1.0.0","socket.io":"^2.0.3","stack-trace":"^0.0.10","string-similarity":"^1.2.0","style-loader":"^0.21.0","terser-webpack-plugin":"^1.2.2","true-case-path":"^1.0.3","type-of":"^2.0.1","url-loader":"^1.0.1","util.promisify":"^1.0.0","uuid":"^3.1.0","v8-compile-cache":"^1.1.0","webpack":"~4.28.4","webpack-dev-middleware":"^3.0.1","webpack-dev-server":"^3.1.14","webpack-hot-middleware":"^2.21.0","webpack-merge":"^4.1.0","webpack-stats-plugin":"^0.1.5","xstate":"^4.3.2","yaml-loader":"^0.5.0"},"deprecated":false,"description":"Blazing fast modern site generator for React","devDependencies":{"@babel/cli":"^7.0.0","@babel/runtime":"^7.0.0","babel-preset-gatsby-package":"^0.1.4","cross-env":"^5.1.4","rimraf":"^2.6.1"},"engines":{"node":">=6.0.0"},"files":["cache-dir","dist","graphql.js","index.d.ts"],"gitHead":"8ee6c8ddbccd41f76d8203a2e8f9d975056f2fcb","homepage":"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme","keywords":["blog","generator","jekyll","markdown","react","ssg","website"],"license":"MIT","main":"cache-dir/commonjs/gatsby-browser-entry.js","module":"cache-dir/gatsby-browser-entry.js","name":"gatsby","peerDependencies":{"react":"^16.4.2","react-dom":"^16.4.2"},"repository":{"type":"git","url":"git+https://github.com/gatsbyjs/gatsby.git"},"resolutions":{"graphql":"^14.1.1"},"scripts":{"build":"npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs","build:cjs":"babel cache-dir --out-dir cache-dir/commonjs --ignore **/__tests__","build:internal-plugins":"copyfiles -u 1 src/internal-plugins/**/package.json dist","build:rawfiles":"copyfiles -u 1 src/internal-plugins/**/raw_* dist","build:src":"babel src --out-dir dist --source-maps --ignore **/gatsby-cli.js,**/raw_*,**/__tests__","clean-test-bundles":"find test/ -type f -name bundle.js* -exec rm -rf {} +","prebuild":"rimraf dist && rimraf cache-dir/commonjs","prepare":"cross-env NODE_ENV=production npm run build","watch":"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch"},"types":"index.d.ts","version":"2.3.12","yargs":{"boolean-negation":false}};

/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var parent, cache, hot; } else {
  // prod mode
  exports.hot = function(a) {
    return a
  }
}


/***/ }),

/***/ "./src/assets/images/pic01.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/pic01.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABBAAD/4QNvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OUVCMUVDNzZCMkJGRTQxMTgzMURBRTUwQTdBOTIwNzIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTQ5Mjk2OTFDMTAyMTFFNDlGMUFGNDUwQUQxRjM4RjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTQ5Mjk2OTBDMTAyMTFFNDlGMUFGNDUwQUQxRjM4RjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozOTczQTZBQTAxQzFFNDExQjU5RUI4ODkxRjczNTA2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RUIxRUM3NkIyQkZFNDExODMxREFFNTBBN0E5MjA3MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6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"

/***/ }),

/***/ "./src/assets/images/pic02.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/pic02.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABBAAD/4QNvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OUVCMUVDNzZCMkJGRTQxMTgzMURBRTUwQTdBOTIwNzIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTRDRTE4RUZDMTAyMTFFNDlGMUFGNDUwQUQxRjM4RjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTRDRTE4RUVDMTAyMTFFNDlGMUFGNDUwQUQxRjM4RjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozOTczQTZBQTAxQzFFNDExQjU5RUI4ODkxRjczNTA2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RUIxRUM3NkIyQkZFNDExODMxREFFNTBBN0E5MjA3MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6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"

/***/ }),

/***/ "./src/assets/images/pic03.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/pic03.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABBAAD/4QNvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OUVCMUVDNzZCMkJGRTQxMTgzMURBRTUwQTdBOTIwNzIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTRDRTE4RjNDMTAyMTFFNDlGMUFGNDUwQUQxRjM4RjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTRDRTE4RjJDMTAyMTFFNDlGMUFGNDUwQUQxRjM4RjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozOTczQTZBQTAxQzFFNDExQjU5RUI4ODkxRjczNTA2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RUIxRUM3NkIyQkZFNDExODMxREFFNTBBN0E5MjA3MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6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"

/***/ }),

/***/ "./src/assets/images/pic04.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/pic04.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABBAAD/4QNvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OUVCMUVDNzZCMkJGRTQxMTgzMURBRTUwQTdBOTIwNzIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTRDRTE4RjdDMTAyMTFFNDlGMUFGNDUwQUQxRjM4RjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTRDRTE4RjZDMTAyMTFFNDlGMUFGNDUwQUQxRjM4RjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozOTczQTZBQTAxQzFFNDExQjU5RUI4ODkxRjczNTA2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RUIxRUM3NkIyQkZFNDExODMxREFFNTBBN0E5MjA3MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6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"

/***/ }),

/***/ "./src/assets/scss/main.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Footer =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Footer, _React$Component);

  function Footer() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Footer.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      id: "footer"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "copyright"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, " As an Amazon Associate I earn from qualifying purchases."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Design: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "http://html5up.net"
    }, "HTML5 UP"))));
  };

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Header =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Header, _React$Component);

  function Header() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Header.prototype;

  _proto.render = function render() {
    return (// <section id="header">
      //     <div className="inner">
      //         <span className="icon major fa-cloud"></span>
      //         <h1>Hi, I'm <strong>Photon</strong>, another fine<br />
      //         little freebie from <a href="http://html5up.net">HTML5 UP</a>.</h1>
      //         <p>Accumsan feugiat mi commodo erat lorem ipsum, sed magna<br />
      //         lobortis feugiat sapien sed etiam volutpat accumsan.</p>
      //         <ul className="actions">
      //             <li><a href="#one" className="button scrolly">Discover</a></li>
      //         </ul>
      //     </div>
      // </section>
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        id: "header"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "inner"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "icon major fa-cloud"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Want to charge your phone faster?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "actions"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#one",
        className: "button scrolly"
      }, "Discover how")))))
    );
  };

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/scss/main.scss */ "./src/assets/scss/main.scss");
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.js");






var Template =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Template, _React$Component);

  function Template(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      loading: 'is-loading'
    };
    return _this;
  }

  var _proto = Template.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.timeoutId = setTimeout(function () {
      _this2.setState({
        loading: ''
      });
    }, 100);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  };

  _proto.render = function render() {
    var children = this.props.children;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "body " + this.state.loading
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  };

  return Template;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Template);

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");



var NotFoundPage = function NotFoundPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "NOT FOUND"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You just hit a route that doesn't exist... the sadness."));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFoundPage);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _assets_images_pic01_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/pic01.jpg */ "./src/assets/images/pic01.jpg");
/* harmony import */ var _assets_images_pic01_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_pic01_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_pic02_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/pic02.jpg */ "./src/assets/images/pic02.jpg");
/* harmony import */ var _assets_images_pic02_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_pic02_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_pic03_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/pic03.jpg */ "./src/assets/images/pic03.jpg");
/* harmony import */ var _assets_images_pic03_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_pic03_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_pic04_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/pic04.jpg */ "./src/assets/images/pic04.jpg");
/* harmony import */ var _assets_images_pic04_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_pic04_jpg__WEBPACK_IMPORTED_MODULE_7__);









var Homepage =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Homepage, _React$Component);

  function Homepage() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Homepage.prototype;

  _proto.render = function render() {
    var siteTitle = "Gatsby Starter - Photon";
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, {
      title: siteTitle
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      id: "one",
      className: "main style1"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "grid-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-6"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "major"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Apple doesn't have what you need for fast charging out of the box")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "If you have an Iphone 8 or later, your phone is capable of an 18W power draw speed to charge it's battery - And the basic charger that came out of the box only maxes out delivery at 5W."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Thats a huge difference."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-3"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "icon style2 major fa-battery-empty fa-2x"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "icon style2 major fa-battery-quarter fa-2x"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-3"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "icon style2 major fa-battery-half fa-2x"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "icon style2 major fa-battery-full fa-2x"
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      id: "two",
      className: "main style2"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "grid-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-6"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "major-icons"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "icon style2 major fa-bolt"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "icon style2 major fa-bolt"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "icon style2 major fa-bolt"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "icon style2 major fa-bolt"
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-6",
      align: "center"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "major"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      bold: true
    }, "What do you need to fast charge your phone? Two things!")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      class: "icon major fa-plug"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "a USB-C to Lightning cable"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      class: "icon major fa-square"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "and a suitabe Power adapter")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      id: "three",
      className: "main style1 special"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "grid-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-12"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "major"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("u", null, "Step 1")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Cable")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "You will need a lightning cable with a Type C specification")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-4"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "icon style2 major fa-apple fa-2x"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Apple Lightning to USB-C Cable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "actions"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://www.amazon.com/dp/B07CMN7DCX",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "button"
    }, "Read More")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-4"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "icon style2 major fa-bell fa-2x"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Belkin Boost Charge Cable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "actions"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://www.amazon.com/dp/B07P9ZDM5N",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "button"
    }, "Read More")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-4"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "icon style2 major fa-anchor fa-2x"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Anker USB C to Lightning Cable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "actions"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://www.amazon.com/dp/B07H27J698",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "button"
    }, "Read More"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      id: "four",
      className: "main style1 special"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "grid-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-12"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "major"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("u", null, "Step 2")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Power adapter")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "You will need a wall charger capable of at least an 18 watt power draw")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-4"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "icon style2 major fa-apple fa-2x"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Apple 18W USB-C Power Adapter"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "actions"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://www.amazon.com/dp/B07L6TTC1T",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "button"
    }, "Read More")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-4"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "icon style2 major fa-anchor fa-2x"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Anker 30W USB-C Power Adapter"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "actions"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://www.amazon.com/dp/B06Y427WT7",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "button"
    }, "Read More")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-4"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "icon style2 major fa-key fa-2x"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Aukey 27W USB-C Power Adapter"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "actions"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://www.amazon.com/dp/B071H2JGJ6",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "button"
    }, "Read More")))))));
  };

  return Homepage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ }),

/***/ "@reach/router":
/*!********************************!*\
  !*** external "@reach/router" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "core-js/modules/es6.array.iterator":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__;

/***/ }),

/***/ "core-js/modules/es6.array.sort":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.array.sort" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__;

/***/ }),

/***/ "core-js/modules/es6.function.name":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.function.name" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__;

/***/ }),

/***/ "core-js/modules/es6.map":
/*!******************************************!*\
  !*** external "core-js/modules/es6.map" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__;

/***/ }),

/***/ "core-js/modules/es6.object.assign":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.object.assign" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__;

/***/ }),

/***/ "core-js/modules/es6.object.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.object.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_to_string__;

/***/ }),

/***/ "core-js/modules/es6.regexp.constructor":
/*!*********************************************************!*\
  !*** external "core-js/modules/es6.regexp.constructor" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__;

/***/ }),

/***/ "core-js/modules/es6.regexp.split":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.regexp.split" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__;

/***/ }),

/***/ "core-js/modules/es6.regexp.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.regexp.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__;

/***/ }),

/***/ "core-js/modules/es6.string.ends-with":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.string.ends-with" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__;

/***/ }),

/***/ "core-js/modules/es6.string.iterator":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.string.iterator" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__;

/***/ }),

/***/ "core-js/modules/web.dom.iterable":
/*!***************************************************!*\
  !*** external "core-js/modules/web.dom.iterable" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_crypto__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map