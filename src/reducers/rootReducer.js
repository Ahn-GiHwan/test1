import { combineReducers } from 'redux'

import exampleReducer from './exampleReducer'
import categoryReducer from './categoryReducer'
import careerTagReducer from './CareerTagReducer'

const rootReducer = combineReducers({
  exampleReducer,
  categoryReducer,
  careerTagReducer
})

export default rootReducer
