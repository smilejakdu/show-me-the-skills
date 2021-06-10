import produce from "../utils/produce";

export const initialState = {
  mainPosts: [],
  singlePost: null,
  imagePaths: [],

  loadProductLoading: false,
  loadProductDone: false,
  loadProductError: null,
  addProductLoading: false,
  addProductDone: false,
  addProductError: null,

  removeProductLoading: false,
  removeProductDone: false,
  removeProductError: null,
  loadProductLoading: false,
  loadProductDone: false,
  loadProductError: null,

  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
};

export const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";

export const LOAD_PRODUCT_REQUEST = "LOAD_POST_REQUEST";
export const LOAD_PRODUCT_SUCCESS = "LOAD_POST_SUCCESS";
export const LOAD_PRODUCT_FAILURE = "LOAD_POST_FAILURE";

export const LOAD_USER_PRODUCT_REQUEST = "LOAD_USER_PRODUCT_REQUEST";
export const LOAD_USER_PRODUCT_SUCCESS = "LOAD_USER_PRODUCT_SUCCESS";
export const LOAD_USER_PRODUCT_FAILURE = "LOAD_USER_PRODUCT_FAILURE";

export const ADD_PRODUCT_REQUEST = "ADD_PRODUCT_REQUEST";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const ADD_PRODUCT_FAILURE = "ADD_PRODUCT_FAILURE";

export const REMOVE_PRODUCT_REQUEST = "REMOVE_PRODUCT_REQUEST";
export const REMOVE_PRODUCT_SUCCESS = "REMOVE_PRODUCT_SUCCESS";
export const REMOVE_PRODUCT_FAILURE = "REMOVE_PRODUCT_FAILURE";

// 이미지는 이거 하나만 action 해주면 된다.
export const REMOVE_IMAGE = "REMOVE_IMAGE";

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

// 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성은 지키면서)
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;
      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;
      case UPLOAD_IMAGES_SUCCESS: {
        draft.imagePaths = action.data;
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      }
      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;
      case LOAD_PRODUCT_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;
      case LOAD_PRODUCT_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.singlePost = action.data;
        break;
      case LOAD_PRODUCT_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;
      case ADD_PRODUCT_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_PRODUCT_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(action.data);
        draft.imagePaths = [];
        break;
      case ADD_PRODUCT_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case REMOVE_PRODUCT_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_PRODUCT_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(
          (v) => v.id !== action.data.PostId
        );
        break;
      case REMOVE_PRODUCT_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;
