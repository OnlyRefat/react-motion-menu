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

var Item = (function (_Component) {
  _inherits(Item, _Component);

  function Item(props) {
    _classCallCheck(this, Item);

    _get(Object.getPrototypeOf(Item.prototype), 'constructor', this).call(this, props);
    this.state = { sequence: 0 };
    var _props = this.props;
    var x = _props.x;
    var y = _props.y;
    var direction = _props.direction;
    var distance = _props.distance;

    if (direction !== 'vertical' && direction !== 'horizontal') return console.error("not support this direction!!");
    this.params = direction === 'vertical' ? [{
      scaleX: (0, _reactMotion.spring)(0, [1500, 100]),
      scaleY: (0, _reactMotion.spring)(0, [1500, 100]),
      x: x,
      y: (0, _reactMotion.spring)(y, [1500, 50])
    }, {
      scaleX: (0, _reactMotion.spring)(0.7, [1500, 150]),
      scaleY: (0, _reactMotion.spring)(1.6, [1500, 150]),
      x: x,
      y: (0, _reactMotion.spring)(y + distance, [1500, 100])
    }, {
      scaleX: (0, _reactMotion.spring)(1, [1500, 18]),
      scaleY: (0, _reactMotion.spring)(1, [1500, 18]),
      x: x,
      y: (0, _reactMotion.spring)(y + distance, [1500, 100])
    }] : [{
      scaleX: (0, _reactMotion.spring)(0, [1500, 100]),
      scaleY: (0, _reactMotion.spring)(0, [1500, 100]),
      x: (0, _reactMotion.spring)(x, [1500, 50]),
      y: y
    }, {
      scaleX: (0, _reactMotion.spring)(1.6, [1500, 150]),
      scaleY: (0, _reactMotion.spring)(0.7, [1500, 150]),
      x: (0, _reactMotion.spring)(x + distance, [1500, 100]),
      y: y
    }, {
      scaleX: (0, _reactMotion.spring)(1, [1500, 18]),
      scaleY: (0, _reactMotion.spring)(1, [1500, 18]),
      x: (0, _reactMotion.spring)(x + distance, [1500, 100]),
      y: y
    }];
  }

  _createClass(Item, [{
    key: 'start',
    value: function start() {
      var _this = this;

      setTimeout(function () {
        _this.setState({ sequence: 1 });
      }, 60);

      setTimeout(function () {
        _this.setState({ sequence: 2 });
        if (_this.props.onOpenAnimationEnd) _this.props.onOpenAnimationEnd(_this.props.name);
      }, 80);
    }
  }, {
    key: 'reverse',
    value: function reverse() {
      var _this2 = this;

      setTimeout(function () {
        if (_this2.props.onCloseAnimationEnd) _this2.props.onCloseAnimationEnd(_this2.props.name);
      }, 80);
      this.setState({ sequence: 0 });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props;
      var width = _props2.width;
      var height = _props2.height;
      var customStyle = _props2.customStyle;
      var onClick = _props2.onClick;
      var customClass = _props2.customClass;
      var children = _props2.children;

      return _react2['default'].createElement(
        _reactMotion.Motion,
        { style: this.params[this.state.sequence] },
        function (_ref) {
          var scaleX = _ref.scaleX;
          var scaleY = _ref.scaleY;
          var x = _ref.x;
          var y = _ref.y;
          return _react2['default'].createElement(
            'div',
            { customClass: customClass,
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

  return Item;
})(_react.Component);

exports['default'] = Item;
module.exports = exports['default'];