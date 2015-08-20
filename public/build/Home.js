webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(7);
	__webpack_require__(9);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./grids.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./grids.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/*!\nPure v0.6.0\nCopyright 2014 Yahoo! Inc. All rights reserved.\nLicensed under the BSD License.\nhttps://github.com/yahoo/pure/blob/master/LICENSE.md\n*/\n/*csslint regex-selectors:false, known-properties:false, duplicate-properties:false*/\n\n.pure-g {\n    letter-spacing: -0.31em; /* Webkit: collapse white-space between units */\n    *letter-spacing: normal; /* reset IE < 8 */\n    *word-spacing: -0.43em; /* IE < 8: collapse white-space between units */\n    text-rendering: optimizespeed; /* Webkit: fixes text-rendering: optimizeLegibility */\n\n    /*\n    Sets the font stack to fonts known to work properly with the above letter\n    and word spacings. See: https://github.com/yahoo/pure/issues/41/\n\n    The following font stack makes Pure Grids work on all known environments.\n\n    * FreeSans: Ships with many Linux distros, including Ubuntu\n\n    * Arimo: Ships with Chrome OS. Arimo has to be defined before Helvetica and\n      Arial to get picked up by the browser, even though neither is available\n      in Chrome OS.\n\n    * Droid Sans: Ships with all versions of Android.\n\n    * Helvetica, Arial, sans-serif: Common font stack on OS X and Windows.\n    */\n    font-family: FreeSans, Arimo, \"Droid Sans\", Helvetica, Arial, sans-serif;\n\n    /*\n    Use flexbox when possible to avoid `letter-spacing` side-effects.\n\n    NOTE: Firefox (as of 25) does not currently support flex-wrap, so the\n    `-moz-` prefix version is omitted.\n    */\n\n    display: -webkit-flex;\n    -webkit-flex-flow: row wrap;\n\n    /* IE10 uses display: flexbox */\n    display: -ms-flexbox;\n    -ms-flex-flow: row wrap;\n    \n    /* Prevents distributing space between rows */\n    -ms-align-content: flex-start;\n\t-webkit-align-content: flex-start;\n\talign-content: flex-start;\n}\n\n/* Opera as of 12 on Windows needs word-spacing.\n   The \".opera-only\" selector is used to prevent actual prefocus styling\n   and is not required in markup.\n*/\n.opera-only :-o-prefocus,\n.pure-g {\n    word-spacing: -0.43em;\n}\n\n.pure-u {\n    display: inline-block;\n    *display: inline; /* IE < 8: fake inline-block */\n    zoom: 1;\n    letter-spacing: normal;\n    word-spacing: normal;\n    vertical-align: top;\n    text-rendering: auto;\n}\n\n/*\nResets the font family back to the OS/browser's default sans-serif font,\nthis the same font stack that Normalize.css sets for the `body`.\n*/\n.pure-g [class *= \"pure-u\"] {\n    font-family: sans-serif;\n}\n\n.pure-u-1,\n.pure-u-1-1,\n.pure-u-1-2,\n.pure-u-1-3,\n.pure-u-2-3,\n.pure-u-1-4,\n.pure-u-3-4,\n.pure-u-1-5,\n.pure-u-2-5,\n.pure-u-3-5,\n.pure-u-4-5,\n.pure-u-5-5,\n.pure-u-1-6,\n.pure-u-5-6,\n.pure-u-1-8,\n.pure-u-3-8,\n.pure-u-5-8,\n.pure-u-7-8,\n.pure-u-1-12,\n.pure-u-5-12,\n.pure-u-7-12,\n.pure-u-11-12,\n.pure-u-1-24,\n.pure-u-2-24,\n.pure-u-3-24,\n.pure-u-4-24,\n.pure-u-5-24,\n.pure-u-6-24,\n.pure-u-7-24,\n.pure-u-8-24,\n.pure-u-9-24,\n.pure-u-10-24,\n.pure-u-11-24,\n.pure-u-12-24,\n.pure-u-13-24,\n.pure-u-14-24,\n.pure-u-15-24,\n.pure-u-16-24,\n.pure-u-17-24,\n.pure-u-18-24,\n.pure-u-19-24,\n.pure-u-20-24,\n.pure-u-21-24,\n.pure-u-22-24,\n.pure-u-23-24,\n.pure-u-24-24 {\n    display: inline-block;\n    *display: inline;\n    zoom: 1;\n    letter-spacing: normal;\n    word-spacing: normal;\n    vertical-align: top;\n    text-rendering: auto;\n}\n\n.pure-u-1-24 {\n    width: 4.1667%;\n    *width: 4.1357%;\n}\n\n.pure-u-1-12,\n.pure-u-2-24 {\n    width: 8.3333%;\n    *width: 8.3023%;\n}\n\n.pure-u-1-8,\n.pure-u-3-24 {\n    width: 12.5000%;\n    *width: 12.4690%;\n}\n\n.pure-u-1-6,\n.pure-u-4-24 {\n    width: 16.6667%;\n    *width: 16.6357%;\n}\n\n.pure-u-1-5 {\n    width: 20%;\n    *width: 19.9690%;\n}\n\n.pure-u-5-24 {\n    width: 20.8333%;\n    *width: 20.8023%;\n}\n\n.pure-u-1-4,\n.pure-u-6-24 {\n    width: 25%;\n    *width: 24.9690%;\n}\n\n.pure-u-7-24 {\n    width: 29.1667%;\n    *width: 29.1357%;\n}\n\n.pure-u-1-3,\n.pure-u-8-24 {\n    width: 33.3333%;\n    *width: 33.3023%;\n}\n\n.pure-u-3-8,\n.pure-u-9-24 {\n    width: 37.5000%;\n    *width: 37.4690%;\n}\n\n.pure-u-2-5 {\n    width: 40%;\n    *width: 39.9690%;\n}\n\n.pure-u-5-12,\n.pure-u-10-24 {\n    width: 41.6667%;\n    *width: 41.6357%;\n}\n\n.pure-u-11-24 {\n    width: 45.8333%;\n    *width: 45.8023%;\n}\n\n.pure-u-1-2,\n.pure-u-12-24 {\n    width: 50%;\n    *width: 49.9690%;\n}\n\n.pure-u-13-24 {\n    width: 54.1667%;\n    *width: 54.1357%;\n}\n\n.pure-u-7-12,\n.pure-u-14-24 {\n    width: 58.3333%;\n    *width: 58.3023%;\n}\n\n.pure-u-3-5 {\n    width: 60%;\n    *width: 59.9690%;\n}\n\n.pure-u-5-8,\n.pure-u-15-24 {\n    width: 62.5000%;\n    *width: 62.4690%;\n}\n\n.pure-u-2-3,\n.pure-u-16-24 {\n    width: 66.6667%;\n    *width: 66.6357%;\n}\n\n.pure-u-17-24 {\n    width: 70.8333%;\n    *width: 70.8023%;\n}\n\n.pure-u-3-4,\n.pure-u-18-24 {\n    width: 75%;\n    *width: 74.9690%;\n}\n\n.pure-u-19-24 {\n    width: 79.1667%;\n    *width: 79.1357%;\n}\n\n.pure-u-4-5 {\n    width: 80%;\n    *width: 79.9690%;\n}\n\n.pure-u-5-6,\n.pure-u-20-24 {\n    width: 83.3333%;\n    *width: 83.3023%;\n}\n\n.pure-u-7-8,\n.pure-u-21-24 {\n    width: 87.5000%;\n    *width: 87.4690%;\n}\n\n.pure-u-11-12,\n.pure-u-22-24 {\n    width: 91.6667%;\n    *width: 91.6357%;\n}\n\n.pure-u-23-24 {\n    width: 95.8333%;\n    *width: 95.8023%;\n}\n\n.pure-u-1,\n.pure-u-1-1,\n.pure-u-5-5,\n.pure-u-24-24 {\n    width: 100%;\n}", ""]);

	// exports


