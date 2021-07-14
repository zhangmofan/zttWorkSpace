 import React,{useState,useEffect} from 'react'
//useState:用来声明状态变量
/*
    用法：声明、读取、使用（修改）基本三项
 */

function ReactHooks() {
    const [count,setCount] = useState(2);
    
    useEffect(()=>{
      console.log(count)
    //  setCount(count+1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    })
    return(
        <div>
            <p>点击了{count}次</p>
            <button onClick={()=>{setCount(count+1)}}>点我+1</button>
        </div>
    )
}

export default ReactHooks
  