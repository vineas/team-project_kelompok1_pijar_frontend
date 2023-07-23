const initialState = {
  recepe: [],
  productDetail: [],
};

const recepeReducer = (state = initialState, action) => {
  if (action.type === "GET_ALL_RECEPE") {
    return {
      ...state,
      product: action.payload,
    };
  } else if (action.type === "GET_DETAIL_RECEPE") {
    return {
      ...state,
      productDetail: action.payload,
    };
  } else if (action.type === "CREATE_RECEPE") {
    return state;
  } else if (action.type === "UPDATE_RECEPE") {
    return state;
  } else if (action.type === "DELETE_RECEPE") {
    return state;
  } else {
    return state;
  }
};

export default recepeReducer;
