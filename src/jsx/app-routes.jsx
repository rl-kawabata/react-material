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


const AppRoutes = (
  <Route path="/" component={Master}>
    <Route path="main" component={Home} />
    <IndexRoute component={Home}/>
  </Route>
);

export default AppRoutes;
