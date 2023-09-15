const SelectedAnswers = (state = [], action) => {
  switch (action.type) {
  // The last selected option is added to state while next button is pressed.
  case 'ADD_ANSWER':
    return [...state, action.payload]

  case 'EDIT_ANSWER':
    console.log(action.payload.id - 1)
    state?.map((value) => {
      console.log(value.id)
      if (action.payload.id - 1 === value.id) {
        return (value.answer = action.payload.answer)
      }
      return value
    })
    return state
  default:
    return state
  }
}

export default SelectedAnswers
