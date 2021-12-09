import { combineReducers } from 'redux'

import career from './career'
import collection from './collection'
import post from './post'
import postCategory from './postCategory'
import report from './report'
import reportCategory from './reportCategory'
import test from './test'
import testCategory from './testCategory'
import user from './user'
import categoryReducer from './categoryReducer'

const rootReducer = combineReducers({
  career,
  collection,
  post,
  postCategory,
  report,
  reportCategory,
  test,
  testCategory,
  user,
  categoryReducer
})

export default rootReducer
