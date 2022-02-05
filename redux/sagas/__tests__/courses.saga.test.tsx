import { call, put } from 'redux-saga/effects';
import { getCoursesFromApi } from '../../../utils/api';
import { GetCourseMock } from '../../../utils/GetCourseMock';
import GetCoursesMock from '../../../utils/GetCoursesMock';
import { getCoursesFailure, getCoursesSuccess } from '../../actions/getCourses.action';
import { onLoadCourses } from '../courses.saga';

describe('getCourses', () => {
    // SUCCESS GET COURSES
    it('success triggers success action with courses', () => {
        const generator = onLoadCourses();
        const response = GetCoursesMock; // Fictive response

        expect(generator.next().value).toEqual(call(getCoursesFromApi)); // compare value generator and response data
        expect(generator.next(response).value).toEqual(put(getCoursesSuccess(GetCoursesMock))); // fictive data
    });

    // FAILURE GET COURSES
    // it('failure triggers failure action', () => {
    //     const error = 'error';
    //     const generator = onLoadCourses();
    //     const response = {};

    //     expect(generator.next().value).toEqual(call(getCoursesFromApi));

    //     expect(generator.next(response).value).toEqual(put(getCoursesFailure(error)));

    //     expect(generator.next()).toEqual({ error, loading: false });
    // });
});
