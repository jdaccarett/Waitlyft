import axios from "axios";
import { FETCH_USER } from "./types";
import { FETCH_TABLES } from "./types";
import { DELETE_TABLES } from "./types";
import { FETCH_LYFT_TOKEN } from "./types";
import { FETCH_LYFT_EST_TIMES } from "./types";

export const fetchUser = () => {
  return function(dispatch) {
    axios
      .get("/api/current_user")
      .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
  }; // const request = axios.get('/api/current_user'); // // return { //   type: FETCH_USER, //   payload: request // };
};

export const fetchTables = () => {
  return function(dispatch) {
    axios
      .get("/api/tables")
      .then(res => dispatch({ type: FETCH_TABLES, payload: res.data }));
  };
};

export const deleteTable = id => {
  const request = axios.post("/api/tables/delete", { id: id });
  return {
    type: DELETE_TABLES,
    payload: request.data
  };
};

export const fetchLyftToken = () => {
  // Step 1: Obtain an access token via Post Request
  return function(dispatch) {
    axios({
      method: "post",
      url: "https://api.lyft.com/oauth/token",
      headers: { "Content-Type": "application/json" },
      data: {
        grant_type: "client_credentials",
        scope: "public"
      },
      auth: {
        username: "EJ_Sc_I3JPU-",
        password: "1O21LiXRAmkUI6TpF_JC6UcOQmPeaFIz"
      },
      responseType: "json"
    }).then(res =>
      dispatch({ type: FETCH_LYFT_TOKEN, payload: res.data.access_token })
    );
  };
};

export const fetchlyftEstTimes = (authToken, lat, lng) => {
  return function(dispatch) {
    axios({
      method: "get",
      url: "https://api.lyft.com/v1/cost",
      headers: { Authorization: "Bearer " + authToken },
      // `params` are the URL parameters to be sent with the request
      // Must be a plain object or a URLSearchParams object
      params: {
        start_lat: lat,
        start_lng: lng,
        end_lat: "37.340564",
        end_lng: "-120.609578"
      }
    }).then(res =>
      dispatch({ type: FETCH_LYFT_EST_TIMES, payload: res.data.cost_estimates })
    );
  };
};
