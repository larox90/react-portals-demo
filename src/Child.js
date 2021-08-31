import { useState } from "react";
import ReactDOM from 'react-dom';
import Modal from "./Modal";

function Child () {
  // handling if we show or not the modal
  const [showModal, setShowModal] = useState(false);
  // method used to change the status of our state
  // this method is sent as prop to the Modal component and it works
  const changeShowModal = () => {
    setShowModal(!showModal)
  }
  return (
    <div className="Child">
      <p>child component</p>
      <button onClick={changeShowModal}>show modal</button>
      { showModal && ReactDOM.createPortal(<Modal closeModal={changeShowModal} />, document.getElementById('modals')) }
    </div>
  );
}

export default Child;