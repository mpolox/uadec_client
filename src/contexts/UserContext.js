import React, { createContext, useState, useEffect } from "react";
//import UserReducer from "../reducers/UserReducer";
import axios from "axios";

export const UserContext = createContext();

const PATH = "https://localhost:44397/";
const UserContextProvider = (props) => {



  const [users, setUsers] = useState(null);

  useEffect(() => {
    getInitialUsers();
  }, []);

  /* Function s */
  const getInitialUsers = () => {
    axios.get(PATH + "user/All")
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.log("Error:", err);
      });
  }

  const deleteUser = (id) => {
    axios.delete(PATH + "user?id=" + id)
      .then(res => {
        setUsers(users.filter(user => user.id !== res.data.id))
      })
      .catch(err => {
        console.log("Error:", err);
      })
  }

  const updateUser = (name) => {
    console.log("update:", name);
  }

  const addUser = (name, lastName, lastNameMother, email, phone) => {
    axios.post(PATH + "user",  {name,lastName, lastNameMother, email, phone})
      .then(res => {
        const id = res.data.id;
        setUsers([...users, {id, name,lastName, lastNameMother, email, phone}])
      })
      .catch(err => {
        console.log("ERROR:", err)
      })
  }

  return (
    <UserContext.Provider value={{ users, deleteUser, updateUser, addUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider