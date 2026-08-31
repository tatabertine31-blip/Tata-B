import { NavLink } from "react-router-dom";

const icons = {
  home: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10.8 12 3l9 7.8v9.2a1 1 0 0 1-1 1h-5.3v-6.2H9.3V21H4a1 1 0 0 1-1-1v-9.2Z" fill="currentColor" /></svg>
  ),
  projects: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="7" cy="6" r="2.2" fill="currentColor"/><circle cx="17" cy="6" r="2.2" fill="currentColor"/><circle cx="12" cy="17" r="2.2" fill="currentColor"/><path d="M9 7.4 12 15M15 7.4 12 15M9.2 6h5.6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
  ),
  skills: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M8 20h8M12 17v3M9 9l-2 2 2 2M15 9l2 2-2 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  experience: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2" fill="currentColor"/><path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 12h18M10 12v2h4v-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
};

function BottomNavigation() {
  const links = [
    ["/", "Home", "home"],
    ["/projects", "Projects", "projects"],
    ["/skills", "Skills", "skills"],
    ["/experience", "Experience", "experience"],
    ["/contact", "Contact", "contact"],
  ];

  return (
    <nav className="bottom-navigation" aria-label="Main navigation">
      {links.map(([to, label, icon]) => (
        <NavLink to={to} end={to === "/"} key={to}>
          <span className="nav-icon">{icons[icon]}</span>
          <span className="nav-label">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomNavigation;
