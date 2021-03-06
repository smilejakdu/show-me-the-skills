import { all, fork } from "redux-saga/effects";
import axios from "axios";

import userSaga from "./user";
// import schedulerSaga from "./scheduler";
import { backUrl } from "../config/config";

axios.defaults.baseURL = backUrl;
axios.defaults.headers.post["Content-Type"] ="application/x-www-form-urlencoded";
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(schedulerSaga)]);
}
