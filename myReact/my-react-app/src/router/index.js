// 这个是路由配置文件
import { Route, Switch } from "react-router-dom"
// 导入路由配置的组件
import Home from "../views/Home/Home"
import Login from "../views/Login/Login"
import User from "../views/User/User"
import Hooks from "../views/Hooks/hooks"
import Increase from "../views/Increase/increase"

// react中路由使用组件实现, vue中是对象
export default function MyRouter(){
    // Route组件的属性exact表示精确匹配路由, 如果不加, 那么 /abc可能匹配到 / , /a , /ab,  /abc这几个结果,   /a/b/c 可能匹配到/a  /a/b   /a/b/c
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            {/* 精确匹配路由路径, 静态url */}
            <Route exact path="/user" component={User} />
            {/* 模糊匹配路由路径, 动态url传参 */}
            <Route path="/user/:name" component={User} />
            <Route path="/hooks" component={Hooks} />
            <Route path="/increase" component={Increase} />
        </Switch>
    )
}