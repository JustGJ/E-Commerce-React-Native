import { getCoursesFailure, getCoursesRequest, getCoursesSuccess } from '../../actions/getCourses.action';
import coursesReducer, { ICoursesState } from '../courses.reducer';
import GetCoursesMock from '../../../utils/GetCoursesMock';

const initialState: ICoursesState = {
    courses: [],
    error: null,
    loading: true,
};

describe('GET_COURSES_REQUEST', () => {
    const action = getCoursesRequest();
    const newState = coursesReducer(initialState, action);

    it('is fetching courses ...', () => {
        expect(newState.loading).toBe(true);
    });
});

describe('GET_COURSES_SUCCESS', () => {
    const courses = GetCoursesMock;
    const action = getCoursesSuccess(courses);
    const newState = coursesReducer(initialState, action);
    it('fetched characters', () => {
        expect(newState.courses).toEqual(GetCoursesMock);
    });

    it('is not fetching', () => {
        expect(newState.loading).toBe(false);
    });
});

describe('GET_COURSES_FAILURE', () => {
    const MockError = 'Error';
    const action = getCoursesFailure(MockError);
    const newState = coursesReducer(initialState, action);

    it('has not fetched courses', () => {
        expect(newState.courses).toEqual([]);
    });

    it('is not fetching', () => expect(newState.loading).toBe(false));
});
