import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { openModal, openSidebar, isModalOpen } = useGlobalContext();
  return (
    <div>
      <button
        type="button"
        className="btn sidebar-toggle"
        onClick={openSidebar}
      >
        <FaBars />
      </button>

      <button type="button" className="btn modal-btn" onClick={openModal}>
        Show Modal
      </button>
    </div>
  );
};
export default Home;
