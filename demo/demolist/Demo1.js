/**
*
* @title 这是标题
* @description 这是描述
*
*/
import React, { Component } from 'react';
import AcDatepicker from '../../src';
import moment from 'moment';



const { AcYearPicker,AcMonthPicker,AcWeekPicker,AcRangePicker } = AcDatepicker;


const format = "YYYY-MM-DD dddd"

class Demo1 extends Component {
    onSelect = (d, dataString)  => {
        console.log('select')
        console.log(d, dataString);
    }
    onClick = d => {
        console.log('click')
    }
    onChange = (d, dataString) => {
        console.log('change')
        console.log(d, dataString)
    };
    onDateInputBlur = (e,v) => {
        console.log(e,v);
    }

    onStartInputBlur = (e,startValue,array) => {
        console.log('RangePicker面板 左输入框的失焦事件',startValue,array)
    }
    onEndInputBlur = (e,endValue,array) => {
        console.log('RangePicker面板 右输入框的失焦事件',endValue,array)
    }
    render () {
        return (
            <div>
                {/* <AcDatepicker
                    format={format}
                    onSelect={this.onSelect}
                    onChange={this.onChange}
                    onClick={this.onClick}
                    onDateInputBlur={this.onDateInputBlur}
                /> */}
                <AcRangePicker
                    placeholder={'开始 ~ 结束'}
                    dateInputPlaceholder={['开始', '结束']}
                    showClear={true}
                    onChange={this.onChange}
                    onPanelChange={(v)=>{console.log('onPanelChange',v)}}
                    showClose={false}
                    onStartInputBlur={this.onStartInputBlur}
                    onEndInputBlur={this.onEndInputBlur}
                    value={[moment(),moment()]}
                />  
            </div>
        )
    }
}
export default Demo1