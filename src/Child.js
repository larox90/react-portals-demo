import { useState } from "react";
import ReactDOM from 'react-dom';
import Modal from "./Modal";

function Child () {
  const [showModal, setShowModal] = useState(false);
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