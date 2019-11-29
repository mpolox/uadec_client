import React, {useState, useContext} from 'react';
import { UserContext } from "../contexts/UserContext";


export const Displayer = (props) => {
  console.log(props);
  console.log("USERS:", props.users);
  return (
    props.isOn ? props.users ?
    <div>SOMETHIN {props.users.length}</div> :
    <div>mm...</div>:
    <div>SOMETHIN ELSE</div>
  )
}

const TestComponent = () => {
  const [isOn, setIsOn] = useState(false);
  const { users, dispatch } = useContext(UserContext);

  const handleClick = () => {
    dispatch({type:"GET_USERS"})
    setIsOn(!isOn);
  }



  console.log("ON:", isOn);
  return (
    <div>
      <Displayer isOn={isOn} users={users}/>
      <button onClick={handleClick}>OK</button>

    </div>
    
  );
}
 
export default TestComponent;