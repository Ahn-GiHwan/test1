import { all, put, fork, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS
} from '../types'

// 로그인 api가 없음
// function logInApi() {
//   return axios
// }

function* logIn(action) {
  try {
    //  값 받아 오기 api
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data
    })
  } catch (error) {
    yield put({
      type: LOG_IN_FAILURE,
      error: error.response.data
    })
  }
}

// 로그아웃 api가 없음
// function logOutApi() {
//   return axios
// }

function* logOut(action) {
  try {
    //  값 받아 오기 api
    yield put({
      type: LOG_OUT_SUCCESS,
      data: action.data
    })
  } catch (error) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: error.response.data
    })
  }
}

//  회원가입
/* function signUpApi() {
   return axios.post('https://serveroftest1.herokuapp.com/user', {
    "email": "test@test.com",
    "nickname": "test1234",
    "password": "test1234"
  })
} */

function* signUp(action) {
  try {
    //  값 받아 오기 api
    yield put({
      type: SIGN_UP_SUCCESS,
      data: action.data
    })
  } catch (error) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: error.response.data
    })
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn)
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut)
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp)
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchSignUp)])
}
