import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom"
// import Container from './views/React_redux/Container';
import store from './views/React_redux/store';


// 导入组件库样式
import "antd/dist/antd.css"
let render = () => {
  ReactDOM.render(
    // <React.StrictMode>
    <HashRouter>
      {/* <Container store={store} /> */}
      <App/>
    </HashRouter>,
    // </React.StrictMode>,
    document.getElementById('root')
  );
}
render()
store.subscribe(render)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
