import React, {useState} from 'react';
import Modal from "../components/Modal"

const TestComponent = (props) => {

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (e) => {
    console.log("--ITEM-->", e.currentTarget.name);
    setIsVisible(!isVisible)
  }


  return (
    <div>
      <button name="open" className="button-warning" onClick={handleClick}>OK</button>
      <Modal
        title={"Destroy"}
        text={"Seguro que quieres crear el big bang?"}
        isVisible={isVisible}

        button1_text={"Si, destruir"}
        button1_action={handleClick}
        button1_style={"button-delete"}

        button2_text={"Nel no se arma"}
        button2_action={handleClick}
        button2_style={"button-warning"}

        button3_text={"muestrame mas"}
        button3_action={handleClick}
      />
    </div>
  );
}
export default TestComponent;