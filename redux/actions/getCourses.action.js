import { GET_COURSES, GET_COURSES_FAILED, GET_COURSES_SUCCESS } from '../constants';

export const getCourses = () => ({
    type: GET_COURSES,
});

export const getCoursesSuccess = (courses) => ({
    type: GET_COURSES_SUCCESS,
    payload: courses,
});

export const getCoursesFailed = (error) => ({
    type: GET_COURSES_FAILED,
    payload: error,
});
