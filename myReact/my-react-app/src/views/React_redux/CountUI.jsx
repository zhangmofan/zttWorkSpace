import React ,{Component} from 'react';


class Count extends Component{
  constructor(props) {
    super(props);
    this.state = {
        text:'自己独有的text'
    }
  }

  // 加法
  increment=()=>{
    this.props.jia(1);
  }
  // 减法
  decrement=()=>{
    this.props.jian(1);
  }
  // 延时加法
  incrementAsync=()=>{
    this.props.jiaa(1);
  }

  render() {
    console.log('UI组件接收到的props是：',this.props);
    return (<>
        {/* 获取store中的状态值 */}
        <h2>count：{this.props.count}</h2>
        <p>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            <button onClick={this.incrementAsync}>++</button>
        </p>
        
    </>)
  }
}
export default Count;
