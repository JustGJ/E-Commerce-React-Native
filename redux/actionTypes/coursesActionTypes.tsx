// GET COURSES REQUEST
export const GET_COURSES_REQUEST = 'GET_COURSES_REQUEST ';
export interface GetCoursesRequestAction {
    type: typeof GET_COURSES_REQUEST;
    loading?: Boolean;
}

// GET COURSES SUCCESS
export const GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS';
export interface GetCoursesSuccessAction {
    type: typeof GET_COURSES_SUCCESS;
    courses: string;
    loading: Boolean;
}

// GET COURSES FAILURE
export const GET_COURSES_FAILURE = 'GET_COURSES_FAILURE';
export interface GetCoursesFailureAction {
    type: typeof GET_COURSES_FAILURE;
    error?: Error | string | null;
    loading: Boolean;
}

export type CoursesAction = GetCoursesRequestAction | GetCoursesSuccessAction | GetCoursesFailureAction;
