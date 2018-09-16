import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from './reducer'

const logger = createLogger();

export default function configureStore(initState) {
    console.log("initState:", initState);
    return createStore(
        reducer,
        initState,
        applyMiddleware(thunk, logger));
}