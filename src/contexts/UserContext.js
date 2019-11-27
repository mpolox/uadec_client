import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const initialUsers = [
    { id: 1, name: "Marcopolo", lastName: "Ramos", lastNameMother: "Peña", email: "mpolox@gmail.com", phone: "321654987" },
    { id: 2, name: "Emilia", lastName: "Ramos", lastNameMother: "Galván", email: "emy@gmail.com", phone: "1112223334" }
  ];

  const [users, setUsers] = useState(initialUsers);

  /* Functions */
  const addUser = (name, lastName, lastNameMother, email, phone) => {
    console.log("ADDing---");
    setUsers([...users, { name, lastName, lastNameMother, email, phone }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <UserContext.Provider value={{users, addUser, deleteUser}}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider