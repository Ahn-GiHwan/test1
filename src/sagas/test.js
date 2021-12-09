import { all, put, fork, call, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import {
  ADD_TEST_FAILURE,
  ADD_TEST_REQUEST,
  ADD_TEST_SUCCESS,
  EDIT_TEST_REQUEST,
  EDIT_TEST_SUCCESS,
  GET_TESTS_FAILURE,
  GET_TESTS_REQUEST,
  GET_TESTS_SUCCESS,
  GET_TEST_FAILURE,
  GET_TEST_REQUEST,
  GET_TEST_SUCCESS
} from '../types'

// 문제 불러오기
/*
function getTestsApi() {
  return axios.get('https://serveroftest1.herokuapp.com/test/tests')
}
*/

function* getTests(action) {
  try {
    // const data = yield call(getTestsApi)
    yield put({
      type: GET_TESTS_SUCCESS,
      data: action.data
    })
  } catch (error) {
    yield put({
      type: GET_TESTS_FAILURE,
      error: error.response.data
    })
  }
}

// 특정 문제 불러오기
/*
function getTestApi() {
  return axios.get('https://serveroftest1.herokuapp.com/user/61a5bbd8ed3ffc6ec8a07634')
}
*/

function* getTest(action) {
  try {
    yield put({
      type: GET_TEST_SUCCESS,
      data: action.data
    })
  } catch (error) {
    yield put({
      type: GET_TEST_FAILURE,
      error: error.response.data
    })
  }
}

// 문제 추가
/*
function addTestApi() {
  return axios.post('https://serveroftest1.herokuapp.com/test', {
    "category": {
        "_id": "61a5e0f2c8bcdb699cc74e37",
        "name": "React"
    },
    "tag": [{
        "_id": "61a5e0d6c8bcdb699cc74e32",
        "name": "ALL",
        "color": "green"
    },
    {
        "_id": "61a5e17aeec59a45ef7e2f98",
        "name": "Front-End",
        "color": "red"
    }],
    "question": "Express란 무엇인가",
    "answer": "그러게요"
  })
}
*/

function* addTest(action) {
  try {
    yield put({
      type: ADD_TEST_SUCCESS,
      data: action.data
    })
  } catch (error) {
    yield put({
      type: ADD_TEST_FAILURE,
      error: error.response.data
    })
  }
}

// 문제 수정
/*
function editTestApi() {
  return axios.patch('https://serveroftest1.herokuapp.com/test', {"_id": "61a5dbb430e28a8186ea38c2","tag": ["61a5d69b656bbfe01539c4c2"],"question": "React란 무엇인가","answer": "그러게요!!"}
  )
}
*/

function* editTest(action) {
  try {
    yield put({
      type: EDIT_TEST_SUCCESS,
      data: action.data
    })
  } catch (error) {
    yield put({
      type: GET_TESTS_FAILURE,
      error: error.response.data
    })
  }
}

function* watchGetTests() {
  yield takeLatest(GET_TESTS_REQUEST, getTests)
}

function* watchGetTest() {
  yield takeLatest(GET_TEST_REQUEST, getTest)
}

function* watchAddTest() {
  yield takeLatest(ADD_TEST_REQUEST, addTest)
}

function* watchEditTest() {
  yield takeLatest(EDIT_TEST_REQUEST, editTest)
}

export default function* testSaga() {
  yield all([
    fork(watchGetTests),
    fork(watchGetTest),
    fork(watchAddTest),
    fork(watchEditTest)
  ])
}
