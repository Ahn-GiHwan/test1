const initialState = {
  reportCategories = []
}


const reportCategoryDummy = {
  reportCategoryId: '리포트 카데고리 아이디',
  reportCategoryTitle: '리포트 카데고리중 1개'
}

const reducer = (state = initialState,action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      default:
        return draft
    }
  })
}
  
export default reducer