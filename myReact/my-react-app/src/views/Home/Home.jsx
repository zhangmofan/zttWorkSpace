import React from "react"
import { Link } from "react-router-dom"
import store from '../../store/index'
import {
  addAction,
  reduceAction,
} from '../../store/actionCreators'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: store.getState().counter,
      value:10
    }
    console.log(props);
    
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
        <Link to="/hooks">hooks语法</Link>
        <Link to="/increase">计算器</Link>
        <h1>home</h1>
        <h2>当前:{this.state.counter}</h2>
        <button onClick={e => this.increament()}>+1</button>
        <button onClick={e => this.addnumber(5)}>+5</button>
        <button onClick={e => this.reducenumber(2)}>-2</button>
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
  reducenumber(num){
    store.dispatch(reduceAction(num))
  }
}
