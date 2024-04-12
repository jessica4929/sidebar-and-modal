import { useState } from "react";
import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import { useGlobalContext } from "./context";

const App = () => {
  const { isModalOpen, closeModal, isSidebarOpen, closeSidebar } =
    useGlobalContext();
  return (
    <main>
      <Home />
      {isModalOpen && <Modal closeModal={closeModal} />}
      {isSidebarOpen && <Sidebar closeSidebar={closeSidebar} />}
    </main>
  );
};
export default App;
