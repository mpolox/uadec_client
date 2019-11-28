import React, { useContext } from 'react';
import { UserContext } from "../contexts/UserContext";
import UserItem from './UserItem';

const UserList = (props) => {
  const { users } = useContext(UserContext);
  return users.length ?
    <div className="user-list">
      <h2>{users.length} usuarios registrados</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Apellido Materno</th>
            <th>email</th>
            <th className="options-header">Options</th>
          </tr>
        </thead>
        {
          users.map(user => {
            return (<UserItem key={user.email} user={user} />)
          })
        }
      </table>
    </div> :
    <h2>
      No existen usuarios registrados
  </h2>
}

export default UserList;