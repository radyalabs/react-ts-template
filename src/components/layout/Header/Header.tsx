import React from 'react';

import NavChevron from 'components/icons/NavChevron/NavChevron';

import useHeader from './Header.hooks';

const Header = () => {
  const { isCollapsed, toggleCollapsed } = useHeader();
  return (
    <nav className="bg-primary-500 py-2 px-4 shadow fixed w-full z-10">
      <div className={`container flex flex-wrap items-center [&>*]:mr-5 ${!isCollapsed ? 'ml-64' : 'ml-24'} transition-width transition-slowest ease`}>
        <button className="text-xl text-neutral-100" onClick={toggleCollapsed}>
          <NavChevron isCollapsed={isCollapsed} />
        </button>
        <span
          className="self-center text-2xl font-extrabold whitespace-nowrap text-neutral-100"
        >
          Radya Digital CMS
        </span>
      </div>
    </nav>
  );
};
export default Header;
