const UserReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.user];
    case "REMOVE_USER":
      return state.filter(user => user.id !== action.id);
    default:
      return state;
  }
}

export default UserReducer;