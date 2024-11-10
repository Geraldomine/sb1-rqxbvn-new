import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bell, Activity } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinkClass = (path: string) => `
    ${isActive(path) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}
    px-3 py-2 rounded-md text-sm font-medium transition-colors
  `;

  return (
    <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <Activity className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                Sports Meetup
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/events" className={navLinkClass('/events')}>
              Find Events
            </Link>
            <Link to="/create-event" className={navLinkClass('/create-event')}>
              Host Event
            </Link>
            <Link to="/past-events" className={navLinkClass('/past-events')}>
              Past Events
            </Link>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              <Link to="/login" className={navLinkClass('/login')}>
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              to="/events"
              className={`block ${navLinkClass('/events')}`}
              onClick={() => setIsOpen(false)}
            >
              Find Events
            </Link>
            <Link
              to="/create-event"
              className={`block ${navLinkClass('/create-event')}`}
              onClick={() => setIsOpen(false)}
            >
              Host Event
            </Link>
            <Link
              to="/past-events"
              className={`block ${navLinkClass('/past-events')}`}
              onClick={() => setIsOpen(false)}
            >
              Past Events
            </Link>
            <Link
              to="/login"
              className={`block ${navLinkClass('/login')}`}
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;