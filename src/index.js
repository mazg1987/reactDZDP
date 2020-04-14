import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//引入createStore来创建store
//applyMiddleware和thunk都是和中间件有关系的
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//引入reducers
import reducer from '@/reducers'

//引入Provider给子组件暴露store
import { Provider } from 'react-redux'

//如果多次通过import方式去引入同样的模块，模块的代码只会在初次引入的时候执行一次
import { number, incCounter } from './test2'  //编译时

//如果多次通过require方式去引入同样的模块，模块的代码只会在初次引入的时候执行一次
const test1 = require("./test")   //运行时


//CommonJS 模块输出的是一个值的拷贝，ES6模块输出的是值的引用。
//CommonJS 模块是运行时加载，ES6模块是编译时输出接口。

//创建store
let store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
