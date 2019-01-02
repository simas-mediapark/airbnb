
import { compose, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from '../redux/reducers';

const loggerMiddleware = createLogger({ predicate: () => __DEV__ });

const configureStore = (initialState) => {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
        ),
    )
    return createStore(reducer, initialState, enhancer);
}

export default configureStore({})