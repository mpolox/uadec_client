import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faIdCard, faUserEdit, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'

const UserItem = (props) => {
  const { dispatch } = useContext(UserContext);

  const handleDelete = () => {
    dispatch({
      type: "REMOVE_USER",
      id: user.id
    });
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
          <button >
            <FontAwesomeIcon icon={faCloudDownloadAlt} size="lg"/>
          </button>
          <button >
            <FontAwesomeIcon icon={faIdCard} size="lg"/>
          </button>
          <button>
            <FontAwesomeIcon icon={faUserEdit} size="lg"/>
          </button>
          <button className="button-delete" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrashAlt} size="lg"/>
          </button>
        </td>
      </tr>
    </tbody>
  )
}

export default UserItem;