import { all } from 'redux-saga/effects';
import { onLoadCoursesAsync } from './courses.saga';

export default function* rootSaga() {
    yield all([onLoadCoursesAsync()]);
}
