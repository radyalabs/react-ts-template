import React from 'react';
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
          <a href="/">
            <img src={!isCollapsed ? logo : mark} className="min-h-[5rem] h-5 w-auto object-contain" alt="Brand Logo" />
          </a>
        </div>
        <ul className="space-y-2 text-gray-600">
          <li>
            <a
              href="/"
              className={`flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-200 ${isActive('/') && 'bg-gray-100'}`}
            >
              <span className="ml-3">{isCollapsed ? <Book /> : 'List'}</span>
            </a>
          </li>
          <li>
            <a href="/compare" className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-200">
              <span className="ml-3">{isCollapsed ? <ArrowRounded /> : 'Compare'}</span>
            </a>
          </li>
          <li>
            <a href="/bookmark" className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-200">
              <span className="ml-3">{isCollapsed ? <Bookmark /> : 'Bookmark'}</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;
