import { FETCH_POSTS } from "./types";
import axios from "axios";

export const fetchResponse = keyword => dispatch => {
  console.log("fetching..");
  console.log(keyword);
  axios
    .post(
      "http://silverbackdomain.com/tpxbot/v1/index.php/getKeyword?keyword=" +
        keyword
    )
    .then(data =>
      dispatch({
        type: FETCH_POSTS,
        payload: data
      })
    );
};
