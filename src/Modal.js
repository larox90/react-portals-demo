function Modal (props) {
  const { closeModal } = props;
  return (
    <div className="Modal">
      <div className="ModalInner">
        <p>this is a modal</p>
        <button onClick={closeModal}>close modal</button>
      </div>
    </div>
  );
}

export default Modal;