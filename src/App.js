import React from 'react';

// 状态管理
import { Provider } from 'react-redux';

// 路由
import { BrowserRouter, Route } from 'react-router-dom';

// 样式
import { Globalstyle } from './style';
import { GlobalFontstyle } from './static/iconfont/iconfont';

// 组件
import Header from './common/header';
import store from './store/index';
import Home from './pages/home';
import Detail from './pages/detail/loadble';
// import Detail from './pages/detail';
import Login from './pages/login';
import Write from './pages/write';

{/* <Route path="/detail/:id" exact component = { Detail } > */}
function App() {
  return (
    <Provider store={store}>
        <div className="dell">
          <Globalstyle/>
          <GlobalFontstyle/>
          <BrowserRouter>
            <Header/>
            <Route path="/" exact component = { Home } >
            </Route>
            <Route path="/detail" exact component = { Detail } >
            </Route>
            <Route path="/login" exact component = { Login } >
            </Route>
            <Route path="/Write" exact component = { Write } >
            </Route>
          </BrowserRouter>
        </div>
    </Provider>
    
  );
}

export default App;
