// 引入Count的UI组件
import CountUI from './CountUI';

// 错误写法：引入redux(即store),不能自己引入，需要index.js传递过来
// import store from './redux/store';

// 引入connect 用于连接UI组件和redux
import {connect} from 'react-redux';

// 引入actionCreator，专门用于创建action对象
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from './count_action';

/*
    1. mapStateToProps函数返回的是一个对象
    2. 返回的对象中key和value作为传递到UI组件props上的key和value
    3. mapStateToProps用于传递状态
    4. state 相当于 store.getState()
*/ 
function mapStateToProps(state){
    return {count:state}
}

/*
    1. mapDispatchToProps函数返回的是一个对象
    2. 返回的对象中key和value作为传递到UI组件props上的key和value
    3. mapDispatchToProps用于传递操作状态的方法
    4. dispath 相当于 store.dispath()
*/ 
function mapDispatchToProps(dispath){
    return {
        // 通知reducer执行加法
        jia:(data)=>{dispath(createIncrementAction(data))},
        // 通知reducer执行减法
        jian:(data)=>{dispath(createDecrementAction(data))},
        // 通知reducer执行延时加法
        jiaa:(data)=>{
            dispath(createIncrementAsyncAction(data,1000))
        },
    }
}


// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI);

/* 
const CountContainer = connect()(CountUI);
export default CountContainer; 
*/
