import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

const UserForm = (props) => {
  const { addUser } = useContext(UserContext);

  /* user propierties */
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameMother, setLastNameMother] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("adding...", name);
    if (name && lastName && email) {
      addUser(name, lastName, lastNameMother, email, phone);
      setName("");
      setLastName("");
      setLastNameMother("");
      setEmail("");
      setPhone("");
    }
  }

  return ( 
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" value={name} placeholder="Nombre" onChange={(e) => setName(e.target.value)}/>
      <input type="text" value={lastName} placeholder="Apellido" onChange={(e) => setLastName(e.target.value)}/>
      <input type="text" value={lastNameMother} placeholder="Apellido Materno" onChange={(e) => setLastNameMother(e.target.value)}/>
      <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
      <input type="text" value={phone} placeholder="Teléfono" onChange={(e) => setPhone(e.target.value)}/>
      <input type="submit" value ="Agregar Usuario"></input>
    </form>
  );
}
 
export default UserForm;