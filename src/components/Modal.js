import React from 'react';
const Modal = (props) => {

  const {
    isVisible, title, text, 
    button1_text, button1_action, button1_style,
    button2_text, button2_action, button2_style,
    button3_text, button3_action, button3_style
  } = props;

  return ( 
    isVisible ?
    <div className="modal">
      <div className="modal-content">
      <h2>{title}</h2>
      <div className="modal-text">{text}</div>
      { //button 1
        button1_text ?
        <button className={button1_style} name="button1" onClick={button1_action}>{button1_text}</button>
        : null
      }
      { 
        button2_text ?
        <button className={button2_style} name="button2" onClick={button2_action}>{button2_text}</button>
        : null
      }   
      { 
        button3_text ?
        <button className={button3_style} name="button3" onClick={button3_action}>{button3_text}</button>
        : null
      }    
      </div>        
    </div>
    :
    null
   );
}
 
export default Modal;