import COURSES from '../../data/testData';
import { ADD_TO_CART } from '../constants';

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

            copyExistingCourses[indexCourseToModify].selected = true; // Modifie false en true

            return {
                ...state,
                existingCourses: copyExistingCourses,
            };

        default:
            return state;
    }
};

export default coursesReducer;
