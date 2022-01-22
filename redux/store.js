import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import coursesReducer from './reducers/courses.reducer';

// Combine nos différents store : key / reducer
const rootReducer = combineReducers({
    courses: coursesReducer,
});

// store / saga middleware
const store = createStore(rootReducer);

export default store;
