/**
*
* @title Rangepicker多语示例
* @description 多语示例
*
*/
import React, { Component } from 'react';
import AcDatepicker from '../../src';


const setCookie = (name,value) => { 
    var Days = 30; 
    var exp = new Date(); 
    exp.setTime(exp.getTime() + Days*24*60*60*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
} 



const { AcRangePicker } = AcDatepicker;

class Demo1 extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    componentWillMount(){
        //设置 cookie 为 en_US即可
        setCookie('locale','en_US')
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
                    dateInputPlaceholder={['start', 'end']}
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