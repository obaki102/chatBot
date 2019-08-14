import { FETCH_POSTS } from "../actions/types";

const initialState = {
  messages: [],
  message: {}
};

//Evaluate what type to use
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log(action.payload);
      return { ...state, messages: action.payload };

    default:
      return state;
  }
}
