import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BeeDatepicker from 'bee-datepicker';
import Icon from 'bee-icon';
import moment from 'moment';
import i18n from './i18n';
import ZH_CN from 'bee-datepicker/build/locale/zh_CN';
import ZH_TW from 'bee-datepicker/build/locale/zh_TW';
import EN_US from 'bee-datepicker/build/locale/en_US';
import { getCookie } from './utils'


const { RangePicker } = BeeDatepicker;

const propTypes = {
    value:PropTypes.value,
    defaultValue:PropTypes.defaultValue,
    footerLocale:PropTypes.object,
    footerClassName:PropTypes.string,
    localeCookie:PropTypes.string,//当前语种的cookie key值
};
const defaultProps = {
    footerClassName:'ac-rangepicker-footer',
    localeCookie:'locale'
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

class AcRangePicker extends Component{
    constructor(props){
        super(props);
        this.state={
            value:props.value || props.defaultValue || [],
            btns:this.getBtns(),
            open:false
        }
    }
    static displayName = 'acRangepicker';
    getBtns=()=>{
        let { localeCookie } = this.props;
        let footerLocale=i18n;
        if(getCookie(localeCookie)=='zh_TW')footerLocale=i18n.zh_TW;
        if(getCookie(localeCookie)=='en_US')footerLocale=i18n.en_US;
        return [
            {key:'yesterday',name:footerLocale['yesterday'],active:false,value:moment().subtract(1,'d')},
            {key:'today',name:footerLocale['today'],active:false,value:moment()},
            {key:'tomorrow',name:footerLocale['tomorrow'],active:false,value:moment().add(1,'d')},
            {key:'lastMonth',name:footerLocale['lastMonth'],active:false,value:moment().subtract(1,'M')},
            {key:'thisMonth',name:footerLocale['thisMonth'],active:false,value:moment().startOf('M')},
            {key:'nextMonth',name:footerLocale['nextMonth'],active:false,value:moment().add(1,'M')},
            {key:'lastWeek',name:footerLocale['lastWeek'],active:false,value:moment().subtract(1,'w')},
            {key:'thisWeek',name:footerLocale['thisWeek'],active:false,value:moment().startOf('w')},
            {key:'nextWeek',name:footerLocale['nextWeek'],active:false,value:moment().add(1,'w')},
            {key:'lastQuarter',name:footerLocale['lastQuarter'],active:false,value:moment().startOf('Q').subtract(1,'Q')},
            {key:'thisQuarter',name:footerLocale['thisQuarter'],active:false,value:moment().startOf('Q')},
            {key:'nextQuarter',name:footerLocale['nextQuarter'],active:false,value:moment().startOf('Q').add(1,'Q')},
            {key:'lastYear',name:footerLocale['lastYear'],active:false,value:moment().subtract(1,'y')},
            {key:'thisYear',name:footerLocale['thisYear'],active:false,value:moment().startOf('y')},
            {key:'nextYear',name:footerLocale['nextYear'],active:false,value:moment().add(1,'y')},
            {key:'lastDayOfMonth',name:footerLocale['lastDayOfMonth'],active:false,value:moment().endOf("m")},
            {key:'lastDayOfWeek',name:footerLocale['lastDayOfWeek'],active:false,value:moment().endOf("w")},
            {key:'lastDayOfLastMonth',name:footerLocale['lastDayOfLastMonth'],active:false,value:moment().subtract(1,'M').endOf("M")},
        ]
    }

    componentWillReceiveProps(nextProps){
        if ("value" in nextProps) {
            let value = nextProps.value
            if(value.length==0){
                let { btns } = this.state;
                btns.forEach(element => {
                    element.active=false;
                });
                this.setState({
                    value,
                    btns
                });
            }else{
                this.setState({
                    value
                });
            }
            
        }
    }

    btnClick=(item,index)=>{
        let { btns, value} = this.state;
        let length = value.length;
        let formatStr = this.props.format || 'YYYY-MM-DD';
        if(length==0){
            value.push(item.value);
            btns[index].active=true;
            this.setState({
                value,
                btns
            })
        }else if(length==1){
            if(item.value.isBefore(value[0])){
                value.unshift(item.value);
            }else{
                value.push(item.value);
            }
            
            btns[index].active=true;
            this.props.onChange&&this.props.onChange(value,`["${formatDate(value[0],formatStr)}" , "${formatDate(value[1],formatStr)}"]`)
            this.setState({
                value,
                btns,
                open:false
            })
        }else{
            return;
        }
        
    }
    onOpenChange=(open)=>{
        this.setState({
            open
        })
    }
    clear=()=>{
        let { btns } = this.state;
        btns.forEach(element => {
            element.active=false;
        });
        this.setState({
            value:[],
            btns
        })
    }
    onChange=(value)=>{
        this.setState({
            value
        })
        let formatStr = this.props.format || 'YYYY-MM-DD';
        this.props.onChange&&this.props.onChange(value,`["${formatDate(value[0],formatStr)}" , "${formatDate(value[1],formatStr)}"]`)
    }

    renderFooter=()=>{
        let { footerClassName,renderFooter } = this.props;
        let { btns } = this.state;
        return (
            <div className={footerClassName}>
                {
                    btns.map((item,index)=>{
                        let clss = `${footerClassName}-btn`;
                        if(item.active)clss+=' selected';
                        return (<span className={clss} onClick={()=>{this.btnClick(item,index)}}>{item.name}</span>)
                    })
                }
                {renderFooter?renderFooter():''}
                <span className={`${footerClassName}-btn-clear`} onClick={this.clear}>
                    <Icon type='uf-clean'/>
                </span>

            </div>
        )
    }
    
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
        return (<RangePicker  
            {...this.props} 
            locale={language}
            open={this.state.open} 
            onOpenChange={this.onOpenChange} 
            onChange={this.onChange}
            value={this.state.value}
            className='ac-rangepicker' 
            renderFooter={this.renderFooter} 
            showToday={false} />)
    }
}

AcRangePicker.propTypes = propTypes;
AcRangePicker.defaultProps = defaultProps;
export default AcRangePicker;