const initialState = {
  collections: []
}

const collectionDummy = {
  collectionId: '콜렉션 분류 아이디',
  collectionTitle: '콜렉션 분류 이름'
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
