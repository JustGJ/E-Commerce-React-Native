import COURSES from '../../data/testData';
import { ADD_TO_CART, REMOVE_COURSE_CART } from '../constants';

const initialState = {
    existingCourses: COURSES,
};

const coursesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // récupère index du cours ajouté
            const indexCourseToModify = state.existingCourses.findIndex(
                (course) => course.id === action.course.id
            );
            const copyExistingCourses = [...state.existingCourses]; // Copie des cours existants

            copyExistingCourses[indexCourseToModify].selected = true;

            return {
                ...state,
                existingCourses: copyExistingCourses,
            };

        // Lorsqu'un cours est supprimé du cart, on le passe en selected = false
        case REMOVE_COURSE_CART:
            const indexCourseToDeleteFromCart = state.existingCourses.findIndex(
                (course) => course.id === action.courseId
            );
            const copyExistingCoursesRemoved = [...state.existingCourses];
            copyExistingCoursesRemoved[indexCourseToDeleteFromCart].selected = false;

            return {
                ...state,
                existingCourses: copyExistingCoursesRemoved,
            };
        default:
            return state;
    }
};

export default coursesReducer;
