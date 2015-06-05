'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _2 = require('./');

var _3 = _interopRequireDefault(_2);

var _ = require('lodash');
var should = require('should');
var Promise = (global || window).Promise = require('bluebird');
var __DEV__ = process.env.NODE_ENV !== 'production';
var __PROD__ = !__DEV__;
var __BROWSER__ = typeof window === 'object';
var __NODE__ = !__BROWSER__;
if (__DEV__) {
  Promise.longStackTraces();
  Error.stackTraceLimit = Infinity;
}

var got = _react2['default'].renderToStaticMarkup(_react2['default'].createElement(_3['default'], { id: 'elie@rotenberg.io', type: 'retro', size: 120, className: 'my-identicon' }));
var exp = '<img src="//www.gravatar.com/avatar/5638abedffa9b38c2b1155bf1ef09250?d=retro&amp;f=y&amp;s=120" class="my-identicon">';
console.warn({ got: got, exp: exp });
got.should.be.exactly(exp);