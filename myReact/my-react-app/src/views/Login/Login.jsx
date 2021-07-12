import React from "react"
// 按需导入组件
import {
    Button
} from 'antd'

import {
    CheckCircleFilled
} from '@ant-design/icons'

export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render(){
        return (
            <div>
                登录页 
                <Button type="primary">按钮</Button>
                <CheckCircleFilled />
            </div>
        )
    }
}