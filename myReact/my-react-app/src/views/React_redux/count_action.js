/* 
    该文件专门为 Count 组件生成 action 对象
*/

// 引入constant文件里面的常量
import { INCREMENT, DECREMENT } from './constant';

import store from './store';

// 同步action，就是指action的值为Object类型的一般对象
export const createIncrementAction = (data)=>{
    return {type:INCREMENT,data:data}
}
export const createDecrementAction = data=>({type:DECREMENT,data:data})
// 异步action，就是指action的值为函数，异步action中一般会调用同步action，异步action不是必须要用的
export const createIncrementAsyncAction =(data,time)=>{
    return ()=>{
        setTimeout(()=>{
            // store.dispatch({type:'increment',data:1}); // 原来的写法
            // 使用action改写
            store.dispatch(createIncrementAction(1));
        },time)
    }
}
