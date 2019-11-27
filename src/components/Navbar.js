import React, {useContext} from "react";
import { UserContext } from "../contexts/UserContext";

const Navbar = (props) => {
  const {users} = useContext(UserContext);
  return (
    <div className="Navbar">
      <h1>Application users: {users.length}</h1>
    </div>
  );
}
 
export default Navbar