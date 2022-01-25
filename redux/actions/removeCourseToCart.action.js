import { REMOVE_COURSE_CART } from '../constants';

export const removeCourseToCart = (courseId) => {
    return {
        type: REMOVE_COURSE_CART,
        courseId: courseId,
    };
};
