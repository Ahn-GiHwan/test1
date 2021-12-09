import produce from 'immer'
const initialState = {
  reports: []
}

const reportDummy = {
  reportId: '리포트의 아이디',
  userId: '리포트 작성자 아이디',
  content: '리포트 내용',
  reportCategoryId: '리포트 분류',
  SubIds: {
    testId: '테스트 자체에 대한 신고면 값 있고 아니면 null',
    postId: '게시글에 대한 신고면 값 있고 아니면 null',
    commentId: '댓글에 대한 신고면 값 있고 아니면 null'
  }
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
