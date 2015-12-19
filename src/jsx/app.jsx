import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import createHistory from 'history/lib/createHashHistory'
import AppRoutes from './app-routes';

injectTapEventPlugin();

ReactDOM.render(
  <Router
    history={createHistory({queryKey: false})}>
    {AppRoutes}
  </Router>
  ,document.getElementById('app')
);
