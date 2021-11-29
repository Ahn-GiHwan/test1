const initial = {
  categories: [
    {
      id: 1,
      title: '복습하기',
      count: 23,
      tag: ['All', 'Front-End', 'Back-End']
    },
    {
      id: 2,
      title: '네트워크',
      count: 23,
      tag: ['All', 'Front-End', 'Back-End']
    },
    {
      id: 3,
      title: 'React',
      count: 23,
      tag: ['All', 'Front-End']
    },
    {
      id: 4,
      title: '공통 질문',
      count: 23,
      tag: ['All', 'Front-End', 'Back-End']
    },
    {
      id: 5,
      title: 'JavaScript',
      count: 23,
      tag: ['All', 'Front-End']
    },
    {
      id: 6,
      title: 'Node Express',
      count: 23,
      tag: ['All', 'Back-End']
    }
  ]
}
const categoryReducer = (state = initial, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default categoryReducer
