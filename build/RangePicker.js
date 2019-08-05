'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _beeDatepicker = require('bee-datepicker');

var _beeDatepicker2 = _interopRequireDefault(_beeDatepicker);

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

_moment2["default"].locale('zh-cn');

var RangePicker = _beeDatepicker2["default"].RangePicker;


var locale = {
    'yesterday': '昨日',
    'today': '今日',
    'tomorrow': '明日',
    'lastMonth': '上月',
    'thisMonth': '本月',
    'nextMonth': '下月',
    'lastWeek': '上周',
    'thisWeek': '本周',
    'nextWeek': '下周',
    'lastQuarter': '上季',
    'thisQuarter': '本季',
    'nextQuarter': '下季',
    'lastYear': '去年',
    'thisYear': '今年',
    'nextYear': '明年',
    'lastDayOfMonth': '本月最后一天',
    'lastDayOfWeek': '本周最后一天',
    'lastDayOfLastMonth': '上月最后一天'
};

var propTypes = {
    value: _propTypes2["default"].value,
    defaultValue: _propTypes2["default"].defaultValue,
    footerLocale: _propTypes2["default"].object,
    footerClassName: _propTypes2["default"].string
};
var defaultProps = {
    footerLocale: locale,
    footerClassName: 'ac-rangepicker-footer'
};
function formatDate(value, format) {
    if (!value) {
        return '';
    }

    if (Array.isArray(format)) {
        format = format[0];
    }

    return value.format(format);
}

var AcRangePicker = function (_Component) {
    _inherits(AcRangePicker, _Component);

    function AcRangePicker(props) {
        _classCallCheck(this, AcRangePicker);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.getBtns = function () {
            var footerLocale = _this.props.footerLocale;
            return [{ key: 'yesterday', name: footerLocale['yesterday'], active: false, value: (0, _moment2["default"])().subtract(1, 'd') }, { key: 'today', name: footerLocale['today'], active: false, value: (0, _moment2["default"])() }, { key: 'tomorrow', name: footerLocale['tomorrow'], active: false, value: (0, _moment2["default"])().add(1, 'd') }, { key: 'lastMonth', name: footerLocale['lastMonth'], active: false, value: (0, _moment2["default"])().subtract(1, 'M') }, { key: 'thisMonth', name: footerLocale['thisMonth'], active: false, value: (0, _moment2["default"])().startOf('M') }, { key: 'nextMonth', name: footerLocale['nextMonth'], active: false, value: (0, _moment2["default"])().add(1, 'M') }, { key: 'lastWeek', name: footerLocale['lastWeek'], active: false, value: (0, _moment2["default"])().subtract(1, 'w') }, { key: 'thisWeek', name: footerLocale['thisWeek'], active: false, value: (0, _moment2["default"])().startOf('w') }, { key: 'nextWeek', name: footerLocale['nextWeek'], active: false, value: (0, _moment2["default"])().add(1, 'w') }, { key: 'lastQuarter', name: footerLocale['lastQuarter'], active: false, value: (0, _moment2["default"])().subtract(1, 'Q') }, { key: 'thisQuarter', name: footerLocale['thisQuarter'], active: false, value: (0, _moment2["default"])().startOf('Q') }, { key: 'nextQuarter', name: footerLocale['nextQuarter'], active: false, value: (0, _moment2["default"])().add(1, 'Q') }, { key: 'lastYear', name: footerLocale['lastYear'], active: false, value: (0, _moment2["default"])().subtract(1, 'y') }, { key: 'thisYear', name: footerLocale['thisYear'], active: false, value: (0, _moment2["default"])().startOf('y') }, { key: 'nextYear', name: footerLocale['nextYear'], active: false, value: (0, _moment2["default"])().add(1, 'y') }, { key: 'lastDayOfMonth', name: footerLocale['lastDayOfMonth'], active: false, value: (0, _moment2["default"])().endOf("m") }, { key: 'lastDayOfWeek', name: footerLocale['lastDayOfWeek'], active: false, value: (0, _moment2["default"])().endOf("w") }, { key: 'lastDayOfLastMonth', name: footerLocale['lastDayOfLastMonth'], active: false, value: (0, _moment2["default"])().subtract(1, 'M').endOf("M") }];
        };

        _this.btnClick = function (item, index) {
            var _this$state = _this.state,
                btns = _this$state.btns,
                value = _this$state.value;

            var length = value.length;
            var formatStr = _this.props.format || 'YYYY-MM-DD';
            if (length == 0) {
                value.push(item.value);
                btns[index].active = true;
                _this.setState({
                    value: value,
                    btns: btns
                });
            } else if (length == 1) {
                value.push(item.value);
                btns[index].active = true;
                _this.props.onChange && _this.props.onChange(value, '["' + formatDate(value[0], formatStr) + '" , "' + formatDate(value[1], formatStr) + '"]');
                _this.setState({
                    value: value,
                    btns: btns,
                    open: false
                });
            } else {
                return;
            }
        };

        _this.onOpenChange = function (open) {
            _this.setState({
                open: open
            });
        };

        _this.clear = function () {
            console.log('clear');
            var btns = _this.state.btns;

            btns.forEach(function (element) {
                element.active = false;
            });
            _this.setState({
                value: [],
                btns: btns
            });
        };

        _this.onChange = function (value) {
            _this.setState({
                value: value
            });
            var formatStr = _this.props.format || 'YYYY-MM-DD';
            _this.props.onChange && _this.props.onChange(value, '["' + formatDate(value[0], formatStr) + '" , "' + formatDate(value[1], formatStr) + '"]');
        };

        _this.renderFooter = function () {
            var _this$props = _this.props,
                footerClassName = _this$props.footerClassName,
                renderFooter = _this$props.renderFooter;
            var btns = _this.state.btns;

            return _react2["default"].createElement(
                'div',
                { className: footerClassName },
                btns.map(function (item, index) {
                    var clss = footerClassName + '-btn';
                    if (item.active) clss += ' selected';
                    return _react2["default"].createElement(
                        'span',
                        { className: clss, onClick: function onClick() {
                                _this.btnClick(item, index);
                            } },
                        item.name
                    );
                }),
                renderFooter ? renderFooter() : '',
                _react2["default"].createElement(
                    'span',
                    { className: footerClassName + '-btn-clear', onClick: _this.clear },
                    _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-clean' })
                )
            );
        };

        _this.state = {
            value: props.value || props.defaultValue || [],
            btns: _this.getBtns(),
            open: false
        };
        return _this;
    }

    AcRangePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ("value" in nextProps) {
            this.setState({
                value: nextProps.value
            });
        }
    };

    AcRangePicker.prototype.render = function render() {
        var _props$value = this.props.value,
            value = _props$value === undefined ? [] : _props$value;

        return _react2["default"].createElement(RangePicker, _extends({}, this.props, {
            open: this.state.open,
            onOpenChange: this.onOpenChange,
            onChange: this.onChange,
            value: this.state.value,
            className: 'ac-rangepicker',
            renderFooter: this.renderFooter,
            showToday: false }));
    };

    return AcRangePicker;
}(_react.Component);

AcRangePicker.displayName = 'acRangepicker';


AcRangePicker.propTypes = propTypes;
AcRangePicker.defaultProps = defaultProps;
exports["default"] = AcRangePicker;
module.exports = exports['default'];