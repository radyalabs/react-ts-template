import { useLocation } from 'react-router-dom';
import { useLayoutContext } from 'contexts/LayoutContext/LayoutContext';

const useSidebar = () => {
  const { isCollapsed } = useLayoutContext();
  const location = useLocation();

  const isActive = (path: string): boolean => location.pathname === path;

  return { isCollapsed, isActive };
};

export default useSidebar;
