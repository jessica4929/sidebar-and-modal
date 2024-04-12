import { useGlobalContext } from "./context";
import { social, links } from "./data";
import { FaTimes } from "react-icons/fa";
import logo from "./logo.svg";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <header className="sidebar-header">
        <img src={logo} alt="logo" />
        <button onClick={closeSidebar} className="close-btn">
          <FaTimes />
        </button>
      </header>
      <ul className="sidebar-links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id} className="sidebar-link">
              <a href={url}>
                {icon}
                <h4 className="sidebar-link-text">{text}</h4>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="sidebar-social-links">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id} className="sidebar-social-link">
              <a href={url}> {icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
