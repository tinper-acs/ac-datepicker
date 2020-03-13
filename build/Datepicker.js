'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _beeDatepicker = require('bee-datepicker');

var _beeDatepicker2 = _interopRequireDefault(_beeDatepicker);

var _RangePicker = require('./RangePicker');

var _RangePicker2 = _interopRequireDefault(_RangePicker);

var _utils = require('./utils');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _zh_CN = require('bee-datepicker/build/locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _zh_TW = require('bee-datepicker/build/locale/zh_TW');

var _zh_TW2 = _interopRequireDefault(_zh_TW);

var _en_US = require('bee-datepicker/build/locale/en_US');

var _en_US2 = _interopRequireDefault(_en_US);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var YearPicker = _beeDatepicker2["default"].YearPicker,
    MonthPicker = _beeDatepicker2["default"].MonthPicker,
    WeekPicker = _beeDatepicker2["default"].WeekPicker,
    RangePicker = _beeDatepicker2["default"].RangePicker;


var propTypes = {
    localeCookie: PropTypes.string //当前语种的cookie key值
};
var defaultProps = {
    localeCookie: 'locale'
};

var AcDatepicker = function (_Component) {
    _inherits(AcDatepicker, _Component);

    function AcDatepicker() {
        _classCallCheck(this, AcDatepicker);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    AcDatepicker.prototype.render = function render() {
        var localeCookie = this.props.localeCookie;

        var language = _zh_CN2["default"];
        var locale = (0, _utils.getCookie)(localeCookie);
        if (locale == 'zh_TW') {
            _moment2["default"].locale('zh-cn');
            language = _zh_TW2["default"];
        } else if (locale == 'en_US') {
            _moment2["default"].locale('en');
            language = _en_US2["default"];
        } else {
            _moment2["default"].locale('zh-cn');
            language = _zh_CN2["default"];
        }
        return _react2["default"].createElement(_beeDatepicker2["default"], _extends({}, this.props, { dropdownClassName: 'ac-rangepicker', locale: language }));
    };

    return AcDatepicker;
}(_react.Component);

AcDatepicker.AcYearPicker = YearPicker;
AcDatepicker.AcMonthPicker = MonthPicker;
AcDatepicker.AcWeekPicker = WeekPicker;
AcDatepicker.AcRangePicker = _RangePicker2["default"];
AcDatepicker.propTypes = propTypes;
AcDatepicker.defaultProps = defaultProps;
exports["default"] = AcDatepicker;
module.exports = exports['default'];