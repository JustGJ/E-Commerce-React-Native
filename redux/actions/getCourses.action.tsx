import * as actionType from '../actionTypes/coursesActionTypes';

export const getCoursesRequest = (): actionType.GetCoursesRequestAction => ({
    type: actionType.GET_COURSES_REQUEST,
    loading: true,
});

export const getCoursesSuccess = (courses): actionType.GetCoursesSuccessAction => ({
    type: actionType.GET_COURSES_SUCCESS,
    courses,
    loading: false,
});

export const getCoursesFailure = (error: Error | string): actionType.GetCoursesFailureAction => ({
    type: actionType.GET_COURSES_FAILURE,
    error,
    loading: false,
});
