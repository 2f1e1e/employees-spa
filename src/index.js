import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';
import './custom.css';
import configureStore from './store/configureStore'
import editEmployeeContainer from './containers/editEmployeeContainer';
import employeesContainer from './containers/employeesContainer';

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
