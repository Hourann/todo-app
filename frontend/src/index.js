import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './components/App';
import configureStore from './redux/store';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';


// let store = configureStore();

fetch('http://localhost:8000/api/')
    .then(resp => resp.json())
    .then(todos => ({
        todos,
        visibility: 'SHOW_ALL',
        order: 'ID'
    })).then(initState => configureStore(initState))
    .then(store =>
        render(
            <Provider store={store}>
                <App/>
            </Provider>,
            document.getElementById('root')
        ));
registerServiceWorker();
