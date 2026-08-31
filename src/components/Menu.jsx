import { NavLink } from "react-router-dom";
import ContactDock from "./ContactDock";

const menuIcons = {
  About: "♟",
  Services: "✥",
  Education: "⌂",
  Gallery: "▧",
};

function Menu({ isOpen, onClose }) {
  return (
    <div className={`menu-overlay ${isOpen ? "menu-overlay-open" : ""}`} aria-hidden={!isOpen}>
      <div className="menu-panel">
        <div className="menu-topbar">
          <div className="menu-panel-title">MORE</div>
          <button type="button" className="menu-close" onClick={onClose} aria-label="Close navigation menu">×</button>
        </div>

        <nav className="menu-links">
          {["About", "Services", "Education"].map((label) => (
            <NavLink to={`/${label.toLowerCase()}`} onClick={onClose} key={label}>
              <span className="menu-link-icon">{menuIcons[label]}</span>
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="menu-bottom">
          <ContactDock inMenu />
          <a className="menu-resume" href="/resume.pdf" download>RESUME <span>↓</span></a>
        </div>
      </div>
    </div>
  );
}

export default Menu;
