import produce from 'immer'
export const initialState = {
  careers: []
}

const careerDummy = {
  careerId: '직업군 분류 아이디',
  careerTitle: '직업군 이름'
}

const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      default:
        return draft
    }
  })
}

export default reducer
