function Navbar({ onMenuClick }) {
  return (
    <header className="navbar">

      <div className="navbar-logo">
        TATA
      </div>

      <button
        className="menu-button"
        type="button"
        onClick={onMenuClick}
        aria-label="Open navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </header>
  );
}

export default Navbar;