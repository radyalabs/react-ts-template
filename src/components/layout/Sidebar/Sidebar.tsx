import React from 'react';
import { Link } from 'react-router-dom';
import mark from 'assets/brand_mark_primary.png';
import logo from 'assets/brand_primary.png';

import ArrowRounded from 'components/icons/ArrowRounded';
import Book from 'components/icons/Book';
import Bookmark from 'components/icons/Bookmark';

import useSidebar from './Sidebar.hooks';

const Sidebar = () => {
  const { isCollapsed, isActive } = useSidebar();
  return (
    <aside
      className={`${!isCollapsed ? 'w-64' : 'w-24'} fixed h-full drop-shadow-xl z-50 transition-width transition-slowest ease`}
      aria-label="Sidebar"
    >
      <div className="overflow-y-auto bg-gray-50 h-full px-2">
        <div className="flex justify-center mb-10 p-2">
          <Link to="/">
            <img src={!isCollapsed ? logo : mark} className="min-h-[5rem] h-5 w-auto object-contain" alt="Brand Logo" />
          </Link>
        </div>
        <ul className="space-y-2 text-gray-600">
          <li>
            <Link to="/" className={`flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-200 ${isActive('/') && 'bg-gray-100'}`}>
              <span className="ml-3">{isCollapsed ? <Book /> : 'List'}</span>
            </Link>
          </li>
          <li>
            <Link to="/compare" className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-200">
              <span className="ml-3">{isCollapsed ? <ArrowRounded /> : 'Compare'}</span>
            </Link>
          </li>
          <li>
            <Link to="/bookmark" className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-200">
              <span className="ml-3">{isCollapsed ? <Bookmark /> : 'Bookmark'}</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;
