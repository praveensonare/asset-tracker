import { useState, useRef, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  FiMenu,
  FiChevronLeft,
  FiChevronRight,
  FiUser,
  FiLogOut
} from 'react-icons/fi';
import { MdDashboard } from 'react-icons/md';

const DashboardLayout = ({ userType, children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleProfileClick = () => {
    navigate(`/${user?.type}/profile`);
    setIsProfileDropdownOpen(false);
  };

  const getUserTypeLabel = () => {
    const labels = {
      mf: 'Manufacturer',
      lp: 'Logistic Provider',
      ws: 'Wholeseller',
      ret: 'Retailer',
      con: 'Consumer'
    };
    return labels[userType] || 'User';
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarCollapsed ? 'w-20' : 'w-64'
        } bg-gradient-to-b from-slate-800 to-slate-900 text-white transition-all duration-300 flex flex-col shadow-2xl`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center justify-between">
            {!isSidebarCollapsed && (
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Asset Tracker
                </h2>
                <p className="text-xs text-gray-400 mt-1">{getUserTypeLabel()}</p>
              </div>
            )}
            <button
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
            >
              {isSidebarCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <button
            onClick={() => navigate(`/${userType}/dashboard`)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <MdDashboard className="text-xl flex-shrink-0" />
            {!isSidebarCollapsed && <span className="font-medium">Dashboard</span>}
          </button>
        </nav>

        {/* User Profile Section at Bottom */}
        <div className="p-4 border-t border-slate-700 relative" ref={dropdownRef}>
          {/* Profile Dropdown - Opens Upward */}
          {isProfileDropdownOpen && (
            <div className="absolute bottom-full left-4 right-4 mb-2 bg-white rounded-lg shadow-xl overflow-hidden animate-slideUp">
              <button
                onClick={handleProfileClick}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors text-gray-700"
              >
                <FiUser className="text-lg" />
                <span className="font-medium">Profile</span>
              </button>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors text-red-600 border-t border-gray-200"
              >
                <FiLogOut className="text-lg" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          )}

          {/* Profile Button */}
          <button
            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            className="w-full flex items-center gap-3 p-3 hover:bg-slate-700 rounded-lg transition-all"
          >
            <img
              src={user?.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=default'}
              alt={user?.name}
              className="w-10 h-10 rounded-full border-2 border-blue-400 flex-shrink-0"
            />
            {!isSidebarCollapsed && (
              <div className="flex-1 text-left overflow-hidden">
                <p className="font-semibold text-sm truncate">{user?.name}</p>
                <p className="text-xs text-gray-400 truncate">{user?.email}</p>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {getUserTypeLabel()} Dashboard
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Welcome back, {user?.name}!
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-700">{user?.name}</p>
                <p className="text-xs text-gray-500">{getUserTypeLabel()}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
