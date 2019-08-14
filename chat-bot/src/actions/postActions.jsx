import { FETCH_POSTS } from "./types";

export const fetchResponse = keyword => dispatch => {
  console.log("fetching..");
  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "http://localhost:3000");
  fetch("http://silverbackdomain.com/tpxbot/v1/index.php/getKeyword", {
    mode: "cors",
    method: "POST",
    headers: headers,
    body: "keyword:metasolv"
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: FETCH_POSTS,
        payload: post
      })
    );
};
