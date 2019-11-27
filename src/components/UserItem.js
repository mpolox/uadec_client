import React, {useContext} from 'react';
import { UserContext } from '../contexts/UserContext';
const UserItem = (props) => {
  const { deleteUser } = useContext(UserContext);

  const handleDelete = () => {
    console.log("DELETE:", user.id);
    deleteUser(user.id);
  }

  const { user } = props;
  return (
    <tbody>
      <tr>
        <td>{user.name}</td>
        <td>{user.lastName}</td>
        <td>{user.lastNameMother}</td>
        <td>{user.email}</td>
        <td className="options" stye={"text-align: right;"}>
          <button onClick={handleDelete}>X</button>
          <button>?</button>
          <button>=</button>
        </td>
      </tr>
    </tbody>
  )
}

export default UserItem;