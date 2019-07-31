import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BeeDatepicker from 'bee-datepicker';
import AcRangePicker from './RangePicker';

const { YearPicker,MonthPicker,WeekPicker,RangePicker } = BeeDatepicker;


const propTypes = {};
const defaultProps = {};

class AcDatepicker extends Component {
    render(){
        return (<BeeDatepicker {...this.props}/>)
    }
}


AcDatepicker.AcYearPicker = YearPicker;
AcDatepicker.AcMonthPicker = MonthPicker;
AcDatepicker.AcWeekPicker = WeekPicker;
AcDatepicker.AcRangePicker = AcRangePicker;
AcDatepicker.propTypes = propTypes;
AcDatepicker.defaultProps = defaultProps;
export default AcDatepicker;