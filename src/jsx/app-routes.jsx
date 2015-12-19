import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

// 全体のMaster
import Master from './components/master';
// ホーム
import Home from './components/pages/home';
// メモ
import Memo from './components/pages/memo';


const AppRoutes = (
  <Route path="/" component={Master}>
    <Route path="main" component={Home} />
    <Route path="memo" component={Memo} />
    <IndexRoute component={Home}/>
  </Route>
);

export default AppRoutes;
