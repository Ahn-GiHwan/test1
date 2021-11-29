export const initialState = {
  example1: 'example1',
  example2: false
}

const CHANGE_EXAMPLE1 = 'CHANGE_EXAMPLE1'
export const changeExample1 = data => {
  return {
    type: CHANGE_EXAMPLE1,
    data
  }
}

const TOGGLE_EXAMPLE2 = 'TOGGLE_EXAMPLE2'
export const toggleExample2 = {
  type: TOGGLE_EXAMPLE2
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_EXAMPLE1:
      return {
        ...state,
        example1: action.data
      }

    case TOGGLE_EXAMPLE2:
      return {
        ...state,
        example2: !state.example2
      }

    default:
      return state
  }
}

export default reducer
