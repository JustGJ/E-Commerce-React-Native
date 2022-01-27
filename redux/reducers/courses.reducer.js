import CourseModel from '../../data/CourseModel';
import COURSES from '../../data/testData';
import { ADD_TO_CART, CREATE_COURSE, DELETE_COURSE, EDIT_COURSE, REMOVE_COURSE_CART } from '../constants';

const initialState = {
    existingCourses: COURSES,
    loggedInMemberCourses: COURSES.filter((course) => course.instructorId === '1'),
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

        // Lorsqu'un cours est supprimé du cart, on le passe en selected = false pour qu'il réaparaisse dans la liste des cours
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

        // Lorsqu'un cours est supprimé par l'utilisateur (instructorId)
        case DELETE_COURSE:
            return {
                ...state,
                existingCourses: state.existingCourses.filter((course) => course.id !== action.courseId),
                loggedInMemberCourses: state.existingCourses.filter(
                    (course) => course.id !== action.courseId
                ),
            };
        case EDIT_COURSE:
            console.log(action.courseId);
            console.log(action.updatedCourse);
            const idCourse = action.courseId; // id du cours à modifier

            // On récupère le cours à modifier dans loggedInMemberCourses grâce à l'id
            const indexCourseToUpdate = state.loggedInMemberCourses.findIndex(
                (course) => course.id === idCourse
            );

            // INFORMATIONS DU COURS A METTRE A JOUR
            const { title, img, desc } = action.updatedCourse; // title, image, descrption du livre mis à jour
            const price = state.loggedInMemberCourses[indexCourseToUpdate].price; // price du cours qui ne change pas
            const selected = state.loggedInMemberCourses[indexCourseToUpdate].selected; // selected du cours qui ne change pas
            const instructorId = state.loggedInMemberCourses[indexCourseToUpdate].instructorId; // instructorId du cours qui ne change pas

            const updateCourse = new CourseModel(idCourse, title, desc, img, price, selected, instructorId);

            // MISE A JOUR DE loggedInMemberCourses
            const newLoggedInMemberCourses = [...state.loggedInMemberCourses];
            newLoggedInMemberCourses[indexCourseToUpdate] = updateCourse;

            // MISE A JOUR DE existingCourses
            const indexExistingCourses = state.existingCourses.findIndex((course) => course.id === idCourse);
            const newExistingCourses = [...state.existingCourses];
            newExistingCourses[indexExistingCourses] = updateCourse;

            return {
                ...state,
                existingCourses: newExistingCourses,
                loggedInMemberCourses: newLoggedInMemberCourses,
            };
        case CREATE_COURSE:
            const courseId = Date.now().toString();
            const newCourse = new CourseModel(
                courseId,
                action.newCourse.title,
                action.newCourse.description,
                action.newCourse.image,
                action.newCourse.price,
                false,
                '1'
            );

            return {
                ...state,
                existingCourses: state.existingCourses.concat(newCourse),
                loggedInMemberCourses: state.loggedInMemberCourses.concat(newCourse),
            };

        default:
            return state;
    }
};

export default coursesReducer;
