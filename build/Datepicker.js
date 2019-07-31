'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _beeDatepicker = require('bee-datepicker');

var _beeDatepicker2 = _interopRequireDefault(_beeDatepicker);

var _RangePicker = require('./RangePicker');

var _RangePicker2 = _interopRequireDefault(_RangePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var YearPicker = _beeDatepicker2["default"].YearPicker,
    MonthPicker = _beeDatepicker2["default"].MonthPicker,
    WeekPicker = _beeDatepicker2["default"].WeekPicker,
    RangePicker = _beeDatepicker2["default"].RangePicker;


var propTypes = {};
var defaultProps = {};

var AcDatepicker = function (_Component) {
    _inherits(AcDatepicker, _Component);

    function AcDatepicker() {
        _classCallCheck(this, AcDatepicker);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    AcDatepicker.prototype.render = function render() {
        return _react2["default"].createElement(_beeDatepicker2["default"], this.props);
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