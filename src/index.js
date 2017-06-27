import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

//import {Router, Route, hashHistory } from 'react-router';
import employeesContainer from './containers/employeesContainer';

import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { HashRouter, Route, Switch } from 'react-router-dom';

import editEmployeeContainer from './containers/editEmployeeContainer';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
    <App>
      <Switch>
        <Route exact path="/" component={employeesContainer} />
        <Route path="/new" component={editEmployeeContainer} />
        <Route path="/users/:id" component={editEmployeeContainer} />
      </Switch>
    </App>
    </HashRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

let log = () => {
  console.log(process.env);
}
log();
/*
<Switch>
<Route exact path="/" component={employeesContainer} />
<Route path="/new" component={editEmployeeContainer} />
<Route path="/users/:id" component={editEmployeeContainer} />
</Switch>
*/
