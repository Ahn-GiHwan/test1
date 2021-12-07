import { all, fork } from 'redux-saga/effects'

import careerSaga from './career'
import collectionSaga from './collection'
import postSaga from './post'
import postCategorySaga from './postCategory'
import reportSaga from './report'
import reportCategorySaga from './reportCategory'
import testSaga from './test'
import testCategorySaga from './testCategory'
import userSaga from './user'

export default function* rootSaga() {
  yield all([
    fork(careerSaga),
    fork(collectionSaga),
    fork(postSaga),
    fork(postCategorySaga),
    fork(reportSaga),
    fork(reportCategorySaga),
    fork(testSaga),
    fork(testCategorySaga),
    fork(userSaga)
  ])
}
