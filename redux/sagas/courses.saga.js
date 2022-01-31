import { put, takeLatest, all, fork, call, takeEvery } from 'redux-saga/effects';
import { GET_COURSES, GET_COURSES_SUCCESS } from '../constants';
import { getCoursesSuccess, getCoursesFailed } from '../actions/getCourses.action';
import { getCourses } from '../../utils/api';

export function* onLoadCoursesAsync() {
    try {
        const courses = yield call(getCourses);
        yield put({ type: GET_COURSES_SUCCESS, courses });
    } catch (error) {
        console.log(error.message);
    }
}

export function* onLoadCourses() {
    yield takeEvery(GET_COURSES, onLoadCoursesAsync);
}
