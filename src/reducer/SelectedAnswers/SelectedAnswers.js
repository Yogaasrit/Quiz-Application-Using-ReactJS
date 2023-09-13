const SelectedAnswers = (state = [],action) => {
  // console.log(",..");
  switch(action.type){
    case 'ADD_ANSWER':
      return [...state,action.payload];
    default :
    return state;
  } 
}

export default SelectedAnswers