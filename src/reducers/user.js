const initialState = {
  me: {}
}
const userDummy = {
  userId: '유저의 아이디',
  careerId: '유저의 직업',
  User: {
    email: '유저의 이메일',
    password: '유저의 비번',
    nickname: '유저 닉네임',
    profile: '유저 이미지'
  },
  BookMarkIds: ['북마크한 문제의 아이디'],
  ReviewIds: ['복습할 문제의 아이디']
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
