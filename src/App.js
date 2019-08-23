import React from 'react';
import { Provider } from 'react-redux';
import { Globalstyle } from './style';
import { GlobalFontstyle } from './static/iconfont/iconfont';
import Header from './common/header';
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
        <div className="dell">
          <Globalstyle/>
          <GlobalFontstyle/>
          <Header/>
        </div>
    </Provider>
    
  );
}

export default App;
