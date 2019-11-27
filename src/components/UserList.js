import React, { useContext } from 'react';
import { UserContext } from "../contexts/UserContext";
import UserItem from './UserItem';

const UserList = (props) => {
  const { users } = useContext(UserContext);
  return users.length ?
    <div className="user-list">
      <h2>{users.length} users registered</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Apellido Materno</th>
            <th>email</th>
            <th>Options</th>
          </tr>
        </thead>
        {
          users.map(user => {
            return (<UserItem key={user.email} user={user} />)
          })
        }
      </table>
    </div> :
    <div>
      No users
  </div>
}

export default UserList;