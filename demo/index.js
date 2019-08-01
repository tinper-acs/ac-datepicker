import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 



var Demo1 = require("./demolist/Demo1");var DemoArray = [{"example":<Demo1 />,"title":" 这是标题","code":"/**\n*\n* @title 这是标题\n* @description 这是描述\n*\n*/\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport AcDatepicker from \"ac-datepicker\";\nimport moment from 'moment';\n\n\n\nconst { AcYearPicker,AcMonthPicker,AcWeekPicker,AcRangePicker } = AcDatepicker;\n\n\nconst format = \"YYYY-MM-DD dddd\"\n\nclass Demo1 extends Component {\n    constructor(props){\n        super(props);\n        this.state={\n            \n        }\n    }\n\n    onSelect = (d, dataString)  => {\n        console.log('select')\n        console.log(d, dataString);\n    }\n    onClick = d => {\n        console.log('click')\n\n    }\n    onChange = (d, dataString) => {\n        console.log('change')\n        console.log(d, dataString)\n    };\n    onDateInputBlur = (e,v) => {\n        console.log(e,v);\n    }\n\n    onStartInputBlur = (e,startValue,array) => {\n        console.log('RangePicker面板 左输入框的失焦事件',startValue,array)\n    }\n    onEndInputBlur = (e,endValue,array) => {\n        console.log('RangePicker面板 右输入框的失焦事件',endValue,array)\n    }\n    render () {\n        return (\n            <div>\n                <AcRangePicker\n                    placeholder={'开始 ~ 结束'}\n                    dateInputPlaceholder={['开始', '结束']}\n                    showClear={true}\n                    onChange={this.onChange}\n                    onPanelChange={(v)=>{console.log('onPanelChange',v)}}\n                    showClose={true}\n                    onStartInputBlur={this.onStartInputBlur}\n                    onEndInputBlur={this.onEndInputBlur}\n                />  \n            </div>\n        )\n    }\n}\n","desc":" 这是描述"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
