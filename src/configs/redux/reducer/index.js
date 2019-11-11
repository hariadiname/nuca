const stateAwal = {
  popup: false,
  isLoading: false,
  isLogin: false,
  user: {}
};

const reducer = (state = stateAwal, action) => {
  if (action.type === "CHANGE_POPUP") {
    return {
      ...state,
      popup: action.value
    };
  }
  if (action.type === "CHANGE_LOADING") {
    return {
      ...state,
      isLoading: action.value
    };
  }
  if (action.type === "CHANGE_LOGIN") {
    return {
      ...state,
      isLogin: action.value
    };
  }
  if (action.type === "CHANGE_USER") {
    return {
      ...state,
      user: action.value
    };
  }
  return state;
};

export default reducer;
