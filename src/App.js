import React, { useEffect, useState } from 'react';
import './App.css';
import RouterMap from '@/router'

//引入项目依赖的静态资源（css文件）
import '@/static/css/common.css'
import '@/static/css/font.css'

//引入nav和tab组件
import ToggleNav from '@/components/toggleNav'
import Tab from '@/components/tab'
import { HashRouter } from 'react-router-dom';

function App(props) {
  return (
    <HashRouter>
      <ToggleNav></ToggleNav>
      <RouterMap></RouterMap>
      <Tab></Tab>
    </HashRouter>
  );
}

export default App;
