import CartCourse from '../../data/CartCourseModel';
import { ADD_PAYMENT, ADD_TO_CART, REMOVE_COURSE_CART } from '../constants';

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
        case REMOVE_COURSE_CART: {
            const indexResult = state.cartCourses.findIndex((course) => course.id === action.courseId); // Récupère l'index du cours à supprimer

            const newCartCoursesArray = [...state.cartCourses]; // Copie du panier
            newCartCoursesArray.splice(indexResult, 1); // auquel on va supprimer le cours

            const coursePrice = state.cartCourses[indexResult].price; // Prix du cours à déduire du total

            return {
                ...state,
                cartCourses: newCartCoursesArray,
                total: state.total - coursePrice,
            };
        }
        // Lorsque l'on valide le paiement, on remet cart vide
        case ADD_PAYMENT: {
            return initialState;
        }
        default:
            return state;
    }
};

export default cartReducer;
