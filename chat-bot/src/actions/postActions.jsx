import { FETCH_POSTS } from "./types";
import { FETCH_SUBTOPIC } from "./types";
import axios from "axios";

export const fetchResponse = keyword => dispatch => {
  console.log("fetching..");
  console.log(keyword);
  var params = new URLSearchParams();
  params.append("keyword", keyword);
  axios
    .post("http://silverbackdomain.com/tpxbot/v1/index.php/getKeyword", params)
    .then(data =>
      dispatch({
        type: FETCH_POSTS,
        payload: data
      })
    );
};

export const fetchSubtopic = keyword => dispatch => {
  console.log("fetching..");
  console.log(keyword);
  var params = new URLSearchParams();
  params.append("keyword", keyword);
  axios
    .post(
      "http://silverbackdomain.com/tpxbot/v1/index.php/getKeywordSubtopic",
      params
    )
    .then(data =>
      dispatch({
        type: FETCH_POSTS,
        payload: data
      })
    );
};
