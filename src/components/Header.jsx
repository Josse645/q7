import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            7colours
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <Link to="/drawings" className="hover:text-primary">Drawings</Link>
            <Link to="/stories" className="hover:text-primary">Stories</Link>
            <Link to="/posts" className="hover:text-primary">All Posts</Link>
            <Link to="/community" className="hover:text-primary">Community</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
              <span className="sr-only">Search</span>
              🔍
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
              <span className="sr-only">Notifications</span>
              🔔
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
              <span className="sr-only">Profile</span>
              👤
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;