export const initialState = {
  currentQuestionAndAnswers: [
    { id: 1, question: '1번 문제', answer: '1번답' },
    { id: 2, question: '2번 문제', answer: '2번답' },
    { id: 3, question: '3번 문제', answer: '3번답' },
    { id: 4, question: '4번 문제', answer: '4번답' },
    { id: 5, question: '5번 문제', answer: '5번답' },
    { id: 6, question: '6번 문제', answer: '6번답' },
    { id: 7, question: '7번 문제', answer: '7번답' },
    { id: 8, question: '8번 문제', answer: '8번답' },
    { id: 9, question: '9번 문제', answer: '9번답' },
    { id: 10, question: '10번 문제', answer: '10번답' }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
