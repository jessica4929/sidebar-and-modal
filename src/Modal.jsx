import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { closeModal, isModalOpen } = useGlobalContext();
  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <button onClick={closeModal} className="close-btn">
          <FaTimes />
        </button>
        <h2>Modal Content</h2>
      </div>
    </div>
  );
};
export default Modal;
