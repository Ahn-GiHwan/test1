import { combineReducers } from 'redux'

import categoryReducer from './categoryReducer'
import careerTagReducer from './CareerTagReducer'
import testResultReducer from './testResultReducer'

const rootReducer = combineReducers({
  categoryReducer,
  careerTagReducer,
  testResultReducer
})

export default rootReducer
