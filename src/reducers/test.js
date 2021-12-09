import produce from 'immer'
const initialState = {
  tests: []
}

const testDummy = {
  testId: '문제 자체의 아이디',
  careerId: '문제 직업군 분류(개발자)',
  testCategoryId: '문제 중분류(프론트엔드)',
  collectionId: '문제 소분류(리액트)',
  userId: '문제 작성자 아이디',
  question: '문제',
  answer: '답안'
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
