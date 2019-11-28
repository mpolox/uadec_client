import React, { createContext, useReducer } from "react";
import UserReducer from "../reducers/UserReducer";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const initialUsers = [
    { id: 1, name: "Marcopolo", lastName: "Ramos", lastNameMother: "Peña", email: "mpolox@gmail.com", phone: "321654987" },
    { id: 2, name: "Emilia", lastName: "Ramos", lastNameMother: "Galván", email: "emy@gmail.com", phone: "1112223334" }
  ];

  //const [users, setUsers] = useState(initialUsers);
  const [users, dispatch] = useReducer(UserReducer, initialUsers);

  // /* Functions */
  // const addUser = (name, lastName, lastNameMother, email, phone) => {
  //   setUsers([...users, { name, lastName, lastNameMother, email, phone }]);
  // };

  // const deleteUser = (id) => {
  //   setUsers(users.filter(user => user.id !== id));
  // };

  return (
    <UserContext.Provider value={{ users, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider