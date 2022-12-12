const setData = (data) => ({
  type: 'USER_LIST',
  payload: data,
});

export const getUserData = (data) => (dispatch) => {
  dispatch(setData(data));
};