/***/ },
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./home.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./home.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "p {\n  text-align: center; }\n\n#screen {\n  height: 500px;\n  background-image: url(" + __webpack_require__(11) + ");\n  background-size: cover; }\n  #screen #landing {\n    color: #fff;\n    position: absolute;\n    font-weight: bold;\n    top: 128px;\n    text-align: center;\n    width: 100%; }\n    #screen #landing .main {\n      font-size: 5em; }\n    #screen #landing .sub {\n      font-size: 1.2em; }\n  #screen #live {\n    width: 640px;\n    height: 360px;\n    margin: 0 auto;\n    background-color: #000;\n    position: relative;\n    top: 256px; }\n\n#programs {\n  width: 960px;\n  margin: 0 auto;\n  margin-top: 280px; }\n  #programs .program {\n    margin-bottom: 78px; }\n    #programs .program .title .main {\n      display: inline-block;\n      font-size: 1.8em; }\n    #programs .program .title .sub {\n      display: inline-block;\n      margin-left: 12px;\n      font-size: 1.2em;\n      color: #a6a6a8; }\n    #programs .program .items .item {\n      padding: 12px;\n      padding-left: 0;\n      box-sizing: border-box; }\n      #programs .program .items .item .video {\n        width: 296px;\n        height: 156px;\n        margin-bottom: 8px;\n        background-color: #000; }\n      #programs .program .items .item a.name {\n        text-decoration: none;\n        display: block;\n        color: #000;\n        font-size: .9em;\n        transition: color 0.2s; }\n        #programs .program .items .item a.name:hover {\n          color: #26977F; }\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9789f58b171cb70fbfb38392d1f92845.png"

/***/ }
]);