
import React from 'react';
import ReactDOM from 'react-dom';
// import CountUI from './CountUI';
import Container from './Container';

// 为了store.subscribe调用store
import store from './store';

let render = () =>
  ReactDOM.render(
    // 给容器组件传递 store
    <Container store={store}/>,
    document.getElementById('root')
  );
render();
//检测 store是否有变化，如果变化，自动调用render
store.subscribe(render);
