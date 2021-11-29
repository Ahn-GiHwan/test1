import { combineReducers } from 'redux'

import exampleReducer from './exampleReducer'
import testResultReducer from './testResultReducer'

const rootReducer = combineReducers({
  exampleReducer,
  testResultReducer
})

export default rootReducer
