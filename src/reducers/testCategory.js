import produce from 'immer'
const initialState = {
  testCategoies: []
}

const testCategoryDummy = {
  testCategoryId: '테스트 카테고리 아이디',
  testTitle: '테스트 이름'
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
