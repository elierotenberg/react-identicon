'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pureRenderDecorator = require('pure-render-decorator');

var _pureRenderDecorator2 = _interopRequireDefault(_pureRenderDecorator);

var _MD5 = require('MD5');

var _MD52 = _interopRequireDefault(_MD5);

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

var _default = (function (_React$Component) {
  var _class = function _default() {
    _classCallCheck(this, _class2);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  };

  _inherits(_class, _React$Component);

  var _class2 = _class;

  _createClass(_class2, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var id = _props.id;
      var type = _props.type;
      var size = _props.size;

      var otherProps = _objectWithoutProperties(_props, ['id', 'type', 'size']);

      return _react2['default'].createElement('img', _extends({ src: '//www.gravatar.com/avatar/' + (0, _MD52['default'])(id) + '?d=' + type + '&f=y&s=' + size }, otherProps));
    }
  }], [{
    key: 'displayName',
    value: 'Identicon',
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      id: _react2['default'].PropTypes.any,
      type: _react2['default'].PropTypes.string,
      size: _react2['default'].PropTypes.number
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      id: '',
      type: 'identicon',
      size: 80
    },
    enumerable: true
  }]);

  _class = (0, _pureRenderDecorator2['default'])(_class) || _class;
  return _class;
})(_react2['default'].Component);

exports['default'] = _default;
module.exports = exports['default'];