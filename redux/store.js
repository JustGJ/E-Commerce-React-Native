import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import cartReducer from './reducers/cart.reducer';
import coursesReducer from './reducers/courses.reducer';
import paymentReducer from './reducers/payment.reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

// Combine nos différents store : key / reducer
const rootReducer = combineReducers({
    courses: coursesReducer,
    cart: cartReducer,
    payments: paymentReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
