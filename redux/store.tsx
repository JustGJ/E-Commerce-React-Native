import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const initialStore: any = {
    courses: [],
};

const configureStore = (initialState = initialStore) => {
    const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;
