import React from 'react';

import useContent from 'components/layout/Content/Content.hooks';

import type { ContentProps } from './Content.types';

const Content = (props: ContentProps) => {
  const { children } = props;
  const { isCollapsed } = useContent();
  return (
    <section
      className={`text-gray-600 body-font font-sans pt-20 mr-6 
        ${!isCollapsed ? 'ml-64' : 'ml-24'} pl-8 transition-width transition-slowest ease`}
    >
      <div className="container p-6 mb-24 mx-auto bg-white rounded drop-shadow-xl min-h-full">
        {children}
      </div>
    </section>
  );
};
export default Content;
