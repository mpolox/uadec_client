import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import Modal from "./Modal"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faIdCard, faUserEdit, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'

const UserItem = (props) => {
  const { user } = props;
  const { deleteUser } = useContext(UserContext);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (e) => {
    switch (e.currentTarget.name) {
      case "download":
        // dispatch({type:"GET_LIST_AXIOS"})
        break;
      case "details":
        // dispatch({type:"GET_LIST_LOCALSTORAGE"})
        break;
      case "edit":
        break;
      case "delete":
        setIsVisible(true);
        //deleteUser(user.id);
        break;
      case "button1" :
        setIsVisible(false);
        break;
      default:
        break;
    }
  }

  return (
    <tbody>
      <tr>
        <td>{user.name}</td>
        <td>{user.lastName}</td>
        <td>{user.lastNameMother}</td>
        <td>{user.email}</td>
        <td className="options" stye={"text-align: right;"}>
          <button name="download" >
            <FontAwesomeIcon icon={faCloudDownloadAlt} size="lg" />
          </button>
          <button name="details">
            <FontAwesomeIcon icon={faIdCard} size="lg" />
          </button>
          <button name="edit" >
            <FontAwesomeIcon icon={faUserEdit} size="lg" />
          </button>
          <button name="delete" className="button-delete" onClick={handleClick}>
            <FontAwesomeIcon icon={faTrashAlt} size="lg" />
          </button>
        </td>
      </tr>
    
    </tbody>
  )
}

export default UserItem;