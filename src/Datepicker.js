import React, { Component } from 'react';
import BeeDatepicker from 'bee-datepicker';
import AcRangePicker from './RangePicker';
import { getCookie } from './utils'
import moment from 'moment';
import ZH_CN from 'bee-datepicker/build/locale/zh_CN';
import ZH_TW from 'bee-datepicker/build/locale/zh_TW';
import EN_US from 'bee-datepicker/build/locale/en_US';

const { YearPicker,MonthPicker,WeekPicker,RangePicker } = BeeDatepicker;


const propTypes = {
    localeCookie:PropTypes.string,//当前语种的cookie key值
};
const defaultProps = {
    localeCookie:'locale'
};

class AcDatepicker extends Component {
    render(){
        let { localeCookie } = this.props;
        let language = ZH_CN;
        let locale = getCookie(localeCookie);
        if(locale=='zh_TW'){
            moment.locale('zh-cn');
            language = ZH_TW;
        }else if(locale=='en_US'){
            moment.locale('en');
            language = EN_US;
        }else{
            moment.locale('zh-cn');  
            language = ZH_CN;
        }
        return (<BeeDatepicker {...this.props} locale={language}/>)
    }
}


AcDatepicker.AcYearPicker = YearPicker;
AcDatepicker.AcMonthPicker = MonthPicker;
AcDatepicker.AcWeekPicker = WeekPicker;
AcDatepicker.AcRangePicker = AcRangePicker;
AcDatepicker.propTypes = propTypes;
AcDatepicker.defaultProps = defaultProps;
export default AcDatepicker;