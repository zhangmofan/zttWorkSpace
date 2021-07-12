import React from "react"
import { Link } from "react-router-dom"
import store from '../../store/index'
import {
  addAction
} from '../../store/actionCreators'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: store.getState().counter
    }
  }
  //订阅
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }
  //取消订阅
  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div>
        {/* 主页 <br/>
                路由传值1: 使用url路径拼接键值对传值 */}
        {/* <Link to="/user?name=zhangsan">1,去找张三</Link><br/> */}
        {/* 路由传值2: 使用友好型url/动态路由传值 */}
        {/* <Link to="/user/小明">2,去找小明</Link><br/> */}
        {/* 路由传值3: 使用对象传值, (对象中传值的字段名可自定义) */}
        {/* <Link to={{
                    pathname: "/user",
                    data: {name: '李四'},
                    query: {age: 20},
                    params: {sex: true}
                }}>3,去找李四</Link><br/> */}
        {/* 编程式导航跳转  */}
        {/* <button onClick={()=>{
                    this.props.history.push("/user");  // 路由跳转,有历史记录
                    // this.props.history.replace('/user'); // 路由跳转,没有历史记录
                    // this.props.history.go(-1);   // 跳转到历史记录的某个路由
                    // this.props.history.goBack(); // 跳转路由历史中上一个路由
                    // this.props.history.goForward(); // 跳转路由历史中下一个路由
                    // 如果需要传参, 把to属性值放入push函数的参数中即可
                }}>4, 去找王五</button> */}
        <Link to="/hooks">hooks语法</Link>
        <Link to="/increase">计算器</Link>
        <h1>home</h1>
        <h2>当前:{this.state.counter}</h2>
        <button onClick={e => this.increament()}>+1</button>
        <button onClick={e => this.addnumber(5)}>+5</button>
      </div>

      // 总结: 路由跳转两种方式,路由传值三种方式 
    )
  }
  increament() {
    store.dispatch(addAction(1))
  }
  addnumber(num) {
    store.dispatch(addAction(num))
  }
}