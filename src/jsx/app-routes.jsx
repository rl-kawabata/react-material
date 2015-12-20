import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

// 全体のMaster
import Master from './components/master';
// サイドメニュー
import Sidemenu from './components/sidemenu';
// ホーム
import HomePage from './components/pages/HomePage';
// メモ
import MemoPage from './components/pages/MemoPage';


const AppRoutes = (
  <Route path="/" component={Master}>
    <Route path="/" component={Sidemenu}>
      <Route path="home" component={HomePage} />
      <Route path="memo" component={MemoPage} />
    </Route>
    <IndexRoute component={HomePage}/>
  </Route>
);

export default AppRoutes;
