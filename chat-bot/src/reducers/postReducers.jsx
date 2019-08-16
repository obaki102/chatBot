import { FETCH_POSTS, FETCH_SUBTOPIC } from "../actions/types";

const initialState = {
  messages: [],
  message: {},
  subtopic: []
};

//Evaluate what type to use
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log(action.payload);
      return { ...state, messages: action.payload };
    case FETCH_SUBTOPIC:
      console.log(action.payload);
      return { ...state, subtopic: action.payload };
    default:
      return state;
  }
}
