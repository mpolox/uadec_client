import React, { createContext, useReducer, useEffect } from "react";
import UserReducer from "../reducers/UserReducer";
export const UserContext = createContext();

const UserContextProvider = (props) => {
  const initialUsers = [];
  const [users, dispatch] = useReducer(UserReducer, initialUsers);

  return (
    <UserContext.Provider value={{ users, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider