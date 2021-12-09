import produce from 'immer'
const initialState = {
  postCategories: []
}

const postCategoryDummy = {
  postCategoryId: '게시글 분류 아이디',
  postCategoryTitle: '게시글 분류: 자유게시판/질문과 답변'
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
