import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import BottomNavigation from "./BottomNavigation";
import Menu from "./Menu";
import ContactDock from "./ContactDock";

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="site">

      {/* =================================
          GLOBAL FIXED TECH BACKGROUND
          ================================= */}

      <div className="site-background" aria-hidden="true">

        <div className="site-grid"></div>

        <div className="ambient-glow ambient-glow-one"></div>
        <div className="ambient-glow ambient-glow-two"></div>

        {/* Floating technology objects */}

        <div className="floating-tech tech-monitor tech-one">
          <span></span>
        </div>

        <div className="floating-tech tech-laptop tech-two">
          <span></span>
        </div>

        <div className="floating-tech tech-code tech-three">
          &lt;/&gt;
        </div>

        <div className="floating-tech tech-server tech-four">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="floating-tech tech-phone tech-five">
          <span></span>
        </div>

        <div className="floating-tech tech-monitor tech-six">
          <span></span>
        </div>

        <div className="floating-tech tech-code tech-seven">
          &lt;/&gt;
        </div>

        <div className="floating-tech tech-laptop tech-eight">
          <span></span>
        </div>

        <div className="floating-tech tech-server tech-nine">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="floating-tech tech-monitor tech-ten">
          <span></span>
        </div>

        {/* Small floating particles */}

        <div className="tech-particle particle-one"></div>
        <div className="tech-particle particle-two"></div>
        <div className="tech-particle particle-three"></div>
        <div className="tech-particle particle-four"></div>
        <div className="tech-particle particle-five"></div>

      </div>


      {/* =================================
          HEADER / HAMBURGER
          ================================= */}

      <Navbar
        onMenuClick={() => setMenuOpen(true)}
      />


      {/* =================================
          HAMBURGER MENU
          ================================= */}

      <Menu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />


      {/* =================================
          CURRENT PAGE
          ================================= */}

      <main className="site-content">
        <Outlet />
        {!isHome && <ContactDock />}
      </main>


      {/* =================================
          BOTTOM NAVIGATION
          ================================= */}

      <BottomNavigation />

    </div>
  );
}

export default Layout;