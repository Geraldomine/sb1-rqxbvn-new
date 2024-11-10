import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Instagram, Activity } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Activity className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold">Sports Meetup</span>
            </div>
            <p className="text-gray-400">
              Connect with sports enthusiasts and join exciting events in your area.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/events" className="text-gray-400 hover:text-white transition">
                  Find Events
                </Link>
              </li>
              <li>
                <Link to="/create-event" className="text-gray-400 hover:text-white transition">
                  Create Event
                </Link>
              </li>
              <li>
                <Link to="/past-events" className="text-gray-400 hover:text-white transition">
                  Past Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-gray-400 hover:text-white transition">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-400 hover:text-white transition">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-400 hover:text-white transition">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Sports Meetup. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;