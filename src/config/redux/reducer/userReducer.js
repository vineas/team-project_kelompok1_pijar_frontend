const initialState = {
  user: [],
  usertDetail: [],
};

const userReducer = (state = initialState, action) => {
  if (action.type === "USER_LOGIN_PENDING") {
    return {
      ...state,
      usertDetail: action.payload,
    };
  } else if (action.type === "USER_LOGIN_SUCCESS") {
    return {
      ...state,
      product: action.payload,
    };
  } else if (action.type === "CREATE_LOGIN") {
    return state;
  } else if (action.type === "CREATE_REGISTER") {
    return state;
  } else {
    return state;
  }
};

export default userReducer;
