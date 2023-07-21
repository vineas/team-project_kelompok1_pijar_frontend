const initialState = {
  data: {
    users_name: "",
    users_email: "",
    users_phone: "",
  },
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  if (action.type === "USER_LOGIN_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "USER_LOGIN_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
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
