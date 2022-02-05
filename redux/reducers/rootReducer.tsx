import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import cartReducer from './cart.reducer';
import coursesReducer from './courses.reducer';
import paymentReducer from './payment.reducer';

// Combine nos différents store : key / reducer
const rootReducer = combineReducers({
    courses: coursesReducer,
    cart: cartReducer,
    // payments: paymentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
