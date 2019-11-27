import React from 'react';

const UserItem = (props) => {
  const { user } = props;
  return (
    <tbody>
      <tr>
        <td>{user.name}</td>
        <td>{user.lastName}</td>
        <td>{user.lastNameMother}</td>
        <td>{user.email}</td>
        <td className="options" stye={"text-align: right;"}>
          <button>X</button>
          <button>?</button>
          <button>=</button>
        </td>
      </tr>
    </tbody>
  )
}

export default UserItem;