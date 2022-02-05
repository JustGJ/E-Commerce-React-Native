import { GetCourseMock } from '../../../utils/GetCourseMock';
import * as actionType from '../../actionTypes/coursesActionTypes';
import { getCoursesFailure, getCoursesRequest, getCoursesSuccess } from '../getCourses.action';

// GET COURSES ACTIONS
describe('getCourses', () => {
    // GET COURSES REQUEST
    it('getCoursesRequest', () => {
        const action = getCoursesRequest();
        expect(action).toEqual({
            type: actionType.GET_COURSES_REQUEST,
            loading: true,
        });
    });

    // Get COURSES SUCCESS
    it('getCoursesSuccess', () => {
        const action = getCoursesSuccess(GetCourseMock);
        expect(action).toEqual({
            type: actionType.GET_COURSES_SUCCESS,
            courses: GetCourseMock,
            loading: false,
        });
    });

    // Get COURSES FAILURE
    it('getCoursesSuccess', () => {
        const MockErrorRequest = 'Error';
        const action = getCoursesFailure(MockErrorRequest);
        expect(action).toEqual({
            type: actionType.GET_COURSES_FAILURE,
            error: MockErrorRequest,
            loading: false,
        });
    });
});
