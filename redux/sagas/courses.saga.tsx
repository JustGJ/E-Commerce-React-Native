import * as actionType from '../actionTypes/coursesActionTypes';
import { put, call, takeEvery } from 'redux-saga/effects';
import { getCoursesFromApi } from '../../utils/api';
import { getCoursesFailure, getCoursesSuccess } from '../actions/getCourses.action';

export function* onLoadCourses() {
    try {
        const courses = yield call(getCoursesFromApi);
        yield put(getCoursesSuccess(courses));
    } catch (error) {
        yield put(getCoursesFailure(error));
    }
}

export function* watchOnLoadCourses() {
    yield takeEvery(actionType.GET_COURSES_REQUEST, onLoadCourses);
}
