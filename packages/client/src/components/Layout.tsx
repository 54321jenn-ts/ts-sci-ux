import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './Layout.css';
import Breadcrumbs from './Breadcrumbs';
import Toolbar from './Toolbar';
import CustomSidebar from './CustomSidebar';

// Define sidebar items based on the app's routes
// Using IconName enum values from the TetraScience Toolkit
const sidebarItems = [
  {
    icon: 'home',
    label: 'Home',
    path: '/',
  },
  {
    icon: 'database',
    label: 'Data Table',
    path: '/data-table',
  },
  {
    icon: 'pencil',
    label: 'Forms',
    path: '/forms',
  },
  {
    icon: 'pie-chart',
    label: 'Charts & Graphs',
    path: '/charts',
  },
  {
    icon: 'cube',
    label: 'Contributing',
    path: '/contributing',
  },
];

function Layout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="layout-container">
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      )}

      {/* Overlay for mobile */}
      {isMobile && isMobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`sidebar-wrapper ${isSidebarCollapsed ? 'collapsed' : ''} ${isMobile && isMobileMenuOpen ? 'mobile-open' : ''} ${isMobile && !isMobileMenuOpen ? 'mobile-closed' : ''}`}>
        <CustomSidebar items={sidebarItems} isCollapsed={isSidebarCollapsed} />
      </div>

      {/* Main Content */}
      <div className="main-content">
        <Toolbar
          isSidebarCollapsed={isSidebarCollapsed}
          onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />
        <div className="page-content">
          <Breadcrumbs />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;

