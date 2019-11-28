import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faIdCard, faUserEdit, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'

const UserItem = (props) => {
  const { dispatch } = useContext(UserContext);

  const handleDelete = (e) => {

    console.log("NAME:", e.currentTarget.name);
    switch (e.currentTarget.name) {
      case "download":
        break;
      case "details":
          break;
      case "edit":
          break;
      case "delete":
          dispatch({
            type: "REMOVE_USER",
            id: user.id
          });
        break;        
      default:
        break;
    }



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
          <button name="download" onClick={handleDelete}>
            <FontAwesomeIcon icon={faCloudDownloadAlt} size="lg" />
          </button>
          <button name="details" onClick={handleDelete}>
            <FontAwesomeIcon icon={faIdCard} size="lg" />
          </button>
          <button name="edit" onClick={handleDelete}>
            <FontAwesomeIcon icon={faUserEdit} size="lg" />
          </button>
          <button name="delete" className="button-delete" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrashAlt} size="lg" />
          </button>
        </td>
      </tr>
    </tbody>
  )
}

export default UserItem;