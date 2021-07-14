/* 
    该文件是用于创建一个为Count组件服务的reducer
    reducer的本质就是一个函数,reducer函数会接收到两个参数
    分别是：之前的状态(preState),动作对象(action)
*/
// 引入constant文件，改写type值
import { INCREMENT, DECREMENT } from './constant';


// 初始化状态
const initState = 0;
//  定义好reducer函数后并暴露出去
export default function countReducer(preState=initState,action){
    console.log(preState,action);
    // 从action对象中取出：type、data
    const {type,data} = action;
    // 根据type决定如何加工数据
    switch(type){
        // case 'increment': // 原始的
        case INCREMENT: // 改写后
            return preState+data;   // 如果是加
        // case 'decrement': // 原始的
        case DECREMENT: // 改写后
            return preState-data;   // 如果是减
        // reducer是个纯函数，不能处理什么异步加+1什么的
        default:
            return preState;  
    }
}
