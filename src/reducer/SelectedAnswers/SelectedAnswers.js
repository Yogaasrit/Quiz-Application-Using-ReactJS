const SelectedAnswers = (state = [], action) => {
  console.log("...");
  console.log(action.payload);
  switch (action.type) {
    case "ADD_ANSWER":
      return [...state, action.payload];
    case "EDIT_ANSWER":
      console.log("/////");
      console.log(action.payload.id - 1);
      state?.map((value) => {
        console.log(value.id);
        if (action.payload.id - 1 === value.id) {
          console.log("/////");
          return (value.answer = action.payload.answer);
        }
        return value;
      });
      return state;
    default:
      return state;
  }
};

export default SelectedAnswers;
