import React from "react"

export default class User extends React.Component{
    constructor(props) {
        super(props);
        this.state = { }
        // 当使用路由跳转到某个组件时, 路由会在组件的props对象中添加路由信息, 包含以下三个字段
        // history: 用于路由编程式导航跳转和路由监听
        // location: 用于路由信息显示和传参
        // match: 用于路由配置信息展示和传参
        console.log(1, props)
    }
    render(){
        return (
        <div>
            个人中心页: 
            {/* 1, url拼接传值,不会自动解析,使用location.search接收字符串 */}
            {this.props.location.search}
            {/* 2, 动态路由传值, 自动解析到match.params字段中 */}
            {this.props.match.params.name}
            {/* 3, 自定义对象传值, 为防止data为空报错,使用&&判断 */}
            {this.props.location.data && this.props.location.data.name}
            {/* a&&b  解释: 如果a有值就取b的值,  如果a没值,返回空  相当于三木运算 a?b:'' */}
            {this.props.location.data ?  this.props.location.data.name : ''}
        </div>
        )
    }
}