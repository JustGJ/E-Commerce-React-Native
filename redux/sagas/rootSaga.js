import { all } from 'redux-saga/effects';
import { watchOnLoadCourses } from './courses.saga';

export default function* rootSaga() {
    yield all([watchOnLoadCourses()]);
}
