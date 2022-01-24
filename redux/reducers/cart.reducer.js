import CartCourse from '../../data/CartCourseModel';
import { ADD_TO_CART } from '../constants';

const initialState = {
    cartCourses: [], // {IdCourse, price, title}
    total: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const { id, price, title } = action.course; // On extrait id, price, title de action.course
            const newCourse = new CartCourse(id, price, title);
            return {
                ...state,
                cartCourses: state.cartCourses.concat(newCourse),
                total: state.total + price,
            };
        default:
            return state;
    }
};

export default cartReducer;
