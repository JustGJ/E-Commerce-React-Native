import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import cartReducer from './reducers/cart.reducer';
import coursesReducer from './reducers/courses.reducer';
import paymentReducer from './reducers/payment.reducer';

// Combine nos différents store : key / reducer
const rootReducer = combineReducers({
    courses: coursesReducer,
    cart: cartReducer,
    payments: paymentReducer,
});

// store / saga middleware
const store = createStore(rootReducer);

export default store;
