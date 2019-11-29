import React, { createContext, useReducer, useEffect } from "react";
import UserReducer from "../reducers/UserReducer";
import axios from "axios";

export const UserContext = createContext();

const PATH = "https://localhost:44397/";

const UserContextProvider = (props) => {
  const initialUsers = [];

  const setInitialUsers_LocalStorage = () => {
    const existing = JSON.parse(localStorage.getItem("users"));
    const myUsers = existing ? existing : [];
    return myUsers;
  }

  const setInitialUsers_Axios = () => {
    axios.get(PATH + "user/All")
      .then(res => {
        console.log("YEY!!!", res.data);
        return (res.data);
      }).catch(err => {
        console.log("Error on axios request", err);
      });
    return initialUsers;
  }

  const [users, dispatch] = useReducer(UserReducer, setInitialUsers_Axios());

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <UserContext.Provider value={{ users, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider