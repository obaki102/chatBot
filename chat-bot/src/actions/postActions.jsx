import { FETCH_POSTS } from "./types";

export const messages = () => dispatch => {
  console.log("fetching..");
  fetch("https://localhost:5001/api/customers")
    .then(res => res.json())
    .then(customers =>
      dispatch({
        type: FETCH_POSTS,
        payload: customers
      })
    );
};
