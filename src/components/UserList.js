import React, { useContext, useState } from 'react';
import { UserContext } from "../contexts/UserContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faIdCard, faUserEdit, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'
import Modal from "./Modal"


const UserList = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedUserId, setSelecteUserId] = useState({});

  const { users, deleteUser } = useContext(UserContext);


  const handleClick = (e) => {
    console.log("000", e.currentTarget.polo);
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
        setIsVisible(true); //open modal
        setSelecteUserId(e.currentTarget.value);  // set selected user
        //deleteUser(user.id);
        break;
      // modal button actions
      case "button1":
      case "button2":
        setIsVisible(false);
        break;
      case "button3":
        setIsVisible(false);  // close modal
        deleteUser(selectedUserId);  // delete selected user
        break;
      default:
        break;
    }
  }

  const Items = ({ user }) => {
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
            <button name="delete" className="button-delete" value={user.id} onClick={handleClick}>
              <FontAwesomeIcon icon={faTrashAlt} size="lg" />
            </button>
          </td>
        </tr>
      </tbody>
    )
  }

  return users ? users.length ?
    <div className="user-list">      
      <Modal
        title={"Destroy"}
        text={"Seguro que quieres acabar con ?" + selectedUserId}
        isVisible={isVisible}

        button1_text={"Nel,  no se arma"}
        button1_action={handleClick}

        button2_text={"Quiero saber más"}
        button2_action={handleClick}
        button2_style={"button-warning"}

        button3_text={"Sí, destruir"}
        button3_action={handleClick}
        button3_style={"button-delete"}
      />

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
            return (<Items key={user.email} user={user} />)
          })
        }
      </table>
    </div> :
    <h2>
      No existen usuarios registrados
  </h2> :
    <div className="loader"></div>
}

export default UserList;