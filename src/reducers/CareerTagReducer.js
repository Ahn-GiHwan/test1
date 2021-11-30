// TODO categories에서 tag - {tagId:'', tagName: '', color:""} 넘겨서 props로 다시 넘겨서 그리기

const initial = {
  // title -> tagName
  tags: [
    { title: 'All', color: 'primary' },
    { title: 'Front-End', color: 'warning' },
    { title: 'Back-End', color: 'success' }
  ]
}

const careerTagReducer = (state = initial, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default careerTagReducer
