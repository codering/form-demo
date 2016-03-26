'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('node_modules/react/react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('node_modules/react-dom/index');

var _reactDom2 = _interopRequireDefault(_reactDom);

'';

var _antdLibForm = require('node_modules/antd/lib/form/index');

var _antdLibForm2 = _interopRequireDefault(_antdLibForm);

var _antdLibInput = require('node_modules/antd/lib/input/index');

var _antdLibInput2 = _interopRequireDefault(_antdLibInput);

var FormItem = _antdLibForm2['default'].Item;

var Reports = (function (_React$Component) {
  _inherits(Reports, _React$Component);

  function Reports(props) {
    _classCallCheck(this, Reports);

    _get(Object.getPrototypeOf(Reports.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Reports, [{
    key: 'render',
    value: function render() {
      var _props$form = this.props.form;
      var getFieldProps = _props$form.getFieldProps;
      var getFieldError = _props$form.getFieldError;
      var isFieldValidating = _props$form.isFieldValidating;

      var emailProps = getFieldProps('email', {
        //validateFirst: true,
        validate: [{
          rules: [{ required: true, message: '必须填写邮箱地址' }],
          trigger: 'onBlur'
        }, {
          rules: [{ type: 'email', message: '请输入正确的邮箱地址' }],
          trigger: ['onBlur', 'onChange']
        }]
      });

      return _react2['default'].createElement(
        'div',
        { style: { width: 200 } },
        _react2['default'].createElement(
          _antdLibForm2['default'],
          { horizontal: true, form: this.props.form },
          _react2['default'].createElement(
            FormItem,
            { label: '邮箱：' },
            _react2['default'].createElement(_antdLibInput2['default'], _extends({}, emailProps, { placeholder: '请输入邮箱' }))
          )
        )
      );
    }
  }]);

  return Reports;
})(_react2['default'].Component);

var Demo = _antdLibForm2['default'].create()(Reports);

_reactDom2['default'].render(_react2['default'].createElement(Demo, null), document.getElementById('app'));