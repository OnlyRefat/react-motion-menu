'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLibObjectAssign = require('react/lib/Object.assign');

var _reactLibObjectAssign2 = _interopRequireDefault(_reactLibObjectAssign);

var _reactMotion = require('react-motion');

var Button = (function (_Component) {
  _inherits(Button, _Component);

  function Button(props) {
    _classCallCheck(this, Button);

    _get(Object.getPrototypeOf(Button.prototype), 'constructor', this).call(this, props);
    this.state = { sequence: 0 };
    this.params = [{
      scaleX: (0, _reactMotion.spring)(1, [1500, 10]),
      scaleY: (0, _reactMotion.spring)(1, [1500, 10])
    }, {
      scaleX: (0, _reactMotion.spring)(0.6, [1500, 50]),
      scaleY: (0, _reactMotion.spring)(0.6, [1500, 50])
    }, {
      scaleX: (0, _reactMotion.spring)(1, [1500, 10]),
      scaleY: (0, _reactMotion.spring)(1, [1500, 10])
    }];
  }

  _createClass(Button, [{
    key: 'start',
    value: function start() {
      var _this = this;

      setTimeout(function () {
        return _this.setState({ sequence: 1 });
      }, 100);
      setTimeout(function () {
        return _this.setState({ sequence: 2 });
      }, 150);
    }
  }, {
    key: 'reverse',
    value: function reverse() {
      var _this2 = this;

      this.setState({ sequence: 1 });
      setTimeout(function () {
        return _this2.setState({ sequence: 0 });
      }, 50);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props;
      var x = _props.x;
      var y = _props.y;
      var width = _props.width;
      var height = _props.height;
      var customStyle = _props.customStyle;
      var onClick = _props.onClick;
      var customClass = _props.customClass;

      return _react2['default'].createElement(
        _reactMotion.Motion,
        { style: this.params[this.state.sequence] },
        function (_ref) {
          var scaleX = _ref.scaleX;
          var scaleY = _ref.scaleY;
          return _react2['default'].createElement(
            'div',
            {
              onClick: onClick,
              customClass: customClass,
              style: (0, _reactLibObjectAssign2['default'])({}, customStyle, {
                transform: 'translate3d(' + x + 'px, ' + y + 'px, 0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')',
                WebkitTransform: 'translate3d(' + x + 'px, ' + y + 'px, 0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')',
                position: 'absolute',
                width: width,
                height: height
              }) },
            _this3.props.children
          );
        }
      );
    }
  }]);

  return Button;
})(_react.Component);

exports['default'] = Button;
module.exports = exports['default'];