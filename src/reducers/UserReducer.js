import axios from "axios";

const UserReducer = (state, action) => {
  const PATH = "https://localhost:44397/";

  switch (action.type) {
    case "ADD_USER":
      const newData = [...state, action.user];
      localStorage.setItem("users", JSON.stringify(newData));
      console.log("NEW DATA:", newData);
      return [...state, action.user];

    case "GET_LIST_LOCALSTORAGE":
      console.log("Get list from localstorage");
      const existing = JSON.parse(localStorage.getItem("users"));
      const myUsers = existing ? existing : [];
      return myUsers;

    case "GET_LIST_AXIOS":
      console.log("Get list from API");
      axios.get(PATH + "user/All")
        .then(res => {
          console.log("YEY!!!", res.data);
          return (res.data);
        }).catch(err => {
          console.log("Error on axios request", err);
        });
      return [];

    case "REMOVE_USER":
      return state.filter(user => user.name !== action.name);

    default:
      return state;
  }
}

export default UserReducer;