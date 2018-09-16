import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './components/App';
import configureStore from './redux/store';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {LIST_API} from "./const";

fetch(LIST_API)
  .then(resp => resp.json())
  .then(todos => ({
    todos,
    visibility: 'SHOW_ALL',
    order: 'ID',
    isFetching: false,
    selectedId: null
  })).then(initState => configureStore(initState))
  .then(store =>
    render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.getElementById('root')
    ));
registerServiceWorker();
