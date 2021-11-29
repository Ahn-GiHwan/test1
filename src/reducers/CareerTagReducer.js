const initial = {
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
