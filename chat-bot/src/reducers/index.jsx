import { combineReducers } from "redux";
import postReducers from "../reducers/postReducers";

export default combineReducers({
  posts: postReducers
});
