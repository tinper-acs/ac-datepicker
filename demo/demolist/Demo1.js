/**
*
* @title Rangepicker基本示例
* @description 封装函数区域
*
*/
import React, { Component } from 'react';
import AcDatepicker from '../../src';



const { AcYearPicker,AcMonthPicker,AcWeekPicker,AcRangePicker } = AcDatepicker;


const format = "YYYY-MM-DD dddd"

class Demo1 extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }

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
                <AcRangePicker
                    placeholder={'开始 ~ 结束'}
                    dateInputPlaceholder={['开始', '结束']}
                    showClear={true}
                    onChange={this.onChange}
                    onPanelChange={(v)=>{console.log('onPanelChange',v)}}
                    showClose={true}
                    onStartInputBlur={this.onStartInputBlur}
                    onEndInputBlur={this.onEndInputBlur}
                />  
            </div>
        )
    }
}
export default Demo1