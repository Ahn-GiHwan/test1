import produce from 'immer'
const initialState = {
  mainPost: []
}

const postDummy = {
  postId: '진짜 게시글마다 아이디',
  postCategoryId: '게시글 성격',
  User: {
    userId: '유저 아이디',
    nickname: '유저 닉네임'
  },
  postTitle: '게시글 제목',
  postContent: '게시글 내용',
  Images: [
    {
      src: '게시글 이미지 url'
    }
  ],
  PostComments: [
    {
      User: {
        userId: '댓글 작성자 아이디',
        nickname: '댓글 작성자 닉네임'
      },
      postContent: '댓글 내용'
    }
  ]
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
