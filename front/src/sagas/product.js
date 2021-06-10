import axios from "axios";
import { all, fork, put, takeLatest, throttle, call } from "redux-saga/effects";

import {
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
  UPLOAD_IMAGES_FAILURE,
  LOAD_PRODUCT_REQUEST,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  REMOVE_PRODUCT_REQUEST,
  REMOVE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
} from "../reducers/product";
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducers/user";


function uploadImagesAPI(data) {
  return axios.post("/post/images", data);
}

function* uploadImages(action) {
  try {
    const result = yield call(uploadImagesAPI, action.data);
    yield put({
      type: UPLOAD_IMAGES_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPLOAD_IMAGES_FAILURE,
      error: err.response.data,
    });
  }
}

function loadPostAPI(data) {
  // total , music , art 에 따라서 데이터가 다르게 불러와야함 
  // ex ) /post/music
  return axios.get(`/post/${data}`);
}

function* loadPost(action) {
  try {
    const result = yield call(loadPostAPI, action.data);
    yield put({
      type: LOAD_PRODUCT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_PRODUCT_FAILURE,
      data: err.response.data,
    });
  }
}



function addPostAPI(data) {
  return axios.post("/post", data);
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: ADD_PRODUCT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_PRODUCT_FAILURE,
      error: err.response.data,
    });
  }
}

function removePostAPI(data) {
  return axios.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield call(removePostAPI, action.data);
    yield put({
      type: REMOVE_PRODUCT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_PRODUCT_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchUploadImages() {
  yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

function* watchLoadPost() {
  yield takeLatest(LOAD_PRODUCT_REQUEST, loadPost);
}

function* watchAddPost() {
  yield takeLatest(ADD_PRODUCT_REQUEST, addPost);
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_PRODUCT_REQUEST, removePost);
}

export default function* postSaga() {
  yield all([
    fork(watchUploadImages),
    fork(watchAddPost),
    fork(watchLoadPost),
    fork(watchRemovePost),
  ]);
}
