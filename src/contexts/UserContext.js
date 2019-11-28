import React, { createContext, useReducer, useEffect } from "react";
import UserReducer from "../reducers/UserReducer";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const initialUsers = [
    { id: 1, name: "Marcopolo", lastName: "Ramos", lastNameMother: "Peña", email: "mpolox@gmail.com", phone: "321654987" },
    { id: 2, name: "Emilia", lastName: "Ramos", lastNameMother: "Galván", email: "emy@gmail.com", phone: "1112223334" }
  ];
  const [users, dispatch] = useReducer(UserReducer, initialUsers);

  useEffect( () => {
    localStorage.setItem("users", JSON.stringify(users));
    console.log("EFFECT!!!");

  }, [users]);
  return (
    <UserContext.Provider value={{ users, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider