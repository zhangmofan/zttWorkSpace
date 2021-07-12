import logo from './logo.svg';
import './App.css';
import React from "react";
// 从过渡模块中导入过渡组件
import { CSSTransition } from "react-transition-group"
// 导入懒加载模块和占位图
import LazyLoad from "react-lazyload";
import ph from "./assets/placeholder.gif"

// 导入路由配置组件, 作为路由出口 
import RouterView from "./router/index"
// 导入路由跳转组件 Link
import {Link} from "react-router-dom"

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      bool: true,
      list: []
    }
  }
  componentDidMount(){
    fetch("/douyu").then((res)=>{
      return res.json()
    }).then(res=>{
      console.log(res.data)
      this.setState({
        list: res.data
      })
    })
  }
  render(){
    var holderImg = <img src={ph} alt=""/>
    return (
      <div className="App">
        <nav>
          <Link to="/">首页</Link> | 
          <Link to="/login">登录</Link> | 
          <Link to="/user">用户</Link> | 
          <Link to="/user/zhangsan">用户2</Link> |
          <Link to="/user/lisi">用户3</Link>
        </nav>
        {/* 路由出口 */}
        <RouterView></RouterView>



        <header className="App-header">
          <button onClick={()=>{ this.setState({bool: !this.state.bool}) }}>显示隐藏</button>
          <CSSTransition classNames="r" in={this.state.bool} timeout={2000}>
            <img src={logo} className="App-logo" alt="logo" />
          </CSSTransition>
          {/* 属性 classNames 是设置动画的class前缀, 注意不是className  */}
          {/* 属性 in  绑定bool或表达式, 判断其子标签创建和销毁 */}
          {/* 属性 timeout 设置动画周期时间, 允许动画执行的时常, 一般和css中设置的过渡时间保持一致 */}
        </header>
        <main>
          {
            this.state.list.map(item=>{
              return(
                <LazyLoad key={item.cate_id} placeholder={holderImg}>
                  <img src={item.game_icon} alt=""/>
                </LazyLoad>
              )
               
            })
          }
        </main>
      </div>
    )
  }
}

export default App;
